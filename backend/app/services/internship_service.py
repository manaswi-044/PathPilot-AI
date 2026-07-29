from sqlalchemy.orm import Session
from app.models.internship import Internship

class InternshipService:
    def get_list(self, db: Session, limit: int = 20):
        return db.query(Internship).filter(Internship.is_deleted == False).limit(limit).all()

internship_service = InternshipService()