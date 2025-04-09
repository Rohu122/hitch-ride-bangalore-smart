
import React, { useState } from 'react';
import { RefreshCcw, DollarSign, AlertTriangle, Droplet, Smile } from 'lucide-react';
import { Slider } from "@/components/ui/slider";

const HowItWorks = () => {
  const [sliderValue, setSliderValue] = useState(50);
  
  // Calculate savings based on slider value (just for demonstration)
  const soloRideCost = 500; // Rupees
  const maxSavings = 350; // Maximum savings in Rupees
  const savings = Math.round((maxSavings * sliderValue) / 100);
  const carpoolCost = soloRideCost - savings;

  return (
    <section id="how-it-works" className="container-section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How Hitch Ride Works</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our platform makes carpooling simple, efficient and rewarding for everyone in Bengaluru.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div className="card animate-on-scroll">
          <div className="bg-eco/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <RefreshCcw className="h-8 w-8 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Ride Matching</h3>
          <p className="text-gray-600">
            Our AI algorithm matches you with riders going in the same direction, optimizing routes for everyone.
          </p>
        </div>

        <div className="card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <div className="bg-eco/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <DollarSign className="h-8 w-8 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Split Costs</h3>
          <p className="text-gray-600">
            Share your ride expenses automatically with our fair pricing system based on distance traveled.
          </p>
        </div>

        <div className="card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
          <div className="bg-eco/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Traffic Reduction</h3>
          <p className="text-gray-600">
            Every shared ride takes cars off Bengaluru roads, reducing traffic jams during peak hours.
          </p>
        </div>

        <div className="card animate-on-scroll" style={{ animationDelay: '0.6s' }}>
          <div className="bg-eco/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Droplet className="h-8 w-8 text-eco" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fuel-based Pricing</h3>
          <p className="text-gray-600">
            Prices adjust based on vehicle fuel efficiency, encouraging eco-friendly transportation.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 animate-on-scroll">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">See How Much You Can Save</h3>
          <p className="text-gray-600">
            Compare the cost of carpooling versus driving alone on your daily commute.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <label className="text-gray-700 font-medium mb-2 block">
                Carpooling Preference: {sliderValue}%
              </label>
              <Slider
                value={[sliderValue]}
                onValueChange={(value) => setSliderValue(value[0])}
                max={100}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Less Sharing</span>
                <span>More Sharing</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="font-medium text-gray-700">Solo Driving</h4>
                <p className="text-3xl font-bold">₹{soloRideCost}</p>
                <p className="text-sm text-gray-500">per month</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">With Hitch Ride</h4>
                <p className="text-3xl font-bold text-eco">₹{carpoolCost}</p>
                <p className="text-sm text-gray-500">per month</p>
              </div>
            </div>

            <div className="bg-eco/10 p-4 rounded-lg flex items-center">
              <Smile className="h-6 w-6 text-eco mr-3" />
              <div>
                <p className="font-medium">You save ₹{savings} per month</p>
                <p className="text-sm text-gray-600">That's ₹{savings * 12} per year!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
