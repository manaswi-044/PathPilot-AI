from sqlalchemy import Column, String, Float, ForeignKey, JSON
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid

class Progress(Base, TimestampMixin):
    __tablename__ = "progress_tracking"

    id = generate_uuid()
    profile_id = Column(String(36), ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False)
    roadmap_id = Column(String(36), ForeignKey("roadmaps.id", ondelete="CASCADE"), nullable=False)
    
    completed_tasks = Column(JSON, default=[]) 
    overall_completion = Column(Float, default=0.0)
    current_node = Column(String)

    profile = relationship("Profile", back_populates="progress")