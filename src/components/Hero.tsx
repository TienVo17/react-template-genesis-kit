
import React from 'react';

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden py-5">
      {/* Background elements */}
      <div className="yellow-blob" style={{top: 0, right: 0, width: "60%", height: "70%"}}></div>
      <div className="teal-blob" style={{bottom: 0, left: 0, width: "30%", height: "50%"}}></div>
      
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">
              Popular belief simply random text roots in a piece of classical
            </h1>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn-primary px-4 py-2">
              Get Started
            </button>
          </div>
          
          <div className="col-lg-6 text-center position-relative">
            <img 
              src="/lovable-uploads/cf4fff63-112c-4216-9f5f-91a3bbec42c8.png" 
              alt="Food display"
              className="img-fluid d-none d-lg-block"
            />
            <div className="position-absolute squiggly-line" style={{right: "-20px", top: "25%"}}></div>
            <div className="position-absolute squiggly-line" style={{left: "-20px", bottom: "25%"}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
