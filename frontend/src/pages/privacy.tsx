import React from "react";
import "./CSS_primary/privacy.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div
      className="privacy-container"
      style={{
        backdropFilter: "blur(30px)",
        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: "10px",
        padding: "50px",
        paddingTop: "20px",
      }}
    >
      <h1>Privacy Policy</h1>
      <h6>Last Updated: {new Date().toDateString()}</h6>

      <h2>1. Information We Collect</h2>
      <p>
        We collect personal information such as name, email, and financial
        records only for providing our services.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        Your data is used to manage your finances, improve our services, and
        ensure security.
      </p>

      <h2>3. Data Security</h2>
      <p>
        We implement strict security measures to protect your information from
        unauthorized access.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        We do not sell or share your personal data with third-party advertisers.
      </p>

      <h2>5. Contact Us</h2>
      <p>
        If you have any questions, reach out to us via the{" "}
        <a href="/contact">Contact Us</a> page.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
