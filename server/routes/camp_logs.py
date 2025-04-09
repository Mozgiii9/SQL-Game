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

@router.get("/night-guards", response_model=list[schemas.CampLogResponse])
def get_night_guards(db: Session = Depends(get_db)):
    return crud.get_night_guards(db)

@router.get("/exits-sept7", response_model=list[schemas.CampLogResponse])
def get_exits_on_sept7(db: Session = Depends(get_db)):
    return crud.get_exits_on_sept7(db)

@router.post("/add-log", response_model=schemas.CampLogResponse)
def create_camp_log(log: schemas.CampLogBase, db: Session = Depends(get_db)):
    return crud.add_camp_log(db, log)