from typing import Optional, List
from uuid import UUID
from .common import BaseSchema
from .skill import SkillRead

class CareerBase(BaseSchema):
    career_name: str
    salary_range: Optional[str] = None
    demand_score: Optional[float] = None
    growth_rate: Optional[float] = None

class CareerRead(CareerBase):
    id: UUID
    required_skills: List[SkillRead] = []