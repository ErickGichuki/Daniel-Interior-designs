import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full p-4 bg-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" aria-label="Home">
                <img
                  src="/Daniel.png"
                  alt="Daniel logo"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </Link>
            </div>
            <p className="ml-3 text-lg font-semibold">
              Daniel Interior Designs
            </p>
            <div className="hidden md:flex space-x-6 ml-auto">
              <NavLink to="/" className="hover:text-green-500">
                Home
              </NavLink>
              <NavLink to="/about" className="hover:text-green-500">
                About
              </NavLink>
              <NavLink to="/services" className="hover:text-green-500 ">
                Services
              </NavLink>
              <NavLink to="/contact" className="hover:text-green-500">
                Contact us
              </NavLink>
              <NavLink to="/signup" className="hover:text-green-500">
                Signup
              </NavLink>
            </div>
            <button
              className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 hover:text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 hover:text-white"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 hover:text-white"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 hover:text-white"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/signup"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-green-700 hover:text-white"
            >
              Signup
            </NavLink>
          </div>
        </div>
      </nav>
      <main className="pt-16"></main>
    </>
  );
}

export default Navbar;
