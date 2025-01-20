import React, { useEffect, useState } from "react";
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const targetDate = new Date("February 25, 2025 10:00:00").getTime(); // Target date for Haldi

const Haldi = () => {
  const [showContent, setShowContent] = useState(false);
  const [countdown, setCountdown] = useState("");

  // Function to update countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        setCountdown("🎉 It's Time for Haldi Ceremony! 🎉");
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
        Haldi Ceremony
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
              <p className="text-softGray">February 25, 2025</p>
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
              The Haldi ceremony is a vibrant and joyful pre-wedding ritual where turmeric paste is applied to the bride and groom for blessings and good fortune.
            </p>
            <p className="text-softGray mb-4">
              It is an intimate gathering with family and friends, filled with laughter, music, and dance. Join us as we celebrate this auspicious occasion!
            </p>
          </div>

          {/* Ritual Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Haldi Rituals</h3>
              <p className="text-softGray mt-2">
                The bride and groom are covered in turmeric paste for good luck and to ward off any negative energy. Family members join in the fun, and there's plenty of music and dancing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Music and Dance</h3>
              <p className="text-softGray mt-2">
                The Haldi ceremony is filled with lively music and dance. Traditional songs are sung, and everyone dances to celebrate the upcoming wedding.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-mutedOlive">Blessings and Well Wishes</h3>
              <p className="text-softGray mt-2">
                The ceremony is not only a time for fun, but it’s also an opportunity for everyone to give their blessings to the couple as they embark on this new journey together.
              </p>
            </div>
          </div>

          {/* Random Image Section */}
          <div className="my-8">
            <img
              src="https://via.placeholder.com/800x400.png?text=Haldi+Ceremony"
              alt="Haldi Ceremony"
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

export default Haldi;
