
import React from 'react';
import { ShoppingBag, Utensils, Truck } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold mb-3">How It Works</h2>
          <p className="text-muted mx-auto" style={{maxWidth: "700px"}}>
            Professional food prep made simple for busy people who want to enjoy healthy, 
            delicious meals without the hassle.
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <div className="rounded-circle bg-secondary-custom d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: "80px", height: "80px"}}>
              <Utensils size={32} color="white" />
            </div>
            <h3 className="h5 fw-semibold mb-2">Choose Your Meal</h3>
            <p className="text-muted">Browse our menu and select your favorite dishes.</p>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <div className="rounded-circle bg-primary-custom d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: "80px", height: "80px"}}>
              <ShoppingBag size={32} color="white" />
            </div>
            <h3 className="h5 fw-semibold mb-2">Place Your Order</h3>
            <p className="text-muted">Customize your order and choose delivery time.</p>
          </div>
          
          <div className="col-md-4 text-center">
            <div className="rounded-circle bg-pink-custom d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: "80px", height: "80px"}}>
              <Truck size={32} color="white" />
            </div>
            <h3 className="h5 fw-semibold mb-2">Enjoy Your Food</h3>
            <p className="text-muted">We deliver fresh, ready-to-eat meals right to your door.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
