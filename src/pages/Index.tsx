
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import EcoPoints from '@/components/EcoPoints';
import Safety from '@/components/Safety';
import MapSection from '@/components/MapSection';
import WhyHitchRide from '@/components/WhyHitchRide';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    // Set page title
    document.title = 'Hitch Ride - A Smarter Way to Share Rides in Bengaluru';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <EcoPoints />
        <Safety />
        <WhyHitchRide />
        <MapSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
