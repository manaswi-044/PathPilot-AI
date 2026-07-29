from typing import Optional, List, Dict, Any
from uuid import UUID
from .common import BaseSchema

class RoadmapBase(BaseSchema):
    career: str
    duration: str
    difficulty: str
    phases: List[Dict[str, Any]]
    projects: List[Dict[str, Any]]
    resources: List[Dict[str, Any]]

class RoadmapCreate(RoadmapBase):
    profile_id: UUID

class RoadmapRead(RoadmapBase):
    id: UUID
    profile_id: UUID