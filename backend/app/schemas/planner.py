from typing import Optional
from datetime import datetime
from uuid import UUID
from .common import BaseSchema

class PlannerBase(BaseSchema):
    task_name: str
    scheduled_at: datetime
    status: str = "pending"

class PlannerRead(PlannerBase):
    id: UUID