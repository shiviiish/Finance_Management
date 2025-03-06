import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS_primary/profile.css";
import "./CSS_primary/profilephone.css";

const Profile: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    currency: "USD",
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [balance, setBalance] = useState(1000);
  const navigate = useNavigate();

  const currencyRates: { [key: string]: number } = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.5,
    JPY: 150.4,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "currency") {
      const rate = currencyRates[e.target.value] || 1;
      setBalance(1000 * rate);
    }
  };

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const confirmDeleteAccount = () => {
    console.log("Account deleted");
    setShowConfirm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <h2 className="pf">Profile</h2>
      <div className="header-summary">
        <div className="summary-item">
          Expenses: {balance.toFixed(2)} {form.currency}
        </div>
        <div className="summary-item">
          Income: {balance.toFixed(2)} {form.currency}
        </div>
        <div className="summary-item">
          Balance: {balance.toFixed(2)} {form.currency}
        </div>
      </div>

      <div className="profile-form">
        <label>Preferred Currency</label>
        <select
          name="currency"
          value={form.currency}
          onChange={handleChange}
          className="full-width"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="JPY">JPY - Japanese Yen</option>
        </select>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="full-width"
          placeholder="Enter your name"
        />

        <label>Gender</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="full-width"
          placeholder="Enter your gender"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="full-width"
          placeholder="Enter your email-address"
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="full-width"
          placeholder="Enter your phone-no."
        />
      </div>

      <div className="action-buttons">
        <button className="save-btn">Save Changes</button>
      </div>

      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="delete-section">
        <button className="delete-btn" onClick={handleDeleteClick}>
          Delete Account
        </button>
      </div>

      {showConfirm && (
        <div className="modal">
          <p>
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
          <button className="save-btn" onClick={confirmDeleteAccount}>
            Confirm
          </button>
        </div>
      )}

      <section className="lastquote">
        <p>
          "In the end, our wealth is not measured by what we own, but by the
          quality of our choices and the impact they have on those around
          us....."
        </p>
        <p className="writer">
          – Inspired by Mahatma Gandhi and modern social entrepreneurship.
        </p>
      </section>
    </div>
  );
};

export default Profile;
