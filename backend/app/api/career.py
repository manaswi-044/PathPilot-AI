from fastapi import APIRouter, Depends
from typing import List
from app.schemas.base import ResponseBase
from app.schemas.career import CareerRead

router = APIRouter()
router = APIRouter()

@router.get("/", response_model=ResponseBase[List[CareerRead]])
async def list_careers():
    return {
        "success": True,
        "message": "Careers fetched successfully",
        "data": []
    }