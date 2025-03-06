import React from "react";
import "./CSS_primary/terms.css";
import "./CSS_primary/termsphone.css";

const TermsOfService: React.FC = () => {
  return (
    <div
      className="terms-container"
      style={{
        backdropFilter: "blur(30px)",
        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: "10px",
        padding: "50px",
        paddingTop: "20px",
      }}
    >
      <h1>Terms of Service</h1>
      <h6>Last Updated: {new Date().toDateString()}</h6>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Finance Manager. By accessing or using our service, you agree
        to be bound by these terms.
      </p>

      <h2>2. Use of the Service</h2>
      <p>
        You agree to use this service only for lawful purposes and in compliance
        with applicable laws and regulations.
      </p>

      <h2>3. User Responsibilities</h2>
      <p>
        You are responsible for maintaining the security of your account and
        ensuring all information is accurate.
      </p>

      <h2>4. Termination</h2>
      <p>
        We reserve the right to suspend or terminate accounts that violate these
        terms.
      </p>

      <h2>5. Changes to Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of the
        service means you accept the updated terms.
      </p>
    </div>
  );
};

export default TermsOfService;
