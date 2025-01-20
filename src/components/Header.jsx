import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-ivory shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-gold font-calligraphy text-3xl">
          The Wedding Invite
        </h1>

        {/* Toggle Button for Mobile */}
        <button
          className="text-gold text-2xl sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />} {/* Toggle between menu and close icon */}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute sm:relative top-16 sm:top-0 left-0 w-full sm:w-auto bg-ivory sm:bg-transparent shadow-md sm:shadow-none transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } sm:flex sm:space-x-6`}
        >
          <ul className="sm:flex sm:space-x-6 w-full sm:w-auto text-center">
            {[
              { path: "/", label: "Home" },
              { path: "/rituals", label: "Rituals" },
              { path: "/venue", label: "Venue" },
              { path: "/rsvp", label: "RSVP" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <li key={path} className="py-2 sm:py-0">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block text-lg font-sans px-4 py-2 ${
                      isActive ? "text-gold" : "text-pastelGreen"
                    } hover:text-gold`
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
