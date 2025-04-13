
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-custom text-white py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6 col-lg-3">
            <h5 className="mb-3">Your Company</h5>
            <p className="mb-1">123 Main Street</p>
            <p className="mb-1">New York, NY 10001</p>
            <p className="mb-1">United States</p>
            <p className="mb-1">info@americanfood.com</p>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <h5 className="mb-3">Sitemap</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About</Link></li>
              <li className="mb-2"><Link to="/menu" className="text-white text-decoration-none">Menu</Link></li>
              <li className="mb-2"><Link to="/blog" className="text-white text-decoration-none">Blog</Link></li>
              <li className="mb-2"><Link to="/store" className="text-white text-decoration-none">Store</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">FAQs</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Support Center</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Delivery Info</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle bg-white d-flex align-items-center justify-content-center text-primary-custom" style={{width: "40px", height: "40px"}}>
                <span className="fw-bold">F</span>
              </div>
              <span className="ms-2 fw-semibold">American Food</span>
            </div>
            
            <p className="mb-3">Subscribe to our newsletter to get updates on our latest offers!</p>
            
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-white border-opacity-25" />
        
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} American Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
