import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from config import settings
from app.api.api import api_router
from app.core.logging import setup_logging
from app.core.exceptions import http_exception_handler

# 1. Setup Logging
setup_logging()

# 2. Initialize FastAPI
app = FastAPI(
    title=settings.APP_NAME,
    description="Backend for PathPilot AI - Academic & Career Copilot",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# 3. Setup Middleware (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 4. Global Exception Handlers
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "An unexpected error occurred",
            "errors": [str(exc)] if settings.DEBUG else []
        }
    )

# 5. Include API Routes
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
async def health_check():
    return {
        "success": True,
        "message": f"{settings.APP_NAME} API is running",
        "data": {"env": settings.APP_ENV}
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

    from fastapi import FastAPI
from config import settings
from app.api.api import api_router

# 1. Define tags here instead of a separate file
tags_metadata = [
    {"name": "Profile", "description": "Member 1 & 2: User management"},
    {"name": "Roadmap", "description": "Member 3: AI Generation"},
    {"name": "Careers", "description": "Member 4: Exploration"},
]

app = FastAPI(
    title=settings.APP_NAME,
    openapi_tags=tags_metadata, # Adds the descriptions
    docs_url="/docs"
)

# 2. To ensure the 'Authorize' button works for JWT, 
# FastAPI handles this automatically if you use the 'HTTPBearer' 
# dependency in your routes (which we did in app/api/deps.py).

app.include_router(api_router, prefix=settings.API_V1_STR)