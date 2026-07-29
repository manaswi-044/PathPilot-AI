from typing import Optional, List
from uuid import UUID
from .common import BaseSchema
from .skill import SkillRead

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
    user_id: str

class ProfileUpdate(BaseSchema):
    full_name: Optional[str] = None
    college: Optional[str] = None
    branch: Optional[str] = None
    semester: Optional[int] = None
    cgpa: Optional[float] = None
    skills: Optional[List[str]] = None

class ProfileRead(ProfileBase):
    id: UUID
    user_id: str
    skills: List[SkillRead] = []