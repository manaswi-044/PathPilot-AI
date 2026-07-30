from sqlalchemy import Table, Column, String, ForeignKey
from app.database.base import Base

# Many-to-Many: Profile <-> Skill
profile_skills = Table(
    "profile_skills",
    Base.metadata,
    Column("profile_id", String(36), ForeignKey("profiles.id", ondelete="CASCADE"), primary_key=True),
    Column("skill_id", String(36), ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True),
)

# Many-to-Many: Career <-> Skill
career_skills = Table(
    "career_skills",
    Base.metadata,
    Column("career_id", String(36), ForeignKey("careers.id", ondelete="CASCADE"), primary_key=True),
    Column("skill_id", String(36), ForeignKey("skills.id", ondelete="CASCADE"), primary_key=True),
)