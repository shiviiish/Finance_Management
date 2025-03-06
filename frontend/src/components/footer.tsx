import React from "react";
import { Link } from "react-router-dom";
import "./CSS_comp/footer.css";
import "./CSS_comp/navbarphone.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} Finance Manager. All Rights
          Reserved.
        </p>
        <ul className="footer-links">
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
