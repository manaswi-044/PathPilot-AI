from fastapi import APIRouter
from typing import List
from app.schemas.base import ResponseBase
from app.schemas.opportunities import InternshipRead

router = APIRouter()

@router.get("/", response_model=ResponseBase[List[InternshipRead]])
async def list_internships():
    return {
        "success": True,
        "message": "Internships fetched successfully",
        "data": []
    }