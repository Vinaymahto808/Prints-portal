import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/public/img.jpg" 
          alt="Digital card printing background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Secure Digital Card{' '}
            <span className="text-blue-400">Print Services</span>
            {' '}for Your Important Documents
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get high-quality PVC prints of your official documents with our
            fast, secure, and reliable printing service.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-lg 
                       transform transition duration-200 hover:scale-105 shadow-lg
                       hover:shadow-xl active:scale-100"
            >
              Start Printing Now
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white text-lg font-semibold px-8 py-4 rounded-lg 
                       transform transition duration-200 hover:scale-105 shadow-lg
                       hover:shadow-xl active:scale-100 hover:bg-white hover:text-blue-600"
            >
              
            <a href="/Components/AdminDashboard">View Services</a>
            </button>
          </div>

          {/* Additional visual elements */}
          <div className="mt-12 flex justify-center space-x-6">
            <div className="text-white text-center">
              <div className="font-bold text-3xl">100%</div>
              <div className="text-sm mt-1">Working</div>
            </div>
            <div className="h-12 w-px bg-gray-400"></div>
            <div className="text-white text-center">
              <div className="font-bold text-3xl">24/7</div>
              <div className="text-sm mt-1">Support</div>
            </div>
            <div className="h-12 w-px bg-gray-400"></div>
          <div className="text-white text-center">
              <div className="font-bold text-3xl">Fast</div>
              <div className="text-sm mt-1">Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-12 text-white" 
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
             