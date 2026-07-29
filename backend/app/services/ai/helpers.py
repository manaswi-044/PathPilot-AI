from typing import Dict, Any
import json

def clean_json_string(raw_response: str) -> str:
    """Removes markdown code blocks and whitespace from AI response."""
    return raw_response.strip().replace("```json", "").replace("```", "").strip()

def format_error_response(error: str, details: Any = None) -> Dict[str, Any]:
    """Standardized error format for AI services."""
    return {
        "status": "error",
        "error": error,
        "details": details or {}
    }