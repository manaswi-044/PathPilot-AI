from typing import Optional, List
from uuid import UUID
from .common import BaseSchema
from .academic_event import AcademicEventRead
from .timetable_slot import TimetableSlotRead

ALLOWED_DOC_TYPES = {
    "academic_calendar",
    "timetable",
    "syllabus",
    "assignment_schedule",
    "notes",
}

class DocumentRead(BaseSchema):
    id: UUID
    profile_id: UUID
    original_filename: str
    content_type: Optional[str] = None
    doc_type: str
    status: str
    error_message: Optional[str] = None

class DocumentParseResult(BaseSchema):
    """Returned right after upload+parse: the document row plus everything
    that was extracted from it, so the frontend can show results immediately
    without a second round-trip."""
    document: DocumentRead
    academic_events: List[AcademicEventRead] = []
    timetable_slots: List[TimetableSlotRead] = []
