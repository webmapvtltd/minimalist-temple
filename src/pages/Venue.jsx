// src/pages/Venue.jsx
import React from "react";
import { Link } from "react-router-dom";

const Venue = () => {
  return (
    <div className="w-full bg-ivory py-12">
      {/* Title Section */}
      <h1 className="text-4xl font-calligraphy text-gold text-center mb-6">
        Wedding Venue
      </h1>
      <p className="text-lg text-mutedOlive text-center mb-12">
        We look forward to celebrating with you at our wedding venue. Here's everything you need to know.
      </p>

      {/* Venue Information Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-calligraphy text-gold mb-4">Venue Details</h2>
          <p className="text-mutedOlive mb-4">
            <strong>Venue Name:</strong> The Royal Banquet Hall
          </p>
          <p className="text-mutedOlive mb-4">
            <strong>Address:</strong> 123 Wedding Lane, City, State, Zip Code
          </p>
          <p className="text-mutedOlive mb-4">
            <strong>Date & Time:</strong> Saturday, 25th January, 2025 | 5:00 PM
          </p>
          <p className="text-mutedOlive mb-4">
            Our venue is easily accessible with plenty of parking space for guests.
          </p>
        </div>

        {/* Google Map Integration Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-calligraphy text-gold mb-4">Location on Map</h2>
          <iframe
            title="Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5638302262645!2d-74.0059417!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBMNjEnNTg2LjMiTiA3NMKwMTEnMDAuMCJ!5e0!3m2!1sen!2sin!4v1638386328552!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <p className="text-mutedOlive text-center mt-4">
            Click on the map for directions or view the venue in Google Maps.
          </p>
        </div>
      </div>

      {/* Link to RSVP */}
      <div className="text-center mt-12">
        <Link
          to="/rsvp"
          className="text-white bg-gold px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600"
        >
          RSVP Now
        </Link>
      </div>
    </div>
  );
};

export default Venue;
