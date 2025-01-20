// src/components/GuestBook.jsx
import React, { useState } from "react";

const GuestBook = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [guestbookEntries, setGuestbookEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      const newEntry = { name, message, date: new Date().toLocaleString() };
      setGuestbookEntries([...guestbookEntries, newEntry]);
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="w-full bg-softGray p-6 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-calligraphy text-gold mb-6">
        Guest Book
      </h2>
      
      {/* Guestbook Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          className="w-full p-2 border border-mutedOlive rounded-md"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full p-2 border border-mutedOlive rounded-md"
          rows="4"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full p-2 bg-gold text-white rounded-md font-bold hover:bg-yellow-600"
        >
          Submit
        </button>
      </form>

      {/* Guestbook Entries */}
      <div>
        {guestbookEntries.length > 0 ? (
          guestbookEntries.map((entry, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg mb-4 shadow-md"
            >
              <h3 className="font-semibold text-mutedOlive">{entry.name}</h3>
              <p className="text-sm text-softGray">{entry.date}</p>
              <p className="mt-2">{entry.message}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-softGray">No messages yet.</p>
        )}
      </div>
    </div>
  );
};

export default GuestBook;
