import React, { useState } from "react";
import "./CSS_primary/contact.css";
import "./CSS_primary/contactphone.css";

const ContactUs: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "Query",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="main">
      <div className="middlebox">
        <div className="image"></div>

        <div className="contact-container">
          <h2 className="contact-title">Contact Us</h2>
          {submitted ? (
            <p className="success-message">
              Thank you for reaching out! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label>Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="Query">Query</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Complaint">Complaint</option>
                <option value="Other">Other</option>
              </select>

              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>

              <button type="submit" className="dropdown-btn">
                Submit
              </button>
            </form>
          )}
          <section className="lastquote">
            <p>
              "Money is a tool, not a goal. It should be used wisely, not
              hoarded aimlessly..."
            </p>
            <p className="writer">
              – Inspired by Seneca and modern reflections on wealth.
            </p>
          </section>
        </div>
      </div>
      <div className="chat">
        <p>
          "Hello, friend! 🚀 Got a question or just want to say hi? We're here
          to chat with you anytime! 💬"{" "}
        </p>
        <button type="submit" className="btn">
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
