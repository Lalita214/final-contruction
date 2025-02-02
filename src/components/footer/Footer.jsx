import React from "react";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";
import frame from "./ram.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top-content">
          <img src={frame} alt="logo" />
          <p>
            Making a world a better place through constructing elegant
            hierarchies
          </p>
          <div className="social-logo">
            <FaFacebook />
            <CiTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="footer-content">
          <h3>Explore</h3>
          <ul className="list-item">
            <li>About</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Partner</li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul className="list-item">
            <li>About</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Partner</li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Stay in touch</h3>
          <div className="content">
            <h3>Call us</h3>
            <p>9430974195,9858958789</p>
          </div>
          <div className="content">
            <h3>Send Us Email</h3>
            <p>Ramsconstruction@gmail.com</p>
          </div>

        </div>
      </div>
      
      <p className="footer-copyright">&copy; 2024 Ram construction company , All right reserved</p>
    </footer>
  );
};

export default Footer;
