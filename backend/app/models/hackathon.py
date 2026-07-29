from sqlalchemy import Column, String, DateTime
from .base import Base, TimestampMixin, generate_uuid

class Hackathon(Base, TimestampMixin):
    __tablename__ = "hackathons"
    id = generate_uuid()
    name = Column(String, index=True)
    organizer = Column(String)
    prize_pool = Column(String)
    deadline = Column(DateTime)