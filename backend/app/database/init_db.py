from sqlalchemy.orm import Session
from app.database.base import Base
from app.database.session import engine
# Import models here to ensure they are registered on the Base
from app.models import * 

def init_db():
    # This creates the tables in the database (useful for local dev)
    # In production, migrations (Alembic) are preferred.
    Base.metadata.create_all(bind=engine)