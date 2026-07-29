from app.core.security import verify_supabase_jwt

class AuthService:
    def validate_token(self, token: str):
        return verify_supabase_jwt(token)

auth_service = AuthService()