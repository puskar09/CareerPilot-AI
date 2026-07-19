from fastapi import FastAPI
from backend.schemas import StudentData
from src.predict import predict

app=FastAPI()
@app.get("/")
def home():
    return {"message": "Welcome to the Career Compass AI API!"}


@app.post("/predict")
def predict_placement(student_data: StudentData):
    result = predict(student_data.model_dump())
    return result
