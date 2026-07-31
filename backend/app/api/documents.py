from typing import List
from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.api.deps import get_current_active_profile
from app.models.profile import Profile
from app.models.academic_event import AcademicEvent
from app.models.timetable_slot import TimetableSlot
from app.schemas.base import ResponseBase
from app.schemas.document import DocumentRead, DocumentParseResult
from app.services.document_service import document_service

router = APIRouter()


@router.post("/upload", response_model=ResponseBase[DocumentParseResult], status_code=201)
async def upload_document(
    doc_type: str = Form(..., description="academic_calendar | timetable | syllabus | assignment_schedule | notes"),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_profile: Profile = Depends(get_current_active_profile),
):
    """
    Upload an academic document (PDF/DOCX/TXT) and parse it into structured
    academic_events and timetable_slots via the AI document parser engine.
    """
    file_bytes = await file.read()
    document = await document_service.upload_and_parse(
        db,
        profile_id=current_profile.id,
        doc_type=doc_type,
        filename=file.filename,
        content_type=file.content_type,
        file_bytes=file_bytes,
    )

    events = db.query(AcademicEvent).filter(AcademicEvent.source_document_id == document.id).all()
    slots = db.query(TimetableSlot).filter(TimetableSlot.source_document_id == document.id).all()

    message = (
        "Document parsed successfully"
        if document.status == "completed"
        else f"Document uploaded but parsing failed: {document.error_message}"
    )

    return {
        "success": document.status == "completed",
        "message": message,
        "data": {"document": document, "academic_events": events, "timetable_slots": slots},
    }


@router.get("/", response_model=ResponseBase[List[DocumentRead]])
async def list_documents(
    db: Session = Depends(get_db),
    current_profile: Profile = Depends(get_current_active_profile),
):
    documents = document_service.list_for_profile(db, profile_id=current_profile.id)
    return {"success": True, "message": "Documents fetched successfully", "data": documents}


@router.delete("/{document_id}", response_model=ResponseBase[dict])
async def delete_document(
    document_id: str,
    db: Session = Depends(get_db),
    current_profile: Profile = Depends(get_current_active_profile),
):
    document_service.delete(db, document_id=document_id, profile_id=current_profile.id)
    return {"success": True, "message": "Document deleted successfully", "data": {}}
