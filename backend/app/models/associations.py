from sqlalchemy import Table, Column, ForeignKey
from app.database.base import Base

# Many-to-Many: Profile <-> Skill
profile_skills = Table(
    "profile_skills",
    Base.metadata,
    Column("profile_id", ForeignKey("profiles.id"), primary_key=True),
    Column("skill_id", ForeignKey("skills.id"), primary_key=True),
)

# Many-to-Many: Career <-> Skill
career_skills = Table(
    "career_skills",
    Base.metadata,
    Column("career_id", ForeignKey("careers.id"), primary_key=True),
    Column("skill_id", ForeignKey("skills.id"), primary_key=True),
)