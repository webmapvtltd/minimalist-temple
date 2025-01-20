import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaPaintBrush, FaMusic, FaRing, FaGlassCheers } from "react-icons/fa";
import ritualsData from "../data/ritualsData.json";

const iconMap = {
  Haldi: FaSun,
  Mehendi: FaPaintBrush,
  Sangeet: FaMusic,
  WeddingCeremony: FaRing,
  Reception: FaGlassCheers,
};

const Rituals = () => {
  const [countdowns, setCountdowns] = useState([]);

  // Function to calculate countdown
  const calculateCountdown = (date) => {
    const targetDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = targetDate - currentDate;

    if (timeDiff <= 0) return "Event Passed";

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  };

  useEffect(() => {
    const updateCountdowns = () => {
      setCountdowns(
        ritualsData.map((ritual) => ({
          ...ritual,
          countdown: calculateCountdown(ritual.date),
        }))
      );
    };

    updateCountdowns(); // Initial calculation
    const interval = setInterval(updateCountdowns, 1000); // Update every second for live countdown

    return () => clearInterval(interval); // Cleanup interval
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="p-8">
      <h1 className="text-4xl font-calligraphy text-gold">Wedding Rituals</h1>

      {/* Ritual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {countdowns.map((ritual, index) => (
          <Link
            key={index}
            to={`/${ritual.name.toLowerCase().replace(/\s+/g, "")}`}
            className="block rounded-lg shadow-lg bg-white hover:bg-ivory p-6 transition-all"
          >
            <div className="text-center">
              {/* Dynamic Icon */}
              {React.createElement(iconMap[ritual.name] || FaSun, { className: "text-4xl text-gold mx-auto mb-4" })}

              {/* Ritual Title and Countdown */}
              <h2 className="text-2xl font-semibold text-mutedOlive">{ritual.name}</h2>
              <p className="mt-2 text-gray-600">{ritual.description}</p>
              <p className="mt-4 text-lg font-bold text-gold">Countdown: {ritual.countdown}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Rituals;
