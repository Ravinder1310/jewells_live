import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        {/* Newsletter Subscription Section */}
        <div className="row mb-4 align-items-center">
          <div className="col-12 col-md-8 d-flex mb-3 mb-md-0">
            <input 
              type="text" 
              placeholder="Enter your mail" 
              className="form-control me-3 flex-grow-1" 
            />
            <button className="btn btn-outline-light me-2">Facebook</button>
            <button className="btn btn-outline-light me-2">Twitter</button>
            <button className="btn btn-outline-light">Linkedin</button>
          </div>
        </div>
        
        {/* Footer Links Section */}
        <div className="row">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h2>Menu</h2>
            <p><Link to="/" className="text-white text-decoration-none">Home</Link></p>
            <p><Link to="/about" className="text-white text-decoration-none">About</Link></p>
            <p><Link to="/shop" className="text-white text-decoration-none">Shop</Link></p>
            <p><Link to="/blog" className="text-white text-decoration-none">Blog</Link></p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h2>About Us</h2>
            <p>When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to.</p>
          </div>
          <div className="col-12 col-md-4">
            <h2>Contact Us</h2>
            <p>Location</p>
            <p>Call +01123456789</p>
            <p>demo@gmail.com</p>
            <button className="btn btn-primary" onClick={() => navigate(`/contact`)}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Footer;
