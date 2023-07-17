import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold mr-4">
              <h1>Math Magicians</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-white hover:text-gray-300 ml-4">
              Home
            </Link>
            <Link to="/calculator" className="text-white hover:text-gray-300 ml-4">
              Calculator
            </Link>
            <Link to="/quote" className="text-white hover:text-gray-300 ml-4">
              Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
