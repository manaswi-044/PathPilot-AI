from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.database.session import get_db
from app.schemas.opportunities import HackathonRead
from app.schemas.base import ResponseBase
from app.models.opportunities import Hackathon

router = APIRouter()

@router.get("/", response_model=ResponseBase[List[HackathonRead]])
async def list_hackathons(db: Session = Depends(get_db)):
    items = db.query(Hackathon).filter(Hackathon.is_deleted == False).all()
    return {
        "success": True,
        "message": "Hackathons fetched successfully",
        "data": items
    }