from typing import Any, Optional
from fastapi.responses import JSONResponse

def standard_response(success: bool, message: str, data: Any = None, status_code: int = 200):
    return JSONResponse(
        status_code=status_code,
        content={
            "success": success,
            "message": message,
            "data": data
        }
    )