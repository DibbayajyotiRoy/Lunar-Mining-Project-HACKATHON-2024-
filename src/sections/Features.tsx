"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import lunarBackground from './images/lunar-background.jpg';


const Features: React.FC = () => {
  const [wavelength, setWavelength] = useState<number>(0);
  const [reflectance, setReflectance] = useState<number>(0);
  const [variation, setVariation] = useState<number>(0);
  const [grain, setGrain] = useState<string>("coarse");
  const [predictedMineral, setPredictedMineral] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const predictMineral = async (inputs: {
    wavelength: number;
    reflectance: number;
    variation: number;
    grain: string;
  }) => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPredictedMineral(data.prediction);
    } catch (error) {
      setError("Error during prediction: " + (error as Error).message);
    } finally {
      setLoading(false);
      setShowResult(true);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    predictMineral({ wavelength, reflectance, variation, grain });
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${lunarBackground.src})` }}
      />

      <div className="relative z-10 p-8 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Mineral Prediction</h1>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
          <div className="mb-4">
            <label htmlFor="wavelength" className="block text-sm font-medium">
              Wavelength (nm)
            </label>
            <input
              type="number"
              id="wavelength"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setWavelength(Number(e.target.value))}
              step="0.0000000001"
              min="0"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reflectance" className="block text-sm font-medium">
              Reflectance
            </label>
            <input
              type="number"
              id="reflectance"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setReflectance(Number(e.target.value))}
              step="0.0000000001"
              min="0"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="variation" className="block text-sm font-medium">
              Variation
            </label>
            <input
              type="number"
              id="variation"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setVariation(Number(e.target.value))}
              step="0.0000000001"
              min="0"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="grain" className="block text-sm font-medium">
              Grain
            </label>
            <select
              id="grain"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setGrain(e.target.value)}
              value={grain}
              required
            >
              <option value="coarse">Coarse</option>
              <option value="fine">Fine</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-2 rounded-lg"
          >
            {loading ? "Predicting..." : "Predict Mineral"}
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
            <p className="text-3xl font-bold text-green-400">{predictedMineral}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;
