import json
from typing import Dict, Any, Optional
from .helpers import clean_json_string

class ResponseParser:
    @staticmethod
    def parse_gemini_json(raw_text: str) -> Optional[Dict[str, Any]]:
        try:
            cleaned = clean_json_string(raw_text)
            return json.loads(cleaned)
        except json.JSONDecodeError:
            return None