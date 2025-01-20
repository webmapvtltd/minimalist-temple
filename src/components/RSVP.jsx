// src/components/RSVP.jsx
import React, { useState } from "react";

const RSVP = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(null); // null: not selected, true: attending, false: not attending
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && attending !== null) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-softGray p-6 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-calligraphy text-gold mb-6">
        RSVP for the Wedding
      </h2>

      {submitted ? (
        <div className="text-center">
          <h3 className="text-lg font-semibold text-mutedOlive">Thank you for your response, {name}!</h3>
          <p className="text-softGray">
            You have confirmed that you {attending ? "will" : "will not"} be attending the wedding.
          </p>
          {message && <p className="mt-4 text-softGray">Your message: "{message}"</p>}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <input
            type="text"
            className="w-full p-2 border border-mutedOlive rounded-md"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Attendance Options */}
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="attendance"
                value="yes"
                checked={attending === true}
                onChange={() => setAttending(true)}
                className="mr-2"
              />
              <span className="text-softGray">Attending</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="attendance"
                value="no"
                checked={attending === false}
                onChange={() => setAttending(false)}
                className="mr-2"
              />
              <span className="text-softGray">Not Attending</span>
            </label>
          </div>

          {/* Message Field */}
          <textarea
            className="w-full p-2 border border-mutedOlive rounded-md"
            rows="4"
            placeholder="Any message or wishes?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 bg-gold text-white rounded-md font-bold hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default RSVP;
