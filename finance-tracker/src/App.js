import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Finance Tracker</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login">Login/Register</a></li>
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
          <img src="/images/about.png" alt="About the app" />
        </section>

        <section id="features" className="content-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <img src="/images/feature1.png" alt="Feature 1" />
              <h3>Track Expenses</h3>
              <p>Keep a detailed record of your spending habits.</p>
            </div>
            <div className="feature-item">
              <img src="/images/feature2.png" alt="Feature 2" />
              <h3>Set Budgets</h3>
              <p>Plan your spending and avoid overspending.</p>
            </div>
            <div className="feature-item">
              <img src="/images/feature3.png" alt="Feature 3" />
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
    </div>
  );
}

export default App;
