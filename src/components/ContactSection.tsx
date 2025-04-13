
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-5 bg-light-custom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="h3 fw-bold mb-4">Contact Us</h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-4">
                <textarea 
                  className="form-control" 
                  placeholder="Message" 
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="col-lg-6">
            <div className="h-100 rounded bg-light d-flex align-items-center justify-content-center" style={{minHeight: "300px"}}>
              <p className="text-muted">Map goes here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
