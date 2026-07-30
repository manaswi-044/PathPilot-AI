from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type
from google.api_core import exceptions

# Specific retry strategy for Gemini API
gemini_retry_decorator = retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10),
    retry=retry_if_exception_type((
        exceptions.DeadlineExceeded,
        exceptions.ServiceUnavailable,
        exceptions.InternalServerError,
        exceptions.ResourceExhausted 
    )),
    reraise=True
)