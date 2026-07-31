from sqlalchemy import Column, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid

class AcademicEvent(Base, TimestampMixin):
    """
    A single structured, dated item extracted from an uploaded document —
    e.g. an internal exam, slip test, lab session, holiday, or assignment
    deadline. This is the normalized data the planner/roadmap/chatbot read
    from, instead of re-parsing raw documents.
    """
    __tablename__ = "academic_events"

    id = generate_uuid()
    profile_id = Column(String(36), ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False)
    source_document_id = Column(String(36), ForeignKey("documents.id", ondelete="SET NULL"), nullable=True)

    # exam | internal_exam | slip_test | lab | assignment_deadline | holiday | other
    event_type = Column(String, nullable=False, index=True)
    title = Column(String, nullable=False)
    subject = Column(String, nullable=True)
    event_date = Column(DateTime, nullable=False, index=True)
    notes = Column(String, nullable=True)

    profile = relationship("Profile", back_populates="academic_events")
    source_document = relationship("Document", back_populates="academic_events")
