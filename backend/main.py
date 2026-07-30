import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.api.api import api_router
from app.core.logging import setup_logging

# 1. Setup Logging
setup_logging()

# 2. OpenAPI Metadata Tags
tags_metadata = [
    {"name": "Profile", "description": "Student Profile & Lifestyle Management"},
    {"name": "Assessment", "description": "AI Assessment & Skill Diagnostics"},
    {"name": "Roadmap", "description": "Personalized AI Career Roadmap"},
    {"name": "Planner", "description": "Adaptive Academic & Travel Planner"},
    {"name": "Skill Gap", "description": "Employer Skill Benchmark Matrix"},
    {"name": "Careers", "description": "Career Exploration & Market Metrics"},
    {"name": "Internships", "description": "Internship Match Engine"},
    {"name": "Scholarships", "description": "Targeted Grants & Financial Aid"},
    {"name": "Hackathons", "description": "Build Challenges & Contests"},
]

# 3. Initialize FastAPI
app = FastAPI(
    title=settings.APP_NAME,
    description="PathPilot AI - Personal Student Mentor & Academic Operating System Backend API",
    version="1.0.0",
    openapi_tags=tags_metadata,
    docs_url="/docs",
    redoc_url="/redoc"
)

# 4. Setup Middleware (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 5. Global Exception Handlers
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "An unexpected server error occurred",
            "errors": [str(exc)] if settings.DEBUG else []
        }
    )

# 6. Include API Routes
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
async def health_check():
    return {
        "success": True,
        "message": f"Welcome to {settings.APP_NAME} API - Personal Student Operating System",
        "data": {
            "version": "1.0.0",
            "env": settings.APP_ENV,
            "docs": "/docs"
        }
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)