from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import crud, schemas
from config import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/suspicious-negotiations", response_model=list[schemas.NegotiationResponse])
def get_suspicious_negotiations(db: Session = Depends(get_db)):
    return crud.find_suspicious_negotiations(db)