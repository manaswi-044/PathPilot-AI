from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type
import google.api_core.exceptions

# Standardized retry logic for Gemini API calls
gemini_retry_decorator = retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10),
    retry=retry_if_exception_type((
        google.api_core.exceptions.DeadlineExceeded,
        google.api_core.exceptions.ServiceUnavailable,
        google.api_core.exceptions.InternalServerError
    ))
)