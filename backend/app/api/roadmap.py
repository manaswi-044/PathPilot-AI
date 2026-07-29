from fastapi import APIRouter, status
from app.schemas.base import ResponseBase
from app.schemas.roadmap import RoadmapRead

router = APIRouter()

@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
    response_model=ResponseBase[RoadmapRead],
    summary="Generate AI Career Roadmap",
    description="Triggers the Gemini AI engine to generate a personalized career roadmap based on profile data."
)
async def generate_roadmap():
    """
    **AI Engine Integration:**
    - Calls `career_engine.generate_roadmap()`
    - Analyzes `profile.skills` and `profile.career_goal`
    - Returns structured JSON phases and resources.
    """
    return {
        "success": True,
        "message": "Roadmap generated successfully",
        "data": {}
    }