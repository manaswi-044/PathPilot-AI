import os
import google.generativeai as genai
from typing import Dict, Any, Optional
from dotenv import load_dotenv
from .retry_handler import gemini_retry_decorator
from .response_parser import ResponseParser
from .helpers import format_error_response

load_dotenv()

class GeminiService:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("GEMINI_API_KEY is missing")
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    @gemini_retry_decorator
    async def call_ai(self, prompt: str, system_instruction: str) -> Dict[str, Any]:
        try:
            response = self.model.generate_content(
                f"{system_instruction}\n\n{prompt}",
                generation_config=genai.types.GenerationConfig(response_mime_type="application/json")
            )
            
            parsed_data = ResponseParser.parse_gemini_json(response.text)
            if not parsed_data:
                return format_error_response("Invalid JSON structure from AI")
            
            return parsed_data
        except Exception as e:
            return format_error_response(str(e))

gemini_client = GeminiService()