from sqlalchemy.orm import Session
from app.models.scholarship import Scholarship

class ScholarshipService:
    def get_list(self, db: Session, limit: int = 20):
        return db.query(Scholarship).filter(Scholarship.is_deleted == False).limit(limit).all()

scholarship_service = ScholarshipService()