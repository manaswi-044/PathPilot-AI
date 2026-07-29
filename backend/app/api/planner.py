from fastapi import APIRouter
from app.schemas.base import ResponseBase

router = APIRouter()

@router.post("/", response_model=ResponseBase)
async def generate_plan():
    # TODO: Member 3 - planner_engine.generate_schedule()
    return {
        "success": True,
        "message": "Study plan generated successfully",
        "data": {}
    }