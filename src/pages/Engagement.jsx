// src/components/Rituals/Engagement.jsx
import React from "react";

const Engagement = () => {
  return (
    <div className="w-full bg-ivory p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-calligraphy text-gold mb-4">
        Engagement Ceremony
      </h2>

      {/* Ceremony Details */}
      <div className="text-center mb-6">
        <p className="text-lg text-mutedOlive">Date: <span className="text-softGray">February 24, 2025</span></p>
        <p className="text-lg text-mutedOlive">Time: <span className="text-softGray">4:00 PM</span></p>
        <p className="text-lg text-mutedOlive">Location: <span className="text-softGray">Temple Hall, New Delhi</span></p>
      </div>

      {/* Ceremony Description */}
      <div className="text-center">
        <p className="text-softGray mb-4">
          Join us as we celebrate the union of John and Jane with a beautiful engagement ceremony. The couple will exchange rings and take part in several traditional rituals.
        </p>
        <p className="text-softGray">
          This is a special moment in their journey together, and we would be honored to have you witness this beautiful occasion.
        </p>
      </div>
    </div>
  );
};

export default Engagement;
