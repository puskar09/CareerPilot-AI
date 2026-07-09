from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

from preprocess import preprocess_data


# Load and preprocess data
X, y = preprocess_data("../dataset/Placement_Data_Full_Class.csv")

# Split dataset
Train_X, Test_X, Train_y, Test_y = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Create model
model = RandomForestClassifier(random_state=42)

# Train model
model.fit(Train_X, Train_y)

# Predict
pred = model.predict(Test_X)

# Accuracy
acc = accuracy_score(Test_y, pred)

print(f"Model Accuracy: {acc:.2f}")

# Save model
joblib.dump(model, "../model/placement_model.pkl")

print("Model saved successfully!")