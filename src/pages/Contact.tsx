
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="text-lg mb-12">
            Have questions about a book, order, or just want to say hello? We'd love to hear from you!
          </p>
          
          <div className="mb-16">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253576489!2d144.95372995775788!3d-37.81725037199335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjEiUyAxNDTCsDU3JzE5LjAiRQ!5e0!3m2!1sen!2sau!4v1634789695067!5m2!1sen!2sau" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          
          <ContactSection />
          
          <section className="py-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What are your store hours?</h3>
                <p className="text-gray-600">
                  Our store is open Monday through Friday from 9:00 AM to 8:00 PM, Saturday from 10:00 AM to 6:00 PM, 
                  and Sunday from 12:00 PM to 5:00 PM.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International shipping rates vary depending on the destination 
                  and the weight of the package. Please contact us for specific shipping quotes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Can I return or exchange a book?</h3>
                <p className="text-gray-600">
                  We accept returns within 30 days of purchase with a receipt. Books must be in their original condition. 
                  For online orders, please contact us to initiate the return process.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Do you offer gift wrapping?</h3>
                <p className="text-gray-600">
                  Yes, we offer complimentary gift wrapping for all purchases. You can select this option during checkout 
                  for online orders or request it in-store.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
