// src/pages/RSVPPage.jsx
import React, { useState } from "react";

const RSVPPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, like sending the data to an API or email.
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-ivory py-12">
      <h1 className="text-4xl font-calligraphy text-gold text-center mb-6">
        RSVP for Our Wedding
      </h1>
      <p className="text-lg text-mutedOlive text-center mb-8">
        We are so excited to celebrate with you! Please let us know if you'll be attending.
      </p>

      {submitted ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-calligraphy text-gold mb-4">Thank You!</h2>
          <p className="text-mutedOlive mb-4">
            Your RSVP has been submitted successfully. We look forward to celebrating with you!
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-mutedOlive mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border-2 border-softGray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-mutedOlive mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border-2 border-softGray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="attendees"
              className="block text-lg font-semibold text-mutedOlive mb-2"
            >
              Number of Attendees
            </label>
            <select
              id="attendees"
              value={attendees}
              onChange={(e) => setAttendees(e.target.value)}
              className="w-full p-3 border-2 border-softGray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-mutedOlive mb-2"
            >
              Special Message or Dietary Restrictions (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border-2 border-softGray rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Write any special message or dietary preferences here."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-white py-3 rounded-lg text-lg font-semibold hover:bg-amber-600"
          >
            Submit RSVP
          </button>
        </form>
      )}
    </div>
  );
};

export default RSVPPage;
