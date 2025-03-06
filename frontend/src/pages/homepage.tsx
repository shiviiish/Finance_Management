import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS_primary/homepage.css";
import "./CSS_primary/homephone.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "📌 Is BudgetSync free to use?",
      answer:
        "Yes! BudgetSync offers a free plan with essential budgeting features. We also provide premium plans for advanced tools and analytics.",
    },
    {
      id: 2,
      question: "🔒 How do you ensure data privacy?",
      answer:
        "Your security is our priority. We use bank-level encryption and never share your financial data with third parties.",
    },
    {
      id: 3,
      question: "🏦 Can I link my bank account?",
      answer:
        "Currently, we support manual entry of transactions. We are working on integrating bank linking features for automated tracking.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <div className="faq-item" key={faq.id}>
            <button className="faq-question" onClick={() => toggleFAQ(idx)}>
              {faq.question}
              <span className={`arrow ${openIndex === idx ? "open" : ""}`}>
                &#9662;
              </span>
            </button>
            {openIndex === idx && (
              <div className="faq-answer show">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to BudgetSync...</h1>
        <p className="tagline">
          Sync all your financial needs in one place! BudgetSync helps you track
          expenses, analyze spending patterns, and manage your budgets
          efficiently.
        </p>
        <div className="tar1">
          <p className="tar">
            "At BudgetSync, we make managing money simple, smart, and
            stress-free. Take control of your finances and build a secure future
            with ease!"
          </p>
          <p className="tar">~Shivangi Sahay</p>
          <p className="tar">Founder & CEO, BudgetSync</p>
        </div>
        <Link to="/records" className="cta-button">
          Start Managing Finances
        </Link>
      </header>

      <div id="services">
        <div className="box" id="b1">
          <h2 className="h-secondary center">About Us</h2>
          <p className="center">
            💡 Managing money shouldn’t be a struggle. BudgetSync transforms
            financial chaos into clarity! Track your expenses, plan budgets, and
            unlock powerful insights—all in one place. Whether you're saving for
            the future, cutting down on unnecessary expenses, or simply wanting
            a stress-free way to manage money, we’ve got you covered. Join
            thousands of smart budgeters and take charge of your financial
            journey today! 🚀💰
          </p>
        </div>
        <div className="box" id="b2">
          <h2 className="h-secondary center">Why Choose Us?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <span>📊</span>
              <h3 className="sec">Expense Tracking</h3>
              <p>
                Keep an eye on where your money goes with real-time tracking.
              </p>
            </div>
            <div className="feature-item">
              <span>💰</span>
              <h3 className="sec">Budget Planning</h3>
              <p>Set financial goals and stay on track with smart budgeting.</p>
            </div>
            <div className="feature-item">
              <span>📈</span>
              <h3 className="sec">Financial Analysis</h3>
              <p>
                Gain insights into your spending habits and savings potential.
              </p>
            </div>
            <div className="feature-item">
              <span>🔒</span>
              <h3 className="sec">Secure & Private</h3>
              <p>
                Your financial data is protected with advanced security
                measures.
              </p>
            </div>
          </div>
        </div>

        <div className="box">
          <h2 className="h-secondary center">How It Works</h2>
          <ul>
            <li>
              Step 1: Sign up and create an account : Create your free account
              in seconds and step into a world of seamless financial management
            </li>
            <li>
              Step 2: Add your income and expenses : No more guesswork! Simply
              log your transactions—every rupee earned and spent is tracked in
              real-time.
            </li>
            <li>
              Step 3: Set budgets and track spending : Define spending limits,
              categorize expenses, and get notified when you're nearing your
              budget goals. No more overspending!
            </li>
            <li>
              Step 4: Analyze trends and optimize financial planning : Define
              spending limits, categorize expenses, and get notified when you're
              nearing your budget goals. No more overspending!
            </li>
          </ul>
        </div>
      </div>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="reviews-container">
          <div className="test">
            <p>
              "BudgetSync has transformed the way I manage my expenses. The
              insights help me stay on top of my budget!"
            </p>
            <p>~Amit Sharma, Senior Financial Analyst at HDFC Bank</p>
          </div>
          <div className="test">
            <p>
              "I love how simple and intuitive BudgetSync is! Budgeting has
              never been this easy."
            </p>
            <p>~Priya Verma, Chartered Accountant at Deloitte</p>
          </div>
          <div className="test">
            <p>
              "Secure, insightful, and user-friendly! BudgetSync keeps my
              finances in check effortlessly."
            </p>
            <p>~Rahul Mehta, Product Manager at Paytm</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Take Control of Your Finances?</h2>
        <p>
          Join thousands of smart budgeters who are saving more, spending
          wisely, and achieving financial freedom! Budgeting has never been this
          simple.
        </p>
        <Link to="/signup" className="cta-button">
          Sign Up Now
        </Link>
      </section>
      <FAQ />

      <section className="quick-links">
        <h2>Explore BudgetSync</h2>
        <div className="home-links">
          <Link to="/records" className="home-link">
            Manage Records
          </Link>
          <Link to="/analysis" className="home-link">
            Financial Analysis
          </Link>
          <Link to="/budgets" className="home-link">
            Set Budgets
          </Link>
          <Link to="/accounts" className="home-link">
            Manage Accounts
          </Link>
          <Link to="/profile" className="home-link">
            Your Profile
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
