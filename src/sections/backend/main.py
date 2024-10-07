from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import pandas as pd
import numpy as np

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to match the origin of your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model and scaler
with open('model_real.pkl', 'rb') as file:
    model = pickle.load(file)

with open('scaler_real.pkl', 'rb') as file:
    scaler = pickle.load(file)

class PredictionRequest(BaseModel):
    wavelength: float
    reflectance: float
    variation: float
    grain: str  # Ensure this is a string if you're using text for 'grain'

@app.post("/predict")
async def predict(request: PredictionRequest):
    data = pd.DataFrame({
        'Wavelength (nm)': [request.wavelength],
        'Reflectance': [request.reflectance],
        'Variation': [request.variation],
        'grain': [request.grain]
    })

    # Mapping 'grain' to numeric values
    data['grain'] = data['grain'].map({'coarse': 1, 'Fine': 0})
    data.fillna(0, inplace=True)
    data_scaled = scaler.transform(data)
    prediction = model.predict(data_scaled)[0]

    return {"prediction": prediction}
