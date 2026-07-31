from fastapi import APIRouter
from app.api import (
    profile, assessment, roadmap, planner, 
    career, internships, scholarships, hackathons, skill_gap, documents
)

api_router = APIRouter()

# Member 1 & 2
api_router.include_router(profile.router, prefix="/profile", tags=["Profile"])
api_router.include_router(documents.router, prefix="/documents", tags=["Documents"])

# Member 3 (AI Engine calls)
api_router.include_router(assessment.router, prefix="/assessment", tags=["Assessment"])
api_router.include_router(roadmap.router, prefix="/roadmap", tags=["Roadmap"])
api_router.include_router(planner.router, prefix="/planner", tags=["Planner"])
api_router.include_router(skill_gap.router, prefix="/skill-gap", tags=["Skill Gap"])

# Member 4 (Explorer)
api_router.include_router(career.router, prefix="/careers", tags=["Careers"])
api_router.include_router(internships.router, prefix="/internships", tags=["Internships"])
api_router.include_router(scholarships.router, prefix="/scholarships", tags=["Scholarships"])
api_router.include_router(hackathons.router, prefix="/hackathons", tags=["Hackathons"])