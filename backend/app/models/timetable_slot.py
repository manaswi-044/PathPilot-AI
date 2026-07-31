from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid

class TimetableSlot(Base, TimestampMixin):
    """
    A single recurring weekly slot extracted from an uploaded timetable
    (e.g. "Monday 09:00-10:00 DBMS Lecture"). The planner uses these,
    together with `AcademicEvent` rows, to build realistic daily/weekly
    schedules instead of generic ones.
    """
    __tablename__ = "timetable_slots"

    id = generate_uuid()
    profile_id = Column(String(36), ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False)
    source_document_id = Column(String(36), ForeignKey("documents.id", ondelete="SET NULL"), nullable=True)

    day_of_week = Column(Integer, nullable=False)  # 0=Monday ... 6=Sunday
    start_time = Column(String, nullable=False)    # "09:00"
    end_time = Column(String, nullable=False)      # "10:00"
    subject = Column(String, nullable=False)
    slot_type = Column(String, default="lecture")  # lecture | lab | tutorial | other

    profile = relationship("Profile", back_populates="timetable_slots")
    source_document = relationship("Document", back_populates="timetable_slots")
