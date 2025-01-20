// src/components/QRCodeGenerator.jsx
import React, { useState } from "react";
import { QRCode } from "qrcode.react";

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      setGenerated(true);
    }
  };

  return (
    <div className="w-full bg-softGray p-6 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-calligraphy text-gold mb-4">
        Generate QR Code
      </h2>

      {/* Input Form */}
      <form onSubmit={handleGenerate} className="mb-6 space-y-4">
        <input
          type="text"
          className="w-full p-2 border border-mutedOlive rounded-md"
          placeholder="Enter text or URL"
          value={inputText}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full p-2 bg-gold text-white rounded-md font-bold hover:bg-yellow-600"
        >
          Generate QR Code
        </button>
      </form>

      {/* Generated QR Code */}
      {generated && inputText && (
        <div className="text-center">
          <QRCode value={inputText} size={256} level="H" />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
