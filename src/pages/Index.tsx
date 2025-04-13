
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ChefSection from '@/components/ChefSection';
import CompanyProfile from '@/components/CompanyProfile';
import PopularRecipes from '@/components/PopularRecipes';
import Promotion from '@/components/Promotion';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ChefSection />
        <CompanyProfile />
        <PopularRecipes />
        <Promotion />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
