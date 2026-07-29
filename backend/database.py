from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from config import settings
from app.database.base import Base

# Create engine with production-ready pooling
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency Injection for API routes
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()