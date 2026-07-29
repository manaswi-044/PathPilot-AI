from typing import Optional, Dict, Any
from jose import jwt, JWTError
from fastapi import HTTPException, status
from app.core.config import settings

def verify_supabase_jwt(token: str) -> Dict[str, Any]:
    """
    Verifies the JWT token issued by Supabase Auth.
    """
    try:
        # Supabase uses the JWT_SECRET to sign tokens
        payload = jwt.decode(
            token, 
            settings.JWT_SECRET, 
            algorithms=[settings.JWT_ALGORITHM],
            options={"verify_aud": False} # Supabase aud is usually 'authenticated'
        )
        return payload
    except JWTError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

        