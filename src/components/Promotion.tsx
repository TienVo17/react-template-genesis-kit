
import React from 'react';
import { Button } from "@/components/ui/button";

const Promotion = () => {
  return (
    <section className="py-16 bg-food-purple text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Join Our Book Club</h2>
            <p className="mb-6">
              Become a member of our Book Club and enjoy exclusive benefits:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="mr-2 w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>10% discount on all purchases</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Early access to new releases</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Monthly book recommendations</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Invitation to author meet-and-greets</span>
              </li>
            </ul>
            <Button className="bg-white text-food-purple hover:bg-gray-100">
              Join Now
            </Button>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Reading club"
              className="rounded-lg shadow-lg max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
