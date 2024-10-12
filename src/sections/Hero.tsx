// components/Hero.tsx
"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unlock the Secrets of Moon Mining
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Use our advanced Mineral Predictor feature to forecast valuable mineral deposits on the lunar surface.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;