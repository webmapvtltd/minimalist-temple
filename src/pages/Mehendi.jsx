import React, { useState, useEffect } from "react";
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const targetDate = new Date("February 26, 2025 14:00:00").getTime(); // Target date for Mehendi

const Mehendi = () => {
  const [showContent, setShowContent] = useState(false);
  const [countdown, setCountdown] = useState("");

  // Function to update countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        setCountdown("🎉 Mehendi Ceremony is Here! 🎉");
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
        Mehendi Ceremony
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
              <p className="text-softGray">February 26, 2025</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FaHeart className="text-gold text-2xl" />
            <div>
              <p className="text-lg text-mutedOlive">Time:</p>
              <p className="text-softGray">2:00 PM</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-gold text-2xl" />
            <div>
              <p className="text-lg text-mutedOlive">Location:</p>
              <p className="text-softGray">Bride's Home, New Delhi</p>
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
              The Mehendi ceremony is a joyous occasion where the bride gets intricate henna designs applied on her hands and feet. It is a symbol of love, beauty, and happiness.
            </p>
            <p className="text-softGray mb-4">
              Family and friends gather around to celebrate with music, dance, and plenty of fun, as the bride is adorned with beautiful henna patterns.
            </p>
          </div>

          {/* Ritual Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Mehendi Rituals</h3>
              <p className="text-softGray mt-2">
                The bride’s hands and feet are painted with intricate henna designs. These designs symbolize beauty and good luck in the marriage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Music and Dance</h3>
              <p className="text-softGray mt-2">
                The ceremony is filled with energetic music and dancing. Everyone comes together to celebrate and have fun.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Blessings and Well Wishes</h3>
              <p className="text-softGray mt-2">
                The bride receives blessings from friends and family, wishing her a lifetime of happiness and love in her married life.
              </p>
            </div>
          </div>

          {/* Random Image Section */}
          <div className="my-8">
            <img
              src="https://via.placeholder.com/800x400.png?text=Mehendi+Ceremony"
              alt="Mehendi Ceremony"
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

export default Mehendi;
