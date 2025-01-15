import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {/* About Section - Full width on mobile */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Digital Aadhar Print Portal provides essential government document services to Indian citizens.
            </p>
            <div className="space-y-3">
              <p className="flex items-center text-sm sm:text-base">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="hover:text-white transition-colors">1800-XXX-XXXX</span>
              </p>
              <p className="flex items-center text-sm sm:text-base">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="hover:text-white transition-colors">support@DEGITALSERVE</span>
              </p>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors block py-1">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Contact</a></li>
            </ul>
          </div>
          
          {/* Services Section */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="https://eshram.gov.in/" className="hover:text-white transition-colors block py-1">E-Shram Card</a></li>
              <li><a href="https://abha.abdm.gov.in/abha/v3/register" className="hover:text-white transition-colors block py-1">Health ID</a></li>
              <li><a href="https://jsfss.jharkhand.gov.in/" className="hover:text-white transition-colors block py-1">Ration Card</a></li>
              <li><a href="https://selfregistration.cowin.gov.in/" className="hover:text-white transition-colors block py-1">COVID Services</a></li>
            </ul>
          </div>
          
          {/* Support Section */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors block py-1">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors block py-1">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center text-gray-400 text-sm sm:text-base">
            <p className="mb-2">&copy; {new Date().getFullYear()} Digital Aadhar Print. All rights reserved.</p>
            <p>Designed by <a href="https://www.digitalserve.in" className="hover:text-white transition-colors">Digital Serve</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;