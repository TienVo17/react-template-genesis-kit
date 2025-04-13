
import React from 'react';

const recipeData = [
  {
    id: 1,
    title: "Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Healthy",
  },
  {
    id: 2,
    title: "Hot Dog",
    image: "https://images.unsplash.com/photo-1612392062631-94dd858cba90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Fast Food",
  },
  {
    id: 3,
    title: "Hamburger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Fast Food",
  }
];

const PopularRecipes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Most Popular Recipe</h2>
          <a href="#" className="text-food-purple hover:underline mt-4 md:mt-0">View All</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipeData.map((recipe) => (
            <div key={recipe.id} className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;
