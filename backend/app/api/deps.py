from typing import Generator
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.security import verify_supabase_jwt
from app.database.session import SessionLocal
from app.models.profile import Profile

security = HTTPBearer()

# 1. Database Dependency
def get_db() -> Generator:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 2. Auth Dependency: Get the Supabase User ID from JWT
async def get_current_user_id(
    res: HTTPAuthorizationCredentials = Depends(security)
) -> str:
    token = res.credentials
    payload = verify_supabase_jwt(token)
    user_id: str = payload.get("sub")
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token: User ID missing",
        )
    return user_id

# 3. Auth Dependency: Get the actual DB Profile
async def get_current_active_profile(
    db: Session = Depends(get_db),
    user_id: str = Depends(get_current_user_id)
) -> Profile:
    profile = db.query(Profile).filter(
        Profile.user_id == user_id, 
        Profile.is_deleted == False
    ).first()
    
    if not profile:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Profile not found. Please create a profile first.",
        )
    return profile