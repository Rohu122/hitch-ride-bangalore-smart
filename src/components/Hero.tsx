
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, LogIn, UserPlus } from "lucide-react";

const Hero = () => {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-24 md:pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Hitch Ride</span>
              <span className="text-eco block mt-2">A Smarter Way to Share Rides</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12">
              Reduce traffic, pollution, and costs in Bengaluru through intelligent carpooling
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button className="btn-primary text-lg w-full sm:w-auto flex items-center justify-center">
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </Button>
              <Button 
                className="btn-secondary text-lg w-full sm:w-auto flex items-center justify-center"
                onClick={scrollToHowItWorks}
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Sign Up
              </Button>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={scrollToHowItWorks} 
                className="flex items-center text-gray-600 hover:text-eco transition-colors"
              >
                Learn how it works
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[450px]">
              <img 
                src="/lovable-uploads/13a1e940-3c32-4543-882f-2035b3eb24e0.png" 
                alt="Hitch Ride Carpooling Service" 
                className="w-full h-full object-contain"
              />

              {/* Animated path overlay */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M200,180 C250,200 300,350 400,400 S550,480 640,320" 
                  stroke="#00E676" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  fill="none" 
                  className="route-line animate" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
