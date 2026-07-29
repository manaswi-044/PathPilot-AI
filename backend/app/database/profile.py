from typing import Optional, List
from uuid import UUID
from .base import BaseSchema

class SkillBase(BaseSchema):
    name: str

class SkillCreate(SkillBase):
    pass

class SkillRead(SkillBase):
    id: UUID

class ProfileBase(BaseSchema):
    full_name: str
    college: Optional[str] = None
    branch: Optional[str] = None
    semester: Optional[int] = None
    cgpa: Optional[float] = None
    study_hours: Optional[int] = None
    commute_time: Optional[int] = None
    learning_style: Optional[str] = None

class ProfileCreate(ProfileBase):
    user_id: str # From Supabase Auth

class ProfileUpdate(BaseSchema):
    full_name: Optional[str] = None
    college: Optional[str] = None
    branch: Optional[str] = None
    semester: Optional[int] = None
    cgpa: Optional[float] = None
    study_hours: Optional[int] = None
    commute_time: Optional[int] = None
    learning_style: Optional[str] = None
    skills: Optional[List[str]] = None

class ProfileRead(ProfileBase):
    id: UUID
    user_id: str
    skills: List[SkillRead] = []