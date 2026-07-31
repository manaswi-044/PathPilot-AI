import os
import uuid
from typing import List
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.exceptions import CustomException
from app.models.document import Document
from app.models.academic_event import AcademicEvent
from app.models.timetable_slot import TimetableSlot
from app.utils.constants import (
    ALLOWED_DOCUMENT_TYPES,
    ALLOWED_DOCUMENT_CONTENT_TYPES,
    MAX_DOCUMENT_SIZE_BYTES,
)
from app.utils.text_extraction import extract_text
from app.services.ai.document_parser_engine import document_parser_engine


class DocumentService:
    def _storage_dir(self) -> str:
        path = settings.DOCUMENT_STORAGE_DIR
        os.makedirs(path, exist_ok=True)
        return path

    def list_for_profile(self, db: Session, profile_id: str) -> List[Document]:
        return (
            db.query(Document)
            .filter(Document.profile_id == profile_id, Document.is_deleted == False)
            .order_by(Document.created_at.desc())
            .all()
        )

    def get(self, db: Session, document_id: str, profile_id: str) -> Document:
        doc = (
            db.query(Document)
            .filter(Document.id == document_id, Document.profile_id == profile_id, Document.is_deleted == False)
            .first()
        )
        if not doc:
            raise CustomException("Document not found", status_code=404)
        return doc

    def delete(self, db: Session, document_id: str, profile_id: str) -> None:
        doc = self.get(db, document_id, profile_id)
        doc.is_deleted = True
        db.commit()

    async def upload_and_parse(
        self, db: Session, profile_id: str, doc_type: str, filename: str,
        content_type: str, file_bytes: bytes,
    ) -> Document:
        if doc_type not in ALLOWED_DOCUMENT_TYPES:
            raise CustomException(
                f"Invalid doc_type '{doc_type}'. Must be one of: {', '.join(ALLOWED_DOCUMENT_TYPES)}",
                status_code=400,
            )
        if len(file_bytes) > MAX_DOCUMENT_SIZE_BYTES:
            raise CustomException("File exceeds the 10 MB upload limit", status_code=400)
        if content_type not in ALLOWED_DOCUMENT_CONTENT_TYPES and not filename.lower().endswith(
            (".pdf", ".docx", ".txt")
        ):
            raise CustomException(
                "Unsupported file type. Please upload a PDF, DOCX, or TXT file.", status_code=400
            )

        # Persist the raw file to disk under a UUID name to avoid collisions/traversal.
        stored_name = f"{uuid.uuid4()}_{os.path.basename(filename)}"
        stored_path = os.path.join(self._storage_dir(), stored_name)
        with open(stored_path, "wb") as f:
            f.write(file_bytes)

        document = Document(
            profile_id=profile_id,
            original_filename=filename,
            storage_path=stored_path,
            content_type=content_type,
            doc_type=doc_type,
            status="processing",
        )
        db.add(document)
        db.commit()
        db.refresh(document)

        try:
            raw_text = extract_text(file_bytes, content_type, filename)
            document.extracted_text = raw_text

            result = await document_parser_engine.extract_structured_data(raw_text, doc_type)

            if result.get("status") == "error":
                document.status = "failed"
                document.error_message = result.get("error", "Unknown parsing error")
                db.commit()
                db.refresh(document)
                return document

            for event in result.get("academic_events", []):
                db.add(
                    AcademicEvent(
                        profile_id=profile_id,
                        source_document_id=document.id,
                        event_type=event.get("event_type", "other"),
                        title=event["title"],
                        subject=event.get("subject"),
                        event_date=event["event_date"],
                        notes=event.get("notes"),
                    )
                )

            for slot in result.get("timetable_slots", []):
                db.add(
                    TimetableSlot(
                        profile_id=profile_id,
                        source_document_id=document.id,
                        day_of_week=slot["day_of_week"],
                        start_time=slot["start_time"],
                        end_time=slot["end_time"],
                        subject=slot["subject"],
                        slot_type=slot.get("slot_type", "lecture"),
                    )
                )

            document.status = "completed"
            db.commit()
            db.refresh(document)
            return document

        except CustomException:
            raise
        except Exception as e:
            document.status = "failed"
            document.error_message = str(e)
            db.commit()
            db.refresh(document)
            return document


document_service = DocumentService()
