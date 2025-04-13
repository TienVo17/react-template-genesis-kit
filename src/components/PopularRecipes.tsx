
import React from 'react';

const bookData = [
  {
    id: 1,
    title: "The Forgotten Tales",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Fiction",
  },
  {
    id: 2,
    title: "Business Strategy",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Business",
  },
  {
    id: 3,
    title: "The Art of Cooking",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Cooking",
  }
];

const PopularRecipes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Books</h2>
          <a href="#" className="text-food-purple hover:underline mt-4 md:mt-0">View All</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bookData.map((book) => (
            <div key={book.id} className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600">{book.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;
