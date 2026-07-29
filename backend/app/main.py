from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.core.config import settings
from app.core.logging import setup_logging
from app.api.api import api_router

# Initialize Logging
setup_logging()

app = FastAPI(
    title=settings.APP_NAME,
    description="PathPilot AI Backend API - Single Source of Truth",
    version="1.0.0",
    docs_url="/docs"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all API routes
app.include_router(api_router, prefix=settings.API_V1_STR)

# Global Exception Handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "success": False, 
            "message": "Internal Server Error", 
            "errors": [str(exc)] if settings.DEBUG else []
        }
    )

@app.get("/")
async def root():
    return {
        "success": True,
        "message": f"Welcome to {settings.APP_NAME} API",
        "data": {"version": "1.0.0"}
    }


