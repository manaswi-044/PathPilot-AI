from sqlalchemy import Column, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid

class Document(Base, TimestampMixin):
    """
    An uploaded source document (timetable, syllabus, academic calendar,
    assignment schedule, or free-form notes) belonging to a student profile.

    The raw file is kept on disk (see `storage_path`); this row tracks
    metadata plus the parsing lifecycle. Once parsed, the meaningful content
    is normalized into `AcademicEvent` / `TimetableSlot` rows rather than
    re-reading the raw file on every request.
    """
    __tablename__ = "documents"

    id = generate_uuid()
    profile_id = Column(String(36), ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False)

    original_filename = Column(String, nullable=False)
    storage_path = Column(String, nullable=False)
    content_type = Column(String)  # e.g. application/pdf, image/png, text/plain

    # academic_calendar | timetable | syllabus | assignment_schedule | notes
    doc_type = Column(String, nullable=False, default="notes")

    # pending -> processing -> completed | failed
    status = Column(String, nullable=False, default="pending")
    error_message = Column(Text, nullable=True)

    # Raw extracted text kept for traceability / re-parsing, not for display
    extracted_text = Column(Text, nullable=True)

    profile = relationship("Profile", back_populates="documents")
    academic_events = relationship(
        "AcademicEvent", back_populates="source_document", cascade="all, delete-orphan"
    )
    timetable_slots = relationship(
        "TimetableSlot", back_populates="source_document", cascade="all, delete-orphan"
    )
