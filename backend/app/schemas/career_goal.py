from typing import Optional
from datetime import datetime
from uuid import UUID
from .common import BaseSchema

class CareerGoalBase(BaseSchema):
    goal_title: str
    target_date: Optional[datetime] = None

class CareerGoalCreate(CareerGoalBase):
    profile_id: UUID

class CareerGoalRead(CareerGoalBase):
    id: UUID