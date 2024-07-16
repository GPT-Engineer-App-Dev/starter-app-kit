import React from 'react';
import { Button } from "@/components/ui/button";
import { FaRocket } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Website</h1>
      <p className="text-lg text-center mb-8">
        This is a simple landing page created with React and Shadcn UI.
      </p>
      <div className="flex justify-center">
        <Button variant="default" size="lg">
          <FaRocket className="mr-2" /> Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;