from pydantic import BaseModel
from datetime import date, time
from typing import Optional

class CampLogBase(BaseModel):
    guard_name: str
    date: date
    shift: str
    action: str
    time: time
    notes: Optional[str] = None

class CampLogResponse(CampLogBase):
    log_id: int
    class Config:
        from_attributes = True

class FinancesBase(BaseModel):
    recipient_name: str
    amount: int
    transaction_date: date

class FinancesResponse(FinancesBase):
    trans_id: int
    class Config:
        from_attributes = True

class MovementBase(BaseModel):
    main_person: str
    companion: Optional[str] = None
    route: str
    date: date
    notes: Optional[str] = None

class MovementResponse(MovementBase):
    move_id: int
    class Config:
        from_attributes = True

class NegotiationBase(BaseModel):
    person_name: str
    contact_type: str
    date: date
    details: str

class NegotiationResponse(BaseModel):
    person_name: str
    date: date
    details: str
    amount: int
    class Config:
        from_attributes = True

class ConspiratorResponse(BaseModel):
    guard_name: str
    date: date
    shift: str
    amount: int
    
    class Config:
        from_attributes = True
