from sqlalchemy.orm import Session
from app.models.hackathon import Hackathon

class HackathonService:
    def get_list(self, db: Session, limit: int = 20):
        return db.query(Hackathon).filter(Hackathon.is_deleted == False).limit(limit).all()

hackathon_service = HackathonService()