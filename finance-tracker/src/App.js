import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import about from "./assets/about.png";
import Register from "./components/Register";
import feature1 from "./assets/feature1.jpg";
import feature2 from "./assets/feature2.jpg";
import feature3 from "./assets/feature3.jpg";
import "./App.css";

function Home() {
  /* eslint-disable jsx-a11y/anchor-is-valid */

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Finance Tracker</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link to="/login">Login/Register</Link></li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Take Control of Your Finances</h1>
          <p>Track your expenses, set budgets, and achieve your financial goals with ease.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="main-content">
        <section id="about" className="content-section">
          <h2>About Our App</h2>
          <p>Our finance tracker helps you stay on top of your financial health by tracking income, expenses, and budgets in real-time.</p>
          <img src={about} alt="about us" width={500}/>
        </section>

        <section id="features" className="content-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-item">
            <img src={feature1} alt="Feature 1" />
              <h3>Track Expenses</h3>
              <p>Keep a detailed record of your spending habits.</p>
            </div>
            <div className="feature-item">
            <img src={feature2} alt="Feature 2" />
              <h3>Set Budgets</h3>
              <p>Plan your spending and avoid overspending.</p>
            </div>
            <div className="feature-item">
            <img src={feature3} alt="Feature 3" />
              <h3>Generate Reports</h3>
              <p>Visualize your financial data with charts and graphs.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="content-section">
          <h2>Affordable Pricing</h2>
          <p>Choose a plan that fits your needs and budget.</p>
          <button className="cta-button">View Plans</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <div className="social-media">
          <a href="#"><img src="/icons/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/icons/twitter.png" alt="Twitter" /></a>
          <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
        </div>
        <p>Contact us: support@financetracker.com</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
<Route path="/transaction-form" element={<TransactionForm />} />
<Route path="/transaction-list" element={<TransactionList />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
