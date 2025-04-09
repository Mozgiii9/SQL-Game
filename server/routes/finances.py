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

@router.get("/large-transactions", response_model=list[schemas.FinancesResponse])
def get_large_transactions(db: Session = Depends(get_db)):
    return crud.get_large_transactions(db)

@router.get("/conspirators", response_model=list[schemas.ConspiratorResponse])
def get_conspirators(db: Session = Depends(get_db)):
    return crud.find_conspirators(db)
