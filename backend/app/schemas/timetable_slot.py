from typing import Optional
from uuid import UUID
from .common import BaseSchema

class TimetableSlotBase(BaseSchema):
    day_of_week: int  # 0=Monday ... 6=Sunday
    start_time: str
    end_time: str
    subject: str
    slot_type: str = "lecture"

class TimetableSlotRead(TimetableSlotBase):
    id: UUID
    profile_id: UUID
    source_document_id: Optional[UUID] = None
