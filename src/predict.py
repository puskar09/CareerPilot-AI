import joblib
import pandas as pd

# Load trained model
model = joblib.load("model/placement_model.pkl")


def predict(student_data):
    data = pd.DataFrame([student_data])

    prediction = model.predict(data)

    if prediction[0] == 1:
        return "Placed"

    return "Not Placed"
