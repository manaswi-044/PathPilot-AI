import uuid
from datetime import datetime
from sqlalchemy import Column, DateTime, Boolean, String
from app.database.base import Base

class TimestampMixin:
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
    is_deleted = Column(Boolean, default=False, nullable=False)

def generate_uuid():
    return Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))