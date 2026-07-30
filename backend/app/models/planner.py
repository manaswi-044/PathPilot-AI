from sqlalchemy import Column, String, ForeignKey, DateTime, Integer
from .base import Base, TimestampMixin, generate_uuid

class Planner(Base, TimestampMixin):
    __tablename__ = "planners"
    
    id = generate_uuid()
    profile_id = Column(String(36), ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False)
    task_name = Column(String, nullable=False)
    category = Column(String, default="Academic") # Academic, Career, Personal, Travel Revision
    scheduled_at = Column(DateTime)
    duration_minutes = Column(Integer, default=45)
    status = Column(String, default="pending") # pending, completed, rescheduled, skipped