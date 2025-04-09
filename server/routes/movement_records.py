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

@router.get("/river-movements", response_model=list[schemas.MovementResponse])
def get_river_movements(db: Session = Depends(get_db)):
    return crud.get_movements_by_river(db)