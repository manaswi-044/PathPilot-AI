from typing import List, Optional
from uuid import UUID
from .common import BaseSchema

class ProgressRead(BaseSchema):
    id: UUID
    profile_id: UUID
    roadmap_id: UUID
    completed_tasks: List[str]
    overall_completion: float
    current_node: Optional[str]