from sqlalchemy import Column, String, Float, DateTime
from .base import Base, TimestampMixin, generate_uuid

class Internship(Base, TimestampMixin):
    __tablename__ = "internships"
    id = generate_uuid()
    company = Column(String, index=True)
    role = Column(String)
    location = Column(String)
    stipend = Column(String)
    match_percentage = Column(Float)
    deadline = Column(DateTime)