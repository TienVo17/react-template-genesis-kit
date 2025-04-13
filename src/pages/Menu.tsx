
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  { id: 1, name: "Fiction", count: 124, icon: "📚" },
  { id: 2, name: "Non-Fiction", count: 89, icon: "📖" },
  { id: 3, name: "Science & Technology", count: 67, icon: "🔬" },
  { id: 4, name: "Business", count: 54, icon: "💼" },
  { id: 5, name: "Self-Help", count: 42, icon: "🌱" },
  { id: 6, name: "Biographies", count: 38, icon: "👤" },
  { id: 7, name: "History", count: 73, icon: "🏛️" },
  { id: 8, name: "Art & Music", count: 29, icon: "🎨" },
  { id: 9, name: "Children's Books", count: 46, icon: "🧸" },
  { id: 10, name: "Comics & Graphic Novels", count: 31, icon: "💬" },
  { id: 11, name: "Education", count: 58, icon: "🎓" },
  { id: 12, name: "Cooking", count: 25, icon: "🍳" },
];

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Book Categories</h1>
          <p className="text-lg mb-6">
            Browse our extensive collection by category to find your next favorite read.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <span className="text-3xl">{category.icon}</span>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{category.count} books</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
