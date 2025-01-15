import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Printer, Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-md py-4"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Printer className="w-10 h-10 text-blue-600" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              DIGITALSERV
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-xs flex-1 mx-16">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">
                Contact
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 font-medium group-hover:text-gray-900">
                  Services
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-lg py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  {["Aadhaar Card", "Voter Card", "PAN Card"].map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${service.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 group"
                    >
                      <span className="flex-1">{service} Service</span>
                      <ChevronDown size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Notification Bell */}
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="Components/auth/LoginPage" className="px-4 py-2 text-gray-600 font-medium hover:text-green-900 transition-colors">
                Login
              </Link>
              <Link to="Components/auth/SignupPage" className="px-8 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 font-medium transition-all transform hover:scale-105">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            <Link to="/" className="block py-2 text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-gray-600">
              About Us
            </Link>
            <Link to="/contact" className="block py-2 text-gray-600">
              Contact
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="flex items-center gap-1 py-2 text-gray-600 w-full"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="pl-4 space-y-2">
                  <Link to="/services/aadhaar-card" className="block py-2 text-gray-600">
                    Aadhaar Service
                  </Link>
                  <Link to="/services/voter-card" className="block py-2 text-gray-600">
                    Voter Card Service
                  </Link>
                  <Link to="/services/pan-card" className="block py-2 text-gray-600">
                    PAN Card Service
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-4 space-y-2">
              <Link to="/login" className="block w-full py-2 text-gray-600 text-center">
                Login
              </Link>
              <Link to="/signup" className="block w-full px-6 py-2 text-white bg-blue-600 rounded-full text-center">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;