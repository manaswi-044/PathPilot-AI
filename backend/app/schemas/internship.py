from typing import Optional
from datetime import datetime
from uuid import UUID
from .common import BaseSchema

class InternshipRead(BaseSchema):
    id: UUID
    company: str
    role: str
    location: str
    stipend: str
    match_percentage: float
    deadline: Optional[datetime]