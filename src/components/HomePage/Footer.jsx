import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </nav>

        {/* Contact Info */}

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-700 text-center py-2 mt-4">
        <p className="text-sm">
          &copy; 2024 <span>HealthCare PVT</span>. All rights reserved.
        </p>
        <p className="text-sm mt-1">
          Developed by <a href="https://blackalphalabs.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">BlackAlphaLabs</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
