import pandas as pd
from sklearn.preprocessing import LabelEncoder


def preprocess_data(file_path):
    # Load the dataset
    df = pd.read_csv(file_path)

    # Drop unnecessary columns
    df = df.drop(columns=["sl_no", "salary"])

    # Separate features and target
    X = df.drop(columns=["status"])
    y = df["status"]

    # Find categorical columns
    categorical_columns = X.select_dtypes(include=["object"]).columns

    # Encode categorical features
    encoder = LabelEncoder()

    for col in categorical_columns:
        X[col] = encoder.fit_transform(X[col])

    # Encode target variable
    y = encoder.fit_transform(y)

    return X, y