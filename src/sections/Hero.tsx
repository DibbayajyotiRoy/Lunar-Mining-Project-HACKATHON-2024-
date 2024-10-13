//

"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Hero() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
    >
      <p className="md:text-2xl text-2xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
      Optimize space mining operations by considering resource availability, efficiency, and sustainability.
      </p>
      {/* <h2 className="text-xl font-bold">Key Features:</h2>
        <ul className="list-disc list-inside text-centre mt-2">
             <li>🔍 Predict optimal mining sites using machine learning.</li>
             <li>📊 Analyze spectral reflectance data for mineral identification.</li>
             <li>🌱 Ensure sustainable resource utilization on the lunar surface.</li>
             <li>🚀 Support mission planning for future lunar exploration.</li>
           </ul> */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}

export default Hero;










// components/Hero.tsx
// 'use client'
// // components/Hero.tsx

// import { motion } from "framer-motion";

// const Hero: React.FC = () => {
//   return (
//     <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-800 to-purple-700 text-white relative p-6">
//       <div className="text-center z-10">
//         <motion.h1
//           className="text-5xl md:text-6xl font-extrabold mb-4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Lunar Mining Optimization System
//         </motion.h1>
//         <motion.p
//           className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Optimize space mining operations by considering resource availability, efficiency, and sustainability.
//         </motion.p>
        
//         <motion.div
//           className="mb-8"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <h2 className="text-xl font-semibold">Key Features:</h2>
//           <ul className="list-disc list-inside text-centre mt-2">
//             <li>🔍 Predict optimal mining sites using machine learning.</li>
//             <li>📊 Analyze spectral reflectance data for mineral identification.</li>
//             <li>🌱 Ensure sustainable resource utilization on the lunar surface.</li>
//             <li>🚀 Support mission planning for future lunar exploration.</li>
//           </ul>
//         </motion.div>

//         {/* <motion.a
//           href="#overview"
//           className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium py-3 px-6 rounded-lg transition duration-300"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           Learn More
//         </motion.a> */}
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-20 z-0"></div>
//     </section>
//   );
// };

// export default Hero;