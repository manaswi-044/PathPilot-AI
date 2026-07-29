from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.api.deps import get_current_active_profile, get_current_user_id
from app.schemas.profile import ProfileRead, ProfileCreate, ProfileUpdate
from app.schemas.base import ResponseBase
from app.services.profile_service import profile_service
from app.models.profile import Profile

router = APIRouter()

@router.get("/", response_model=ResponseBase[ProfileRead])
async def get_profile(
    current_profile: Profile = Depends(get_current_active_profile)
):
    return {
        "success": True,
        "message": "Profile fetched successfully",
        "data": current_profile
    }

@router.post("/", response_model=ResponseBase[ProfileRead])
async def create_profile(
    profile_in: ProfileCreate, 
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
):
    # Ensure user doesn't already have a profile
    existing = profile_service.get_by_user_id(db, user_id=user_id)
    if existing:
        return {"success": False, "message": "Profile already exists", "data": existing}
    
    profile_in.user_id = user_id
    new_profile = profile_service.create(db, obj_in=profile_in)
    return {
        "success": True,
        "message": "Profile created successfully",
        "data": new_profile
    }

@router.put("/", response_model=ResponseBase[ProfileRead])
async def update_profile(
    profile_in: ProfileUpdate, 
    db: Session = Depends(get_db),
    current_profile: Profile = Depends(get_current_active_profile)
):
    updated_profile = profile_service.update_profile_with_skills(
        db, db_obj=current_profile, obj_in=profile_in
    )
    return {
        "success": True,
        "message": "Profile updated successfully",
        "data": updated_profile
    }

@router.delete("/", response_model=ResponseBase[dict])
async def delete_profile(
    db: Session = Depends(get_db),
    current_profile: Profile = Depends(get_current_active_profile)
):
    profile_service.remove(db, id=current_profile.id)
    return {
        "success": True,
        "message": "Profile deleted successfully",
        "data": {}
    }