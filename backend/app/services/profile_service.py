from sqlalchemy.orm import Session
from app.models.profile import Profile
from app.models.skill import Skill
from app.schemas.profile import ProfileCreate, ProfileUpdate

class ProfileService:
    def get_by_user_id(self, db: Session, user_id: str):
        return db.query(Profile).filter(Profile.user_id == user_id, Profile.is_deleted == False).first()

    def create_profile(self, db: Session, obj_in: ProfileCreate):
        db_obj = Profile(**obj_in.model_dump(exclude={"skills"}))
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update_profile(self, db: Session, db_obj: Profile, obj_in: ProfileUpdate):
        update_data = obj_in.model_dump(exclude_unset=True)
        if "skills" in update_data:
            skill_names = update_data.pop("skills")
            skills = []
            for name in skill_names:
                skill = db.query(Skill).filter(Skill.name == name).first()
                if not skill:
                    skill = Skill(name=name)
                    db.add(skill)
                    db.flush()
                skills.append(skill)
            db_obj.skills = skills
            
        for field in update_data:
            setattr(db_obj, field, update_data[field])
        db.commit()
        db.refresh(db_obj)
        return db_obj

profile_service = ProfileService()