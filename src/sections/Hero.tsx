"use client";
import React from "react";
import lunarBackground from './images/lunar-background.jpg';
import artemis1 from './images/Artemis1.webp';
import artemis2 from './images/Artemis2.jpg';
import artemis3 from './images/Artemis3.jpeg';
import uni1 from './images/uni1.jpg';
import uni2 from './images/uni2.jpg';
import uni3 from './images/uni3.jpg';
import uni4 from './images/uni4.jpg';
import min1 from './images/mineral1.jpg';
import min2 from './images/mineral2.jpg';
import min3 from './images/mineral3.jpg';
import min4 from './images/mineral4.jpg';
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function Hero() {
  const data = [
    {
      title: "2017-2030",
      content: (
        <div>
          <p className="text-white  text-sm font-normal mb-4">
            The <b>Artemis program</b> is NASA's initiative to return humans to the Moon, aiming for sustainable exploration. It includes missions like Artemis I, which successfully orbited the Moon in 2022, and upcoming Artemis II, a crewed lunar flyby planned for 2025. The program also targets Mars as a long-term goal.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[artemis1, artemis2, artemis3, lunarBackground].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Artemis mission image ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Aug, 2021-Present",
      content: (
        <div>
          <p className="text-white text-sm font-normal mb-4">
            <b>Universities Leading Lunar Mining Research</b><br />
            Several universities are pioneering research in lunar mining technologies and resource utilization strategies.
          </p>
          <p className="text-white text-sm font-normal mb-4">
            Institutions like Colorado School of Mines and Missouri S&T focus on autonomous construction and thermal mining techniques, respectively. They aim to develop sustainable methods for extracting resources from the Moon, contributing to future exploration and potential human habitation.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[uni1, uni2, uni3, uni4].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`University research image ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Lunar Site",
      content: (
        <div>
          <p className="text-white text-sm font-normal mb-4">
            <b>About the Lunar Mining Optimization System</b><br />
            The Lunar Mining Optimization System is an innovative platform designed to enhance lunar mining operations. Here are five key features that define its purpose and functionality:
          </p>
          <div className="mb-4">
            <ul className="list-disc list-inside text-white text-sm">
              <li>🔍 Predict optimal mining sites using machine learning.</li>
              <li>📊 Analyze spectral reflectance data for mineral identification.</li>
              <li>🌱 Ensure sustainable resource utilization on the lunar surface.</li>
              <li>🚀 Support mission planning for future lunar exploration.</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[min1, min2, min3, min4].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Mineral resource image ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default Hero;
