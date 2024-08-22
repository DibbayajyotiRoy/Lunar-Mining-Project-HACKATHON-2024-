"use client";
import React, { useState } from 'react';

const Features: React.FC = () => {
    const [wavelength, setWavelength] = useState<number>(0);
    const [reflectance, setReflectance] = useState<number>(0);
    const [variation, setVariation] = useState<number>(0);
    const [grain, setGrain] = useState<string>('coarse');
    const [predictedMineral, setPredictedMineral] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const predictMineral = async (inputs: { wavelength: number; reflectance: number; variation: number; grain: string }) => {
        try {
            setLoading(true);
            const response = await fetch('http://127.0.0.1:8000/predict', {  // Ensure this URL is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    wavelength: inputs.wavelength,
                    reflectance: inputs.reflectance,
                    variation: inputs.variation,
                    grain: inputs.grain
                }),
            });
            

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPredictedMineral(data.prediction);
        } catch (error) {
            setError('Error during prediction: ' + (error as Error).message);
        } finally {
            setLoading(false);
            setShowResult(true);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const inputs = {
            wavelength,
            reflectance,
            variation,
            grain
        };

        predictMineral(inputs);
    };

    return (
        <div className="bg-black text-white flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-1/3">
                <h1 className="text-2xl font-bold mb-6 text-center">Mineral Prediction</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="wavelength" className="block text-sm font-medium">Wavelength (nm)</label>
                        <input
                            type="number"
                            id="wavelength"
                            className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600"
                            onChange={(e) => setWavelength(Number(e.target.value))}
                            step="0.0000000001"
                            min="0"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reflectance" className="block text-sm font-medium">Reflectance</label>
                        <input
                            type="number"
                            id="reflectance"
                            className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600"
                            onChange={(e) => setReflectance(Number(e.target.value))}
                            step="0.0000000001"
                            min="0"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="variation" className="block text-sm font-medium">Variation</label>
                        <input
                            type="number"
                            id="variation"
                            className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600"
                            onChange={(e) => setVariation(Number(e.target.value))}
                            step="0.0000000001"
                            min="0"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="grain" className="block text-sm font-medium">Grain</label>
                        <select
                            id="grain"
                            className="mt-1 p-2 w-full rounded bg-gray-700 border border-gray-600"
                            onChange={(e) => setGrain(e.target.value)}
                            value={grain}
                            required
                        >
                            <option value="coarse">Coarse</option>
                            <option value="fine">Fine</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded" disabled={loading}>
                        {loading ? 'Predicting...' : 'Predict Mineral'}
                    </button>
                </form>
                {error && (
                    <div className="mt-6 text-center text-red-500">
                        <p>{error}</p>
                    </div>
                )}
                {showResult && !error && (
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
