from sqlalchemy import Column, Integer, String, Date, Time, Text, CheckConstraint
from config import Base

class CampLog(Base):
    __tablename__ = "camp_logs"

    log_id = Column(Integer, primary_key=True, autoincrement=True)
    guard_name = Column(String(50), nullable=False)
    date = Column(Date, nullable=False)
    shift = Column(String(10), nullable=False)
    action = Column(String(10), nullable=False)
    time = Column(Time, nullable=False)
    notes = Column(Text)

    __table_args__ = (
        CheckConstraint(shift.in_(['day', 'night']), name='check_shift'),
        CheckConstraint(action.in_(['patrol', 'check', 'enter', 'exit']), name='check_action')
    )

class MovementRecord(Base):
    __tablename__ = "movement_records"

    move_id = Column(Integer, primary_key=True, autoincrement=True)
    main_person = Column(String(50), nullable=False)
    companion = Column(String(50), nullable=True)
    route = Column(String(50), nullable=False)
    date = Column(Date, nullable=False)
    notes = Column(Text, nullable=True)

    __table_args__ = (
        CheckConstraint("route IN ('Лесная тропа', 'Река', 'Окольная дорога')", name='check_route'),
    )

class SecretNegotiation(Base):
    __tablename__ = "secret_negotiations"

    neg_id = Column(Integer, primary_key=True, autoincrement=True)
    person_name = Column(String(50), nullable=False)
    contact_type = Column(String(10), nullable=False)
    date = Column(Date, nullable=False)
    details = Column(Text, nullable=True)

    __table_args__ = (
        CheckConstraint("contact_type IN ('письмо', 'устно')", name='check_contact_type'),
    )

class Finances(Base):
    __tablename__ = "finances"

    trans_id = Column(Integer, primary_key=True, autoincrement=True)
    recipient_name = Column(String, nullable=False)
    amount = Column(Integer, nullable=False)
    transaction_date = Column(Date, nullable=False)
