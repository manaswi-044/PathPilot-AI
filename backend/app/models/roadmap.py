from sqlalchemy import Column, String, ForeignKey, JSON
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid

class Roadmap(Base, TimestampMixin):
    __tablename__ = "roadmaps"

    id = generate_uuid()
    profile_id = Column(String(36), ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False)
    career_id = Column(String(36), ForeignKey("careers.id", ondelete="SET NULL"), nullable=True)
    
    career = Column(String) # For AI generated custom careers
    duration = Column(String)
    difficulty = Column(String)
    phases = Column(JSON) # List of phases with tasks
    projects = Column(JSON) # Recommended projects
    resources = Column(JSON) # Recommended links/books
    
    profile = relationship("Profile", back_populates="roadmaps")
    study_plans = relationship("StudyPlan", back_populates="roadmap", cascade="all, delete-orphan")