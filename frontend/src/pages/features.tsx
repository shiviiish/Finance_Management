import {
  FaChartPie,
  FaMoneyBillWave,
  FaCreditCard,
  FaClipboardList,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CSS_primary/features.css";
import "./CSS_primary/featuresphone.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>FEATURES</h2>
        <p>Take control of your finances with these powerful features.</p>
        <div className="features-underline"></div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <FaMoneyBillWave className="feature-icon" />
          <h3>Expense & Income Tracking</h3>
          <p>
            Easily log and categorize transactions for better financial
            awareness.
          </p>
        </div>

        <div className="feature-card">
          <FaChartPie className="feature-icon" />
          <h3>Financial Insights</h3>
          <p>
            Get visualized reports and charts to analyze your spending habits.
          </p>
        </div>

        <div className="feature-card">
          <FaClipboardList className="feature-icon" />
          <h3>Budget Planning</h3>
          <p>Set category-wise budgets and track your progress in real-time.</p>
        </div>

        <div className="feature-card">
          <FaCreditCard className="feature-icon" />
          <h3>Multi-Account Management</h3>
          <p>Manage multiple cash, card, and bank accounts all in one place.</p>
        </div>
      </div>

      <div className="contact-us">
        <p>
          Have any questions? <Link to="/contact">Contact Us</Link>
        </p>
      </div>
    </section>
  );
};

export default Features;
