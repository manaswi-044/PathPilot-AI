# NOTE: `app.api.hackathons` and `app.api.scholarships` import their models
# from `app.models.opportunities`, but the actual models live in separate
# files (`hackathon.py`, `scholarship.py`, `internship.py`). This module
# re-exports them under the expected name so those imports resolve, without
# duplicating or altering the underlying table definitions.
from app.models.hackathon import Hackathon
from app.models.scholarship import Scholarship
from app.models.internship import Internship

__all__ = ["Hackathon", "Scholarship", "Internship"]
