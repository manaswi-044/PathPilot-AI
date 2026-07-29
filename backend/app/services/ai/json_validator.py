from pydantic import BaseModel, Field
from typing import List, Optional, Dict

class RoadmapPhase(BaseModel):
    phase_name: str
    estimated_weeks: int
    topics: List[str]
    skills: List[str]
    mini_projects: List[str]
    learning_outcomes: List[str]
    resources: List[str]
    courses: List[str]
    certifications: List[str]
    interview_preparation: List[str]
    internship_suggestions: List[str]
    weekly_milestones: List[str]
    completion_criteria: str

class CareerRoadmapContract(BaseModel):
    """Frozen JSON Contract for Frontend Rendering"""
    career: str
    duration: str
    difficulty: str
    estimated_salary: str
    phases: List[RoadmapPhase] = []
    skills_to_learn: List[str] = []
    projects: List[str] = []
    courses: List[str] = []
    certifications: List[str] = []
    internships: List[str] = []

def validate_roadmap_json(data: Dict[str, Any]) -> bool:
    try:
        CareerRoadmapContract(**data)
        return True
    except Exception:
        return False