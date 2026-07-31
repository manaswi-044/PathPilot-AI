# NOTE: All existing API routers (profile, planner, roadmap, career, etc.)
# import `ResponseBase` from `app.schemas.base`, but that module never
# existed — only `app.schemas.common` defines it. This left the entire
# backend unable to boot (ModuleNotFoundError on startup).
#
# This file simply re-exports the real definitions from `common.py` so all
# existing imports resolve, without touching any working logic.
from app.schemas.common import BaseSchema, ResponseBase, ErrorResponse

__all__ = ["BaseSchema", "ResponseBase", "ErrorResponse"]
