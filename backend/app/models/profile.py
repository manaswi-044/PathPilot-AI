from sqlalchemy import Column, String, Float, Integer, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from .base import Base, TimestampMixin
from .associations import profile_skills

class Profile(Base, TimestampMixin):
    __tablename__ = "profiles"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(String, unique=True, index=True, nullable=False) # Supabase Auth UID
    full_name = Column(String, nullable=False)
    college = Column(String)
    branch = Column(String)
    semester = Column(Integer)
    cgpa = Column(Float)
    study_hours = Column(Integer)
    commute_time = Column(Integer)
    learning_style = Column(String)
    
    # Relationships
    career_goals = relationship("CareerGoal", back_populates="profile")
    skills = relationship("Skill", secondary=profile_skills, back_populates="profiles")
    roadmaps = relationship("Roadmap", back_populates="profile")
    progress = relationship("Progress", back_populates="profile")

class Skill(Base, TimestampMixin):
    __tablename__ = "skills"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, unique=True, index=True, nullable=False)
    
    profiles = relationship("Skill", secondary=profile_skills, back_populates="skills")
    careers = relationship("Career", secondary=career_skills, back_populates="required_skills")