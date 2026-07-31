from typing import Optional
from datetime import datetime
from uuid import UUID
from .common import BaseSchema

class AcademicEventBase(BaseSchema):
    event_type: str
    title: str
    subject: Optional[str] = None
    event_date: datetime
    notes: Optional[str] = None

class AcademicEventRead(AcademicEventBase):
    id: UUID
    profile_id: UUID
    source_document_id: Optional[UUID] = None
