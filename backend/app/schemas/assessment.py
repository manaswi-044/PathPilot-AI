from typing import Dict, Any
from .common import BaseSchema

class AssessmentRequest(BaseSchema):
    """
    Payload for the initial/periodic career assessment quiz.
    `responses` is a flexible question_id -> answer map so the frontend
    quiz can evolve without requiring backend schema changes.
    """
    profile_id: str
    responses: Dict[str, Any]
