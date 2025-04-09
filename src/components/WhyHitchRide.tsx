
import React from 'react';
import { 
  CreditCard, 
  MapPin, 
  CheckCircle, 
  Brain,
  Coffee,
  Clock,
  Users,
  BadgeCheck
} from 'lucide-react';

const WhyHitchRide = () => {
  return (
    <section className="container-section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Hitch Ride?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our platform offers unique advantages for Bengaluru commuters looking for smarter transportation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card h-full">
          <div className="bg-eco/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <CreditCard className="h-6 w-6 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Free or Affordable</h3>
          <p className="text-gray-600">
            Students and daily commuters can access free rides through our sponsored program, or pay minimal fees based on distance.
          </p>
        </div>

        <div className="card h-full">
          <div className="bg-eco/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Real-time Tracking</h3>
          <p className="text-gray-600">
            Know exactly where your ride is with our advanced GPS technology, providing accurate ETAs and route visibility.
          </p>
        </div>

        <div className="card h-full">
          <div className="bg-eco/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Verified Rides</h3>
          <p className="text-gray-600">
            All drivers undergo thorough background checks and vehicles must pass our safety inspection to join the platform.
          </p>
        </div>

        <div className="card h-full">
          <div className="bg-eco/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Brain className="h-6 w-6 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Smart Suggestions</h3>
          <p className="text-gray-600">
            Our AI analyzes your travel patterns to suggest optimal carpooling matches based on your schedule and preferences.
          </p>
        </div>

        <div className="card h-full">
          <div className="bg-eco/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Coffee className="h-6 w-6 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Partner Rewards</h3>
          <p className="text-gray-600">
            Enjoy special discounts and offers at cafés, restaurants, and stores across Bengaluru with our local partnerships.
          </p>
        </div>

        <div className="card h-full">
          <div className="bg-eco/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
          <p className="text-gray-600">
            Book rides in advance or find instant matches for your daily commute with our flexible scheduling options.
          </p>
        </div>

        <div className="card h-full">
          <div className="bg-eco/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
          <p className="text-gray-600">
            Join a growing network of eco-conscious commuters working together to reduce Bengaluru's traffic congestion.
          </p>
        </div>

        <div className="card h-full">
          <div className="bg-eco/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <BadgeCheck className="h-6 w-6 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Corporate Programs</h3>
          <p className="text-gray-600">
            Special carpooling solutions for businesses to help employees commute efficiently while reducing carbon footprint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHitchRide;
