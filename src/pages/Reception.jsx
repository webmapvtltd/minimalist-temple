import React, { useState, useEffect } from "react";
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const targetDate = new Date("February 28, 2025 19:00:00").getTime(); // Target date for Reception Ceremony

const Reception = () => {
  const [showContent, setShowContent] = useState(false);
  const [countdown, setCountdown] = useState("");

  // Function to update countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        setCountdown("💫 Reception Ceremony is Here! 💫");
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
        Reception Ceremony
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
              <p className="text-softGray">February 28, 2025</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FaHeart className="text-gold text-2xl" />
            <div>
              <p className="text-lg text-mutedOlive">Time:</p>
              <p className="text-softGray">7:00 PM</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-gold text-2xl" />
            <div>
              <p className="text-lg text-mutedOlive">Location:</p>
              <p className="text-softGray">Grand Palace Hotel, New Delhi</p>
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
              The Reception is a grand celebration where the newlyweds are formally introduced to their guests. It marks the beginning of their new life together and is filled with joy, laughter, and dancing.
            </p>
            <p className="text-softGray mb-4">
              Join us for an evening of elegance, delicious food, heartfelt speeches, and an unforgettable party as we celebrate the union of John and Jane.
            </p>
          </div>

          {/* Ritual Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Grand Entrance</h3>
              <p className="text-softGray mt-2">
                The newlyweds will make their grand entrance to greet the guests and begin the evening's celebration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">First Dance</h3>
              <p className="text-softGray mt-2">
                The couple will share their first dance as newlyweds, surrounded by family and friends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Toast & Speeches</h3>
              <p className="text-softGray mt-2">
                Heartfelt speeches from loved ones, followed by a toast to the couple's future together.
              </p>
            </div>
          </div>

          {/* Random Image Section */}
          <div className="my-8">
            <img
              src="https://via.placeholder.com/800x400.png?text=Reception+Celebration"
              alt="Reception Ceremony"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      )}

      {/* Loading Indicator */}
      {!showContent && (
        <div className="text-center text-lg text-mutedOlive">Loading reception details...</div>
      )}
    </div>
  );
};

export default Reception;
