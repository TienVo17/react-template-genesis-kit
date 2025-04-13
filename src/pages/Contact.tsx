
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <h1 className="h2 fw-bold mb-4">Contact Us</h1>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
