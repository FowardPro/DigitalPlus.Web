import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>FOLLOW US</h3>
        <a href="#" className="social-link">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-facebook"></i> Facebook
        </a>
      </div>
      <div className="footer-section">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><a href="#"><Link to="/">Home</Link></a></li>
          <li><a href="#">About</a></li>
          <li><a href="#"><Link to="/login">Sign In</Link></a></li>
          <li><a href="#">Mentee Reset Password</a></li>
          <li><a href="#">Book Appointment</a></li>
          <li><a href="#">Roster</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>CONTACTS</h3>
        <p><i className="fas fa-phone-alt"></i> 0732345678</p>
        <p><i className="fas fa-fax"></i> +1457903129</p>
        <p><i className="fas fa-envelope"></i> wementor123@gmail.com</p>
      </div>
      <div className="footer-logo">
        <img src="path_to_logo.png" alt="We Mentor Logo" />
      </div>
    </footer>
  );
};

export default Footer;
