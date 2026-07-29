from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.database.session import get_db
from app.schemas.opportunities import ScholarshipRead
from app.schemas.base import ResponseBase
from app.models.opportunities import Scholarship

router = APIRouter()

@router.get("/", response_model=ResponseBase[List[ScholarshipRead]])
async def list_scholarships(db: Session = Depends(get_db)):
    items = db.query(Scholarship).filter(Scholarship.is_deleted == False).all()
    return {
        "success": True,
        "message": "Scholarships fetched successfully",
        "data": items
    }