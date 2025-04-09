
import React from 'react';
import { Ban, BadgeCheck, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PremiumBenefits = () => {
  const benefits = [
    {
      icon: <Ban className="h-8 w-8 text-eco" />,
      title: "No Ads",
      description: "Enjoy an uninterrupted experience"
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-eco" />,
      title: "2× Eco Points",
      description: "Earn double the rewards for every eco-friendly ride"
    },
    {
      icon: <Zap className="h-8 w-8 text-eco" />,
      title: "Priority Matching",
      description: "Get matched faster with preferred routes and verified riders"
    }
  ];

  return (
    <section className="container-section bg-black/95 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Benefits</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Upgrade your ride-sharing experience with exclusive features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {benefits.map((benefit, index) => (
          <Card key={index} 
                className="animate-on-scroll bg-black/40 border-eco/20 hover:border-eco/40 transition-all duration-300" 
                style={{ animationDelay: `${index * 0.2}s` }}>
            <CardContent className="p-6 text-center">
              <div className="bg-eco/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-eco">{benefit.title}</h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button 
          className="bg-eco hover:bg-eco-dark text-white font-semibold py-6 px-8 text-lg rounded-full 
                     shadow-[0_0_20px_rgba(0,230,118,0.3)] hover:shadow-[0_0_30px_rgba(0,230,118,0.5)] 
                     transition-all duration-300 animate-pulse"
        >
          Go Premium
        </Button>
      </div>
    </section>
  );
};

export default PremiumBenefits;
