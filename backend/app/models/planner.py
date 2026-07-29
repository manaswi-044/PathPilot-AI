from sqlalchemy import Column, String, ForeignKey, DateTime
from sqlalchemy.dialects.postgresql import UUID
from .base import Base, TimestampMixin, generate_uuid

class Planner(Base, TimestampMixin):
    __tablename__ = "planners"
    id = generate_uuid()
    profile_id = Column(UUID(as_uuid=True), ForeignKey("profiles.id"), nullable=False)
    task_name = Column(String)
    scheduled_at = Column(DateTime)
    status = Column(String, default="pending")