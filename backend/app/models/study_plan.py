from sqlalchemy import Column, ForeignKey, JSON, String
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid

class StudyPlan(Base, TimestampMixin):
    __tablename__ = "study_plans"

    id = generate_uuid()
    roadmap_id = Column(String(36), ForeignKey("roadmaps.id", ondelete="CASCADE"), nullable=False)
    
    daily_plan = Column(JSON)
    weekly_plan = Column(JSON)
    study_sessions = Column(JSON)
    revision_sessions = Column(JSON)
    exam_alerts = Column(JSON)

    roadmap = relationship("Roadmap", back_populates="study_plans")