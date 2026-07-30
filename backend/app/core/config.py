import os
from typing import List, Union
from pydantic import validator
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    """
    Application Settings using Pydantic for strict validation.
    Values are automatically loaded from environment variables or .env file.
    """
    model_config = SettingsConfigDict(
        env_file=".env", 
        env_file_encoding="utf-8", 
        case_sensitive=True,
        extra="ignore"
    )

    # --- APP SETTINGS ---
    APP_NAME: str = "PathPilot AI"
    APP_ENV: str = "development"
    DEBUG: bool = True
    LOG_LEVEL: str = "INFO"
    API_V1_STR: str = "/api"

    # --- INFRASTRUCTURE ---
    DATABASE_URL: str = "sqlite:///./pathpilot.db"
    
    # --- SUPABASE CONFIGURATION ---
    SUPABASE_URL: str = "https://your-project.supabase.co"
    SUPABASE_ANON_KEY: str = "default-anon-key"
    SUPABASE_SERVICE_KEY: str = "default-service-key"

    # --- AI ENGINE ---
    GEMINI_API_KEY: str = "default-gemini-key"

    # --- SECURITY ---
    SECRET_KEY: str = "default-development-secret-key-32-chars-minimum"
    JWT_SECRET: str = "default-development-jwt-secret-key-32-chars"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # --- CORS ---
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000", "http://127.0.0.1:3000"]

    @validator("ALLOWED_ORIGINS", pre=True)
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> Union[List[str], str]:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, (list, str)):
            return v
        raise ValueError(v)

    @property
    def is_production(self) -> bool:
        return self.APP_ENV == "production"

# Instantiate settings singleton
settings = Settings()