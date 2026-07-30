import os
import json
import google.generativeai as genai
from typing import Dict, Any, Optional
from dotenv import load_dotenv
from .retry_handler import gemini_retry_decorator

load_dotenv()

class GeminiService:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("GEMINI_API_KEY is missing.")
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    @gemini_retry_decorator
    async def call_ai(self, prompt: str, system_instruction: str) -> Dict[str, Any]:
        try:
            # Enforce JSON response type
            response = self.model.generate_content(
                f"{system_instruction}\n\n{prompt}",
                generation_config=genai.types.GenerationConfig(
                    response_mime_type="application/json",
                    temperature=0.2
                )
            )
            
            # Clean and parse
            raw_text = response.text.strip().replace("```json", "").replace("```", "")
            return json.loads(raw_text)
            
        except Exception as e:
            return {
                "status": "error",
                "message": "AI generation failed",
                "details": str(e)
            }

gemini_client = GeminiService()
