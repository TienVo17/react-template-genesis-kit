
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
    <section className="py-5 bg-light-custom">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
          <h2 className="h3 fw-bold mb-3 mb-md-0">Most Popular Recipe</h2>
          <a href="#" className="text-secondary-custom">View All</a>
        </div>
        
        <div className="row">
          {recipeData.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="card-img-top" 
                    style={{height: "250px", objectFit: "cover", transition: "transform 0.3s"}}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
                <div className="card-body">
                  <h3 className="h5 fw-semibold mb-2">{recipe.title}</h3>
                  <p className="text-muted">{recipe.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;
