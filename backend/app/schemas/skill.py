from uuid import UUID
from .common import BaseSchema

class SkillBase(BaseSchema):
    name: str

class SkillRead(SkillBase):
    id: UUID