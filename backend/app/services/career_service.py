from sqlalchemy.orm import Session
from app.models.career import Career
from typing import List

class CareerService:
    def get_all_careers(self, db: Session) -> List[Career]:
        return db.query(Career).filter(Career.is_deleted == False).all()

    def get_career_by_name(self, db: Session, name: str):
        return db.query(Career).filter(Career.career_name.ilike(f"%{name}%")).first()

career_service = CareerService()