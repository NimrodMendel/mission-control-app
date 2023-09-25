from fastapi import FastAPI
from app.core import config

app = FastAPI(title="Mission Control Backend",
              docs_url="/api/docs", openapi_url="/api")


@app.get('/')
async def index():
    print(config.DATABASE_URI)
    return {"message": "hello World!"}
