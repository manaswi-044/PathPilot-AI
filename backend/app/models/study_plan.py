from sqlalchemy import Column, ForeignKey, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid

class StudyPlan(Base, TimestampMixin):
    __tablename__ = "study_plans"
    id = generate_uuid()
    roadmap_id = Column(UUID(as_uuid=True), ForeignKey("roadmaps.id"), nullable=False)
    daily_plan = Column(JSON)
    weekly_plan = Column(JSON)
    study_sessions = Column(JSON)
    revision_sessions = Column(JSON)
    exam_alerts = Column(JSON)

    roadmap = relationship("Roadmap", back_populates="study_plans")