from typing import Optional
from datetime import datetime
from uuid import UUID
from .common import BaseSchema

class ScholarshipRead(BaseSchema):
    id: UUID
    name: str
    provider: str
    amount: str
    deadline: Optional[datetime]