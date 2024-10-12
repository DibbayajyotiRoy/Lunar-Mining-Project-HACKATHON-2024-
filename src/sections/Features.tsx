"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

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
      const response = await fetch('http://127.0.0.1:8000/predict', {
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
    <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white flex items-center justify-center min-h-screen relative">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-1/3 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Mineral Prediction</h1>
        <form onSubmit={handleSubmit}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="wavelength" className="block text-sm font-medium">Wavelength (nm)</label>
            <input
              type="number"
              id="wavelength"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-400 transition duration-200"
              onChange={(e) => setWavelength(Number(e.target.value))}
              step="0.0000000001"
              min="0"
              required
            />
          </motion.div>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="reflectance" className="block text-sm font-medium">Reflectance</label>
            <input
              type="number"
              id="reflectance"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-400 transition duration-200"
              onChange={(e) => setReflectance(Number(e.target.value))}
              step="0.0000000001"
              min="0"
              required
            />
          </motion.div>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <label htmlFor="variation" className="block text-sm font-medium">Variation</label>
            <input
              type="number"
              id="variation"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-400 transition duration-200"
              onChange={(e) => setVariation(Number(e.target.value))}
              step="0.0000000001"
              min="0"
              required
            />
          </motion.div>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <label htmlFor="grain" className="block text-sm font-medium">Grain</label>
            <select
              id="grain"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-400 transition duration-200"
              onChange={(e) => setGrain(e.target.value)}
              value={grain}
              required
            >
              <option value="coarse">Coarse</option>
              <option value="fine">Fine</option>
            </select>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
          >
            {loading ? 'Predicting...' : 'Predict Mineral'}
          </motion.button>
        </form>

        {error && (
          <div className="mt-6 text-center text-red-500">
            <p>{error}</p>
          </div>
        )}
        
        {showResult && !error && (
          <>
            {/* Result Section */}
            <div className="mt-6 text-center">
              <h2 className='text-lg font-semibold'>Predicted Mineral:</h2>
              <p className='text-xl font-bold'>{predictedMineral}</p>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};




export default Features;
