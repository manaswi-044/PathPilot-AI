from sqlalchemy import Column, String, Float, Integer, JSON
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid
from .associations import profile_skills

class Profile(Base, TimestampMixin):
    __tablename__ = "profiles"

    id = generate_uuid()
    user_id = Column(String, unique=True, index=True, nullable=False) # Supabase Auth UID
    full_name = Column(String, nullable=False)
    college = Column(String)
    branch = Column(String)
    year = Column(Integer, default=1)
    semester = Column(Integer)
    cgpa = Column(Float)
    
    # Lifestyle & Routine
    study_hours = Column(Integer, default=4)
    commute_time = Column(Integer, default=30)
    wake_time = Column(String, default="07:00")
    sleep_time = Column(String, default="23:00")
    lifestyle_type = Column(String, default="Day Scholar") # Hosteller, Day Scholar, PG
    learning_style = Column(String, default="Visual")
    
    # Extended Profile Fields
    coding_experience = Column(String, default="Beginner")
    subjects = Column(JSON, default=[]) # List of active semester subjects
    strong_subjects = Column(JSON, default=[])
    weak_subjects = Column(JSON, default=[])
    dream_companies = Column(JSON, default=[])
    
    # Relationships
    career_goals = relationship("CareerGoal", back_populates="profile", cascade="all, delete-orphan")
    skills = relationship("Skill", secondary=profile_skills, back_populates="profiles")
    roadmaps = relationship("Roadmap", back_populates="profile", cascade="all, delete-orphan")
    progress = relationship("Progress", back_populates="profile", cascade="all, delete-orphan")
    documents = relationship("Document", back_populates="profile", cascade="all, delete-orphan")
    academic_events = relationship("AcademicEvent", back_populates="profile", cascade="all, delete-orphan")
    timetable_slots = relationship("TimetableSlot", back_populates="profile", cascade="all, delete-orphan")