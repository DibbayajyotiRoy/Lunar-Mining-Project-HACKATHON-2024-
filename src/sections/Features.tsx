// src/Features.tsx
"use client"
import React, { useState } from 'react';

const Features: React.FC = () => {
    const [wavelength, setWavelength] = useState<number>(0);
    const [reflectance, setReflectance] = useState<number>(0);
    const [variation, setVariation] = useState<number>(0);
    const [grain, setGrain] = useState<number>(0);
    const [predictedMineral, setPredictedMineral] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);

    const predictMineral = (inputs: { wavelength: number; reflectance: number; variation: number; grain: number }): string => {
        // Replace this with your actual prediction logic
        return "Quartz"; // Example output
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const inputs = {
            wavelength,
            reflectance,
            variation,
            grain
        };

        const mineral = predictMineral(inputs);
        setPredictedMineral(mineral);
        setShowResult(true);
    };

    return (
        <div className="bg-black text-white flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-1/3">
                <h1 className="text-2xl font-bold mb-6 text-center">Mineral Prediction</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="wavelength" className="block text-sm font-medium">Wavelength (nm)</label>
                        <input type="number" id="wavelength" className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600" onChange={(e) => setWavelength(Number(e.target.value))} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reflectance" className="block text-sm font-medium">Reflectance</label>
                        <input type="number" id="reflectance" className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600" onChange={(e) => setReflectance(Number(e.target.value))} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="variation" className="block text-sm font-medium">Variation</label>
                        <input type="number" id="variation" className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600" onChange={(e) => setVariation(Number(e.target.value))} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="grain" className="block text-sm font-medium">Grain</label>
                        <input type="number" id="grain" className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600" onChange={(e) => setGrain(Number(e.target.value))} required />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">Predict Mineral</button>
                </form>
                {showResult && (
                    <div className="mt-6 text-center">
                        <h2 className="text-lg font-semibold">Predicted Mineral:</h2>
                        <p className="text-xl font-bold">{predictedMineral}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Features;