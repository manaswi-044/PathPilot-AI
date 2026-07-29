from typing import Optional
from datetime import datetime
from uuid import UUID
from .common import BaseSchema

class HackathonRead(BaseSchema):
    id: UUID
    name: str
    organizer: str
    prize_pool: str
    deadline: Optional[datetime]