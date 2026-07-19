import joblib
import pandas as pd

# Load trained model
model = joblib.load("model/placement_model.pkl")


def predict(student_data):
    data = pd.DataFrame([student_data])

    prediction = model.predict(data)[0]
    probability = model.predict_proba(data)[0]
    
    
    
    result = "Placed" if prediction == 1 else "Not Placed"
    confidence = round(max(probability) * 100, 2)
    if prediction == 1:
        message = "High chances of getting placed. Keep improving your skills and confidence."
    else:
        message = "Placement chances are currently low. Focus on improving your academics, aptitude, and projects."




    return {
         "prediction": result,
         "confidence": confidence,
         "message": message
    }
    
