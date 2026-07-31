"""
PathPilot AI - Document Parsing Engine

Turns raw text extracted from an uploaded academic document (timetable,
syllabus, academic calendar, assignment schedule, or free-form notes) into
the structured data the rest of the app (planner, roadmap, chatbot) reads:
  - `academic_events`: dated items (exams, slip tests, labs, deadlines, holidays)
  - `timetable_slots`: recurring weekly class/lab slots

This mirrors the existing career_engine / skill_gap_engine pattern: a system
prompt + frozen JSON contract, sent to the shared `gemini_client`, then
validated before it's trusted.
"""
from typing import Dict, Any
from .gemini_service import gemini_client
from .helpers import format_error_response
from .response_parser import ResponseParser

DOCUMENT_PARSER_SYSTEM_PROMPT = """
You are PathPilot AI's Document Parsing Engine.
RULES:
1. Read the raw text of an uploaded academic document.
2. Extract ONLY facts explicitly present in the text. Never invent dates, subjects, or events.
3. Return JSON ONLY. No markdown (no ```json). No prose, no explanations.
4. Dates must be normalized to ISO 8601 ("YYYY-MM-DDTHH:MM:SS"). If a date has no
   explicit year, assume the current academic year and pick the nearest future date.
5. If the document contains no recognizable structured content, return empty lists
   rather than guessing.
6. Comply strictly with the frozen JSON contract below.
"""

DOCUMENT_PARSER_CONTRACT = """
{
  "academic_events": [
    {
      "event_type": "exam | internal_exam | slip_test | lab | assignment_deadline | holiday | other",
      "title": "string",
      "subject": "string or null",
      "event_date": "YYYY-MM-DDTHH:MM:SS",
      "notes": "string or null"
    }
  ],
  "timetable_slots": [
    {
      "day_of_week": "int, 0=Monday ... 6=Sunday",
      "start_time": "HH:MM",
      "end_time": "HH:MM",
      "subject": "string",
      "slot_type": "lecture | lab | tutorial | other"
    }
  ]
}
"""

DOCUMENT_PARSER_PROMPT = """
Document type declared by the student: {doc_type}
Extract every exam date, internal exam, slip test, lab session, assignment
deadline, and holiday you can find as `academic_events`. Extract every
recurring weekly class/lab slot as `timetable_slots`. Leave a list empty if
this document type doesn't contain that kind of information (e.g. a syllabus
usually has no timetable_slots).

Raw document text:
---
{document_text}
---
"""

REQUIRED_EVENT_TYPES = {
    "exam", "internal_exam", "slip_test", "lab", "assignment_deadline", "holiday", "other"
}


def _validate_structure(data: Dict[str, Any]) -> bool:
    if not isinstance(data, dict):
        return False
    if "academic_events" not in data or "timetable_slots" not in data:
        return False
    if not isinstance(data["academic_events"], list) or not isinstance(data["timetable_slots"], list):
        return False
    for event in data["academic_events"]:
        if not isinstance(event, dict):
            return False
        if "title" not in event or "event_date" not in event:
            return False
    for slot in data["timetable_slots"]:
        if not isinstance(slot, dict):
            return False
        if "day_of_week" not in slot or "subject" not in slot:
            return False
    return True


class DocumentParserEngine:
    async def extract_structured_data(self, document_text: str, doc_type: str) -> Dict[str, Any]:
        """
        Calls Gemini to turn raw document text into structured academic_events
        and timetable_slots. Returns format_error_response(...) on failure so
        callers can distinguish a clean-but-empty extraction from a real error.
        """
        if not document_text or not document_text.strip():
            return format_error_response("Document contained no extractable text")

        prompt = DOCUMENT_PARSER_PROMPT.format(doc_type=doc_type, document_text=document_text[:15000])
        result = await gemini_client.call_ai(prompt, DOCUMENT_PARSER_SYSTEM_PROMPT + DOCUMENT_PARSER_CONTRACT)

        # gemini_client.call_ai already returns parsed JSON (or an error dict)
        if isinstance(result, dict) and result.get("status") == "error":
            return result

        if not _validate_structure(result):
            return format_error_response("AI response did not match the expected contract", details=result)

        return result


document_parser_engine = DocumentParserEngine()
