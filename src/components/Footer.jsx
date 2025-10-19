import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">HealthCare+</h2>
          <p className="text-blue-100">
            We’re dedicated to providing reliable online healthcare solutions
            that make your life easier, healthier, and happier.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#doctors"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Doctors
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-blue-100">
            <li>📍 Karachi, Pakistan</li>
            <li>📞 +92 300 1234567</li>
            <li>✉️ support@healthcareplus.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-blue-200 mt-10 border-t border-blue-500 pt-6 text-sm">
        © {new Date().getFullYear()} HealthCare+. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
