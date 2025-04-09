
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block">Hitch Ride</span>
          <span className="text-eco block mt-2">A Smarter Way to Share Rides</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12">
          Reduce traffic, pollution, and costs in Bengaluru through intelligent carpooling
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="btn-primary text-lg group">
            Start Carpooling
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            className="btn-secondary text-lg"
            onClick={scrollToHowItWorks}
          >
            How It Works
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-20 md:mt-32 relative">
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Map visualization with car and route animation */}
            <div className="aspect-[16/9] rounded-xl bg-gray-100 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-map-pattern"></div>
              
              {/* Car icon */}
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float">
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="20" width="60" height="15" rx="5" fill="#333" />
                  <rect x="15" y="10" width="40" height="15" rx="3" fill="#333" />
                  <circle cx="20" cy="35" r="5" fill="#555" />
                  <circle cx="60" cy="35" r="5" fill="#555" />
                </svg>
              </div>

              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M100,225 C150,100 300,350 400,225 S650,100 700,225" 
                  stroke="#00E676" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  fill="none" 
                  className="route-line animate" 
                />
              </svg>

              {/* Start and end points */}
              <div className="map-pin" style={{ top: '50%', left: '12.5%' }}></div>
              <div className="map-pin" style={{ top: '50%', left: '87.5%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
