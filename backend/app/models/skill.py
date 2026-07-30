from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid
from .associations import profile_skills, career_skills

class Skill(Base, TimestampMixin):
    __tablename__ = "skills"
    
    id = generate_uuid()
    name = Column(String, unique=True, index=True, nullable=False)
    
    profiles = relationship("Profile", secondary=profile_skills, back_populates="skills")
    careers = relationship("Career", secondary=career_skills, back_populates="required_skills")