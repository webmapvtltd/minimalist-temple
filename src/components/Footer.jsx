import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ivory text-center py-6 border-t border-warmBeige">
      <div className="container mx-auto px-4">
        {/* Wedding Couple's Name */}
        <h2 className="text-gold font-calligraphy text-2xl">With Love, Priya & Arjun</h2>

        {/* Wedding Date & Location */}
        <p className="text-softGray text-lg mt-2">
          Join us on <span className="text-gold">March 10, 2025</span> at <span className="text-gold">Udaipur, India</span>
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-pastelGreen hover:text-gold text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pastelGreen hover:text-gold text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-pastelGreen hover:text-gold text-2xl" />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-mutedOlive text-sm mt-4">
          &copy; {new Date().getFullYear()} Priya & Arjun’s Wedding. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
