from sqlalchemy import Column, String, ForeignKey, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from .base import Base, TimestampMixin

class Roadmap(Base, TimestampMixin):
    __tablename__ = "roadmaps"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    profile_id = Column(UUID(as_uuid=True), ForeignKey("profiles.id"), nullable=False)
    career_id = Column(UUID(as_uuid=True), ForeignKey("careers.id"), nullable=True)
    
    career = Column(String) # For AI generated custom careers
    duration = Column(String)
    difficulty = Column(String)
    phases = Column(JSON) # List of phases with tasks
    projects = Column(JSON) # Recommended projects
    resources = Column(JSON) # Recommended links/books
    
    profile = relationship("Profile", back_populates="roadmaps")
    study_plans = relationship("StudyPlan", back_populates="roadmap")

class StudyPlan(Base, TimestampMixin):
    __tablename__ = "study_plans"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    roadmap_id = Column(UUID(as_uuid=True), ForeignKey("roadmaps.id"), nullable=False)
    
    daily_plan = Column(JSON)
    weekly_plan = Column(JSON)
    study_sessions = Column(JSON)
    revision_sessions = Column(JSON)
    exam_alerts = Column(JSON)

    roadmap = relationship("Roadmap", back_populates="study_plans")