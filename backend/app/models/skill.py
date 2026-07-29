from sqlalchemy import Column, String, Table, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from .base import Base, TimestampMixin, generate_uuid

# Association Tables
profile_skills = Table(
    "profile_skills",
    Base.metadata,
    Column("profile_id", UUID(as_uuid=True), ForeignKey("profiles.id", ondelete="CASCADE")),
    Column("skill_id", UUID(as_uuid=True), ForeignKey("skills.id", ondelete="CASCADE"))
)

career_skills = Table(
    "career_skills",
    Base.metadata,
    Column("career_id", UUID(as_uuid=True), ForeignKey("careers.id", ondelete="CASCADE")),
    Column("skill_id", UUID(as_uuid=True), ForeignKey("skills.id", ondelete="CASCADE"))
)

class Skill(Base, TimestampMixin):
    __tablename__ = "skills"
    id = generate_uuid()
    name = Column(String, unique=True, index=True, nullable=False)
    
    profiles = relationship("Profile", secondary=profile_skills, back_populates="skills")
    careers = relationship("Career", secondary=career_skills, back_populates="required_skills")