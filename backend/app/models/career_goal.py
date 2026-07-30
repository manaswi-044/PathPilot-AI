from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid

class CareerGoal(Base, TimestampMixin):
    __tablename__ = "career_goals"
    
    id = generate_uuid()
    profile_id = Column(String(36), ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False)
    goal_title = Column(String, nullable=False)
    target_date = Column(DateTime, nullable=True)
    
    profile = relationship("Profile", back_populates="career_goals")