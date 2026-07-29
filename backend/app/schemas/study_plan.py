from typing import List, Dict, Any
from uuid import UUID
from .common import BaseSchema

class StudyPlanBase(BaseSchema):
    daily_plan: Dict[str, Any]
    weekly_plan: Dict[str, Any]
    study_sessions: List[Dict[str, Any]]
    revision_sessions: List[Dict[str, Any]]
    exam_alerts: List[Dict[str, Any]]

class StudyPlanRead(StudyPlanBase):
    id: UUID
    roadmap_id: UUID