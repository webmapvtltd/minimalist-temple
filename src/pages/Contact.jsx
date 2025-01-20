// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add form submission logic (e.g., sending the data to a backend)
    alert("Your message has been submitted!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="w-full bg-ivory p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-calligraphy text-gold mb-6">
        Contact Us
      </h2>

      {/* Contact Information Section */}
      <div className="text-center mb-6">
        <p className="text-lg text-mutedOlive">For any inquiries, please reach out:</p>
        <p className="text-lg text-softGray">Email: <span className="text-mutedOlive">contact@wedding.com</span></p>
        <p className="text-lg text-softGray">Phone: <span className="text-mutedOlive">+91 9876543210</span></p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg text-mutedOlive">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg border border-softGray"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg text-mutedOlive">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg border border-softGray"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg text-mutedOlive">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg border border-softGray"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gold text-white p-3 rounded-lg mt-4 hover:bg-amber-600"
        >
          Submit
        </button>
      </form>

      {/* Map Section */}
      <div className="mt-8">
        <h3 className="text-xl font-calligraphy text-gold text-center mb-4">Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244953.4556330433!2d77.05701563422349!3d28.61393938728831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d7d063cf47%3A0x50274ac9f200d39!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1681011216268!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Location Map in New Delhi"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
