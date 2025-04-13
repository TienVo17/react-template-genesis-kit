
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">About Book Haven</h1>
          
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Book Haven was founded in 2010 by Jane and John Smith, two lifelong book lovers with a passion for sharing 
                  the joy of reading with others. What started as a small corner bookshop has grown into a beloved community 
                  destination for readers of all ages and interests.
                </p>
                <p className="text-gray-600 mb-4">
                  Our mission is simple: to connect readers with books that will inspire, educate, and entertain them. We believe 
                  that books have the power to transform lives, open minds, and build bridges between people and cultures.
                </p>
                <p className="text-gray-600">
                  Over the years, we've expanded our collection to include over 20,000 titles across more than 50 categories, 
                  ensuring that every reader can find something that speaks to them. Our knowledgeable and passionate staff 
                  is always ready to help you discover your next favorite read.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Bookstore interior"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-food-teal rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diversity</h3>
                <p className="text-gray-600">
                  We're committed to offering books from diverse voices and perspectives, ensuring representation across our shelves.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-food-yellow rounded-full flex items-center justify-center text-black mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in fostering a community of readers through events, book clubs, and a welcoming atmosphere.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-food-purple rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Knowledge</h3>
                <p className="text-gray-600">
                  We're dedicated to promoting literacy and a love of learning for readers of all ages and backgrounds.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">Jane Smith</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">John Smith</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-gray-600">Head Librarian</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">Michael Brown</h3>
                <p className="text-gray-600">Events Coordinator</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
