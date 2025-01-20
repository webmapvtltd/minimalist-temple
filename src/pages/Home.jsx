import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ritualdata from "../data/ritualsData.json"; 
import { FaSun, FaPaintBrush, FaMusic, FaRing, FaGlassCheers } from "react-icons/fa";
import RitualCard from "../components/RitualCard";


const iconMap = {
  Haldi: FaSun,
  Mehendi: FaPaintBrush,
  Sangeet: FaMusic,
  WeddingCeremony: FaRing,
  Reception: FaGlassCheers,
};

const Home = () => {

  

  return (
    <div className="w-full bg-ivory text-center py-12 p-8">
      {/* Welcome Section */}
      <h1 className="text-4xl font-calligraphy text-gold mb-6">
        Welcome to Our Wedding Celebration!
      </h1>
      <p className="text-lg text-mutedOlive mb-8">
        Join us for a celebration of love and joy as we begin this beautiful journey together.
      </p>

      {/* Event Overview Section */}
      <RitualCard  />
      {/* Call to Action Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-calligraphy text-gold mb-4">RSVP Now</h3>
        <p className="text-lg text-mutedOlive mb-6">
          We can't wait to celebrate with you! Please let us know if you will be joining us.
        </p>
        <Link
          to="/rsvp"
          className="bg-gold text-white px-8 py-3 rounded-lg text-lg hover:bg-amber-600"
        >
          RSVP Here
        </Link>
      </div>
    </div>
  );
};

export default Home;
