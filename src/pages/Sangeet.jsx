import React, { useState, useEffect } from "react";
import { FaMusic, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const targetDate = new Date("February 27, 2025 18:00:00").getTime(); // Target date for Sangeet

const Sangeet = () => {
  const [showContent, setShowContent] = useState(false);
  const [countdown, setCountdown] = useState("");

  // Function to update countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        setCountdown("🎉 Sangeet Ceremony is Here! 🎉");
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setCountdown(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    };

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Timeout effect to reveal content after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000); // Content appears after 2 seconds
  }, []);

  return (
    <div className="w-full bg-ivory p-6 rounded-lg shadow-md">
      <h2 className="text-center text-3xl font-calligraphy text-gold mb-6">
        Sangeet Ceremony
      </h2>

      {/* Big Countdown Timer */}
      <div className="text-center text-4xl font-bold text-gold bg-white p-6 rounded-lg shadow-lg mb-6">
        {countdown}
      </div>

      {/* Ceremony Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FaCalendarAlt className="text-gold text-2xl" />
            <div>
              <p className="text-lg text-mutedOlive">Date:</p>
              <p className="text-softGray">February 27, 2025</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FaMusic className="text-gold text-2xl" />
            <div>
              <p className="text-lg text-mutedOlive">Time:</p>
              <p className="text-softGray">6:00 PM</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-gold text-2xl" />
            <div>
              <p className="text-lg text-mutedOlive">Location:</p>
              <p className="text-softGray">Sangeet Hall, New Delhi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content visibility with timeout */}
      {showContent && (
        <div>
          {/* Ceremony Description */}
          <div className="text-center mb-6">
            <p className="text-softGray mb-4">
              The Sangeet ceremony is a lively event filled with music, dance, and celebration. The bride's and groom's families come together for an evening of performances, singing, and dancing.
            </p>
            <p className="text-softGray mb-4">
              Join us as we celebrate the joy of music and dance before the big day, with a fun-filled evening that promises laughter, entertainment, and cherished memories.
            </p>
          </div>

          {/* Ritual Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Dance Performances</h3>
              <p className="text-softGray mt-2">
                Both families put on a spectacular dance performance, celebrating the upcoming union through the power of music and rhythm.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Music & Songs</h3>
              <p className="text-softGray mt-2">
                The night is filled with beautiful songs and music that blend tradition with modern flair, creating an unforgettable ambiance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Family Bonding</h3>
              <p className="text-softGray mt-2">
                This ceremony is about family bonding, laughter, and joyous celebrations, as the families come together to form everlasting memories.
              </p>
            </div>
          </div>

          {/* Random Image Section */}
          <div className="my-8">
            <img
              src="https://via.placeholder.com/800x400.png?text=Sangeet+Ceremony"
              alt="Sangeet Ceremony"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      )}

      {/* Loading Indicator */}
      {!showContent && (
        <div className="text-center text-lg text-mutedOlive">Loading ceremony details...</div>
      )}
    </div>
  );
};

export default Sangeet;
