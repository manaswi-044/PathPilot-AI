from sqlalchemy import Column, String, Float, JSON, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from .base import Base, TimestampMixin
from .associations import career_skills

class Career(Base, TimestampMixin):
    __tablename__ = "careers"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    career_name = Column(String, index=True, nullable=False)
    salary_range = Column(String)
    demand_score = Column(Float)
    growth_rate = Column(Float)
    
    required_skills = relationship("Skill", secondary=career_skills, back_populates="careers")

class CareerGoal(Base, TimestampMixin):
    __tablename__ = "career_goals"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    profile_id = Column(UUID(as_uuid=True), ForeignKey("profiles.id"), nullable=False)
    goal_title = Column(String, nullable=False)
    target_date = Column(DateTime)
    
    profile = relationship("Profile", back_populates="career_goals")