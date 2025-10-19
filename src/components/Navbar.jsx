import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Health<span className="text-yellow-300">Care</span>
        </Link>

        {/* Menu Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Menu Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static bg-blue-600 w-full md:w-auto left-0 top-[60px] md:top-auto transition-all duration-300 ease-in ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block px-4 py-2 hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
