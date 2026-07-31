# Frozen System Constants
DEFAULT_PAGE_SIZE = 20
MAX_SKILLS_PER_PROFILE = 50
ALLOWED_LEARNING_STYLES = ["Visual", "Auditory", "Reading/Writing", "Kinesthetic"]

# Document upload/parsing module
ALLOWED_DOCUMENT_TYPES = [
    "academic_calendar",
    "timetable",
    "syllabus",
    "assignment_schedule",
    "notes",
]
ALLOWED_DOCUMENT_CONTENT_TYPES = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",  # .docx
    "text/plain",
]
MAX_DOCUMENT_SIZE_BYTES = 10 * 1024 * 1024  # 10 MB