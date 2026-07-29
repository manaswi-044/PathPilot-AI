from sqlalchemy.orm import Session
from app.models.planner import Planner
from app.schemas.planner import PlannerRead
from typing import List
from uuid import UUID

class PlannerService:
    def get_user_tasks(self, db: Session, profile_id: UUID) -> List[Planner]:
        return db.query(Planner).filter(
            Planner.profile_id == profile_id, 
            Planner.is_deleted == False
        ).all()

    def create_event(self, db: Session, profile_id: UUID, task_name: str, scheduled_at):
        db_obj = Planner(profile_id=profile_id, task_name=task_name, scheduled_at=scheduled_at)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

planner_service = PlannerService()