import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.api.api import api_router
from app.core.logging import setup_logging

# Setup Logging
setup_logging()

# Initialize FastAPI
app = FastAPI(
    title=settings.APP_NAME,
    description="Backend for PathPilot AI - Academic & Career Copilot",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global Exception Handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "An unexpected error occurred",
            "errors": [str(exc)] if settings.DEBUG else [],
        },
    )

# Include all API routes
app.include_router(api_router, prefix=settings.API_V1_STR)

# Health Check
@app.get("/")
async def health_check():
    return {
        "success": True,
        "message": f"{settings.APP_NAME} API is running",
        "data": {
            "environment": settings.APP_ENV
        },
    }

# Run the application
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
    )