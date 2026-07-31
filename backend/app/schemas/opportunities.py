# NOTE: `app.api.internships`, `app.api.hackathons`, and `app.api.scholarships`
# import their read-schemas from `app.schemas.opportunities`, but the actual
# schemas live in separate files (`internship.py`, `hackathon.py`,
# `scholarship.py`). This module re-exports them under the expected name so
# those imports resolve, without duplicating or altering the schemas.
from app.schemas.internship import InternshipRead
from app.schemas.hackathon import HackathonRead
from app.schemas.scholarship import ScholarshipRead

__all__ = ["InternshipRead", "HackathonRead", "ScholarshipRead"]
