
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
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Visit Our Bookstore</h3>
              <div className="space-y-4">
                <p className="flex items-start">
                  <span className="mr-3">📍</span>
                  <span>123 Book Street, Literary Town, BK 12345</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3">📞</span>
                  <span>+1 (555) 123-4567</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3">✉️</span>
                  <span>contact@bookhaven.com</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3">🕒</span>
                  <span>
                    Monday - Friday: 9:00 AM - 8:00 PM<br />
                    Saturday: 10:00 AM - 6:00 PM<br />
                    Sunday: 12:00 PM - 5:00 PM
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
