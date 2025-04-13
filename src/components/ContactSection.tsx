
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <Input placeholder="Your Email" type="email" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <Input placeholder="Subject" className="w-full p-3 border rounded-md" />
              </div>
              <div>
                <Textarea 
                  placeholder="Message" 
                  rows={4} 
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <Button className="bg-food-teal hover:bg-food-teal/90 text-black px-8 py-2 rounded-md">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="h-80 md:h-auto">
            <div className="w-full h-full rounded-lg overflow-hidden">
              {/* Placeholder for a map - in a real app, you'd use Google Maps or another map API */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Map goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
