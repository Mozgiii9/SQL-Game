from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import camp_logs, finances, movement_records, secret_negotiations
import models
from config import engine

app = FastAPI(title="Историческая SQL-игра")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Подключение маршрутов
app.include_router(camp_logs.router, prefix="/api/camp")
app.include_router(finances.router, prefix="/api/finances")
app.include_router(movement_records.router, prefix="/api/movement")
app.include_router(secret_negotiations.router, prefix="/api/negotiations")

# Создание таблиц
models.Base.metadata.create_all(bind=engine)
