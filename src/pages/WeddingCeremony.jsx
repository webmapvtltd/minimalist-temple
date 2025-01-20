import React, { useState, useEffect } from "react";
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const targetDate = new Date("March 1, 2025 10:00:00").getTime(); // Target date for Wedding Ceremony

const WeddingCeremony = () => {
  const [showContent, setShowContent] = useState(false);
  const [countdown, setCountdown] = useState("");

  // Function to update countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        setCountdown("💍 Wedding Ceremony is Here! 💍");
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
        Wedding Ceremony
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
              <p className="text-softGray">March 1, 2025</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FaHeart className="text-gold text-2xl" />
            <div>
              <p className="text-lg text-mutedOlive">Time:</p>
              <p className="text-softGray">10:00 AM</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-gold text-2xl" />
            <div>
              <p className="text-lg text-mutedOlive">Location:</p>
              <p className="text-softGray">Sacred Temple, New Delhi</p>
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
              The Wedding Ceremony is the most sacred and beautiful part of the wedding day. It's a time for the bride and groom to exchange vows, symbolizing their love and commitment to each other for the rest of their lives.
            </p>
            <p className="text-softGray mb-4">
              Join us as we celebrate this momentous occasion, where two hearts unite in front of family, friends, and loved ones, starting a new chapter of their journey together.
            </p>
          </div>

          {/* Ritual Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Vows Exchange</h3>
              <p className="text-softGray mt-2">
                The bride and groom exchange vows, promising to love, cherish, and support each other for the rest of their lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Sacred Rituals</h3>
              <p className="text-softGray mt-2">
                The couple performs sacred rituals that symbolize their union and the start of their married life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Blessings & Celebrations</h3>
              <p className="text-softGray mt-2">
                Family and friends shower the couple with blessings and celebrate the joyous occasion with love and happiness.
              </p>
            </div>
          </div>

          {/* Random Image Section */}
          <div className="my-8">
            <img
              src="https://via.placeholder.com/800x400.png?text=Wedding+Ceremony"
              alt="Wedding Ceremony"
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

export default WeddingCeremony;
