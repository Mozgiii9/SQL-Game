from sqlalchemy.orm import Session
from sqlalchemy import and_, or_  # Добавляем импорт or_
from models import CampLog, Finances, MovementRecord, SecretNegotiation
import models
import schemas

def get_night_guards(db: Session):
    return db.query(CampLog).filter(CampLog.date == "1380-09-06", CampLog.shift == "night").all()

def get_exits_on_sept7(db: Session):
    return db.query(CampLog).filter(CampLog.date == "1380-09-07", CampLog.action == "exit").all()

def get_large_transactions(db: Session):
    return db.query(Finances).filter(and_(Finances.transaction_date == "1380-09-06", Finances.amount > 50)).all()

def find_conspirators(db: Session):
    results = db.query(
        CampLog.guard_name,
        CampLog.date,
        CampLog.shift,
        Finances.amount
    ).join(
        Finances, CampLog.guard_name == Finances.recipient_name
    ).filter(
        and_(CampLog.date == "1380-09-07", 
             CampLog.shift == "night", 
             Finances.amount > 50)
    ).all()
    
    return [
        {
            "guard_name": r.guard_name,
            "date": r.date,
            "shift": r.shift,
            "amount": r.amount
        } for r in results
    ]

def add_camp_log(db: Session, log: schemas.CampLogBase):
    print(log.dict())
    new_log = models.CampLog(**log.dict())
    db.add(new_log)
    db.commit()
    db.refresh(new_log)
    return new_log

def get_movements_by_river(db: Session):
    return db.query(MovementRecord).filter(
        and_(
            MovementRecord.date == "1380-09-07",
            or_(  # Теперь or_ будет распознан
                MovementRecord.route == 'Река',
                MovementRecord.notes.contains('брод')
            )
        )
    ).all()

def find_suspicious_negotiations(db: Session):
    results = db.query(
        SecretNegotiation.person_name,
        SecretNegotiation.date,
        SecretNegotiation.details,
        Finances.amount
    ).join(
        Finances, 
        and_(
            SecretNegotiation.person_name == Finances.recipient_name,
            SecretNegotiation.date == Finances.transaction_date
        )
    ).filter(
        Finances.amount > 50,
        SecretNegotiation.contact_type != 'none'
    ).all()
    
    return [
        {
            "person_name": r.person_name,
            "date": r.date,
            "details": r.details,
            "amount": r.amount
        } for r in results
    ]