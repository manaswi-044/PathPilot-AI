from pydantic import BaseModel, ConfigDict
from typing import Generic, TypeVar, Optional, List, Any

T = TypeVar("T")

class BaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

class ResponseBase(BaseModel, Generic[T]):
    success: bool
    message: str
    data: Optional[T] = None

class ErrorResponse(BaseModel):
    success: bool = False
    message: str
    errors: Optional[List[Any]] = None