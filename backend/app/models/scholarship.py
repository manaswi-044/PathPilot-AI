from sqlalchemy import Column, String, DateTime
from .base import Base, TimestampMixin, generate_uuid

class Scholarship(Base, TimestampMixin):
    __tablename__ = "scholarships"
    id = generate_uuid()
    name = Column(String, index=True)
    provider = Column(String)
    amount = Column(String)
    deadline = Column(DateTime)