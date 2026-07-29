from sqlalchemy import Column, String, Float, ForeignKey, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from .base import Base, TimestampMixin

class Progress(Base, TimestampMixin):
    __tablename__ = "progress_tracking"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    profile_id = Column(UUID(as_uuid=True), ForeignKey("profiles.id"), nullable=False)
    roadmap_id = Column(UUID(as_uuid=True), ForeignKey("roadmaps.id"), nullable=False)
    
    completed_tasks = Column(JSON, default=[]) 
    overall_completion = Column(Float, default=0.0)
    current_node = Column(String) # Current step in roadmap

    profile = relationship("Profile", back_populates="progress")