from sqlalchemy.orm import Session
from app.models.roadmap import Roadmap
from app.schemas.roadmap import RoadmapCreate

class RoadmapService:
    def generate_roadmap(self, db: Session, obj_in: RoadmapCreate):
        # TODO: Member 3 - career_engine.generate(obj_in)
        db_obj = Roadmap(**obj_in.model_dump())
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

roadmap_service = RoadmapService()