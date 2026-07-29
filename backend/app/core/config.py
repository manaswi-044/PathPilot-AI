import os
from typing import List, Union
from pydantic import AnyHttpUrl, validator, PostgresDsn
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    """
    Application Settings using Pydantic for strict validation.
    Values are automatically loaded from environment variables or .env file.
    """
    model_config = SettingsConfigDict(
        env_file=".env", 
        env_file_encoding="utf-8", 
        case_sensitive=True
    )

    # --- APP SETTINGS ---
    APP_NAME: str = "PathPilot AI"
    APP_ENV: str = "development"
    DEBUG: bool = True
    LOG_LEVEL: str = "INFO"
    API_V1_STR: str = "/api"

    # --- INFRASTRUCTURE ---
    DATABASE_URL: str # Required: Validated as string to support Supabase pooling strings
    
    # --- SUPABASE CONFIGURATION ---
    SUPABASE_URL: str
    SUPABASE_ANON_KEY: str
    SUPABASE_SERVICE_KEY: str

    # --- AI ENGINE ---
    GEMINI_API_KEY: str

    # --- SECURITY ---
    SECRET_KEY: str
    JWT_SECRET: str
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # --- CORS ---
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000"]

    @validator("ALLOWED_ORIGINS", pre=True)
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> Union[List[str], str]:
        """
        Allows ALLOWED_ORIGINS to be a comma-separated string in the .env file.
        """
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