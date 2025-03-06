import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CSS_comp/navbar.css";
import AuthButton from "./AuthButton";

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
  
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <Link
                  to="/records"
                  className={location.pathname === "/records" ? "active" : ""}
                >
                  Records
                </Link>
              </li>
              <li>
                <Link
                  to="/analysis"
                  className={location.pathname === "/analysis" ? "active" : ""}
                >
                  Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="/budgets"
                  className={location.pathname === "/budgets" ? "active" : ""}
                >
                  Budgets
                </Link>
              </li>
              <li>
                <Link
                  to="/accounts"
                  className={location.pathname === "/accounts" ? "active" : ""}
                >
                  Accounts
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className={
                    location.pathname === "/categories" ? "active" : ""
                  }
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className={location.pathname === "/profile" ? "active" : ""}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <AuthButton setIsAuthenticated={setIsAuthenticated} />
              </li>{" "}
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/features"
                  className={location.pathname === "/features" ? "active" : ""}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={`btn btn-primary ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className={`btn btn-secondary ${
                    location.pathname === "/signup" ? "active" : ""
                  }`}
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
