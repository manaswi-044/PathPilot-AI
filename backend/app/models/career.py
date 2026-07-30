from sqlalchemy import Column, String, Float
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid
from .associations import career_skills

class Career(Base, TimestampMixin):
    __tablename__ = "careers"

    id = generate_uuid()
    career_name = Column(String, index=True, nullable=False)
    salary_range = Column(String)
    demand_score = Column(Float)
    growth_rate = Column(Float)
    
    required_skills = relationship("Skill", secondary=career_skills, back_populates="careers")