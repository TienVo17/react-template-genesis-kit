import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ChefSection from '@/components/ChefSection';
import CompanyProfile from '@/components/CompanyProfile';
import Promotion from '@/components/Promotion';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookList from '@/components/BookList';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <Hero />
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">Sách Nổi Bật</h2>
          <BookList />
        </section>
        <HowItWorks />
        <ChefSection />
        <CompanyProfile />
        <Promotion />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
