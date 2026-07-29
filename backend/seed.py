from database import SessionLocal, engine
from app.models import Base, Skill, Career, Internship, Scholarship, Hackathon
from datetime import datetime, timedelta

def seed():
    db = SessionLocal()
    print("🌱 Starting database seed...")
    
    # Create tables if they don't exist
    Base.metadata.create_all(bind=engine)

    try:
        # 1. Seed Careers
        if not db.query(Career).first():
            careers = [
                Career(career_name="Software Engineer", salary_range="80k-140k", demand_score=9.5, growth_rate=12.0),
                Career(career_name="Data Scientist", salary_range="90k-160k", demand_score=9.0, growth_rate=15.0),
                Career(career_name="Product Manager", salary_range="100k-180k", demand_score=8.5, growth_rate=8.0)
            ]
            db.add_all(careers)
            print("✅ Careers seeded.")

        # 2. Seed Internships
        if not db.query(Internship).first():
            internships = [
                Internship(company="Google", role="STEP Intern", location="Remote", stipend="Paid", match_percentage=90.0, deadline=datetime.utcnow() + timedelta(days=30)),
                Internship(company="Meta", role="Software Engineering Intern", location="Menlo Park, CA", stipend="Paid", match_percentage=85.0, deadline=datetime.utcnow() + timedelta(days=45))
            ]
            db.add_all(internships)
            print("✅ Internships seeded.")

        # 3. Seed Scholarships
        if not db.query(Scholarship).first():
            scholarships = [
                Scholarship(name="STEM Excellence", provider="National Tech Foundation", amount="$5000", deadline=datetime.utcnow() + timedelta(days=90)),
                Scholarship(name="Future Leaders Grant", provider="Global Education Trust", amount="$2000", deadline=datetime.utcnow() + timedelta(days=120))
            ]
            db.add_all(scholarships)
            print("✅ Scholarships seeded.")

        # 4. Seed Hackathons
        if not db.query(Hackathon).first():
            hackathons = [
                Hackathon(name="AI Builders Hack", organizer="PathPilot AI", prize_pool="$10,000", deadline=datetime.utcnow() + timedelta(days=20)),
                Hackathon(name="Global Dev Jam", organizer="Major League Hacking", prize_pool="$5,000", deadline=datetime.utcnow() + timedelta(days=15))
            ]
            db.add_all(hackathons)
            print("✅ Hackathons seeded.")

        db.commit()
        print("🚀 Seeding finished successfully.")

    except Exception as e:
        print(f"❌ Seeding failed: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed()