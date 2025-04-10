from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import models
from config import engine
from sqlalchemy import inspect
from sqlalchemy.orm import Session
from fastapi import HTTPException
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError
from fastapi import Request
from fastapi import Body

app = FastAPI(title="Историческая SQL-игра")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

@app.get("/tables")
def get_model_tables():
    return [cls.__tablename__ for cls in models.Base.__subclasses__()]

@app.get("/case/{case_id}/data")
def get_case_data(case_id: str):
    with Session(engine) as session:
        if case_id in ['case-001', 'case-002']:
            return {
                "table_name": "camp_logs",
                "title": "Журнал патрулирования (camp_logs)",
                "data": [log.__dict__ for log in session.query(models.CampLog).all()]
            }
        elif case_id == 'case-003':
            return {
                "table_name": "finances",
                "title": "Финансовые операции (finances)",
                "data": [finance.__dict__ for finance in session.query(models.Finances).all()]
            }
        else:
            raise HTTPException(status_code=404, detail="Кейс не найден")

@app.get("/all-data")
def get_all_data():
    with Session(engine) as session:
        result = {
            "camp_logs": [log.__dict__ for log in session.query(models.CampLog).all()],
            "finances": [finance.__dict__ for finance in session.query(models.Finances).all()],
            "movement_records": [move.__dict__ for move in session.query(models.MovementRecord).all()],
            "secret_negotiations": [neg.__dict__ for neg in session.query(models.SecretNegotiation).all()]
        }
        return result

@app.post("/execute-sql")
async def execute_sql(query: str = Body(..., embed=True)):
    query = query.strip()
    if not query:
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    if not query.endswith(';'):
        raise HTTPException(status_code=400, detail="Query must end with a semicolon")

    if not query.upper().lstrip().startswith("SELECT"):
        raise HTTPException(status_code=400, detail="Only SELECT queries are allowed")

    forbidden_keywords = ["DROP", "TRUNCATE", "ALTER", "CREATE", "DELETE", "INSERT", "UPDATE"]
    if any(keyword in query.upper() for keyword in forbidden_keywords):
        raise HTTPException(status_code=403, detail="This operation is not allowed")

    try:
        if query.count('(') != query.count(')'):
            raise HTTPException(status_code=400, detail="Unbalanced parentheses in query")

        common_errors = [
            ('FROM FROM', 'Duplicate FROM clause'),
            ('WHERE WHERE', 'Duplicate WHERE clause'),
            ('SELECT SELECT', 'Duplicate SELECT keyword'),
            ('GROUP GROUP', 'Duplicate GROUP BY clause'),
            ('ORDER ORDER', 'Duplicate ORDER BY clause')
        ]
        
        query_upper = query.upper()
        for error_pattern, error_message in common_errors:
            if error_pattern in query_upper:
                raise HTTPException(status_code=400, detail=error_message)

        with Session(engine) as session:
            result = session.execute(text(query))
            return {
                "data": [dict(row) for row in result.mappings()],
                "count": result.rowcount,
                "status": "success"
            }

    except SQLAlchemyError as e:
        error_message = str(e)
        if "no such column" in error_message.lower():
            raise HTTPException(status_code=400, detail="Invalid column name in query")
        elif "no such table" in error_message.lower():
            raise HTTPException(status_code=400, detail="Invalid table name in query")
        elif "syntax error" in error_message.lower():
            raise HTTPException(status_code=400, detail="SQL syntax error")
        else:
            raise HTTPException(status_code=400, detail=error_message)
