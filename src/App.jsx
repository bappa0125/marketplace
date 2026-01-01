import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="4" fill="#00A19A"/>
                <text x="60" y="25" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">ENGIE</text>
              </svg>
            </div>
            <nav className="nav">
              <a href="#solutions">Solutions</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <button className="menu-toggle">☰</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Accelerating the transition to a carbon-neutral world</h1>
            <p className="hero-subtitle">Leading the way in renewable energy and sustainable solutions for a better tomorrow</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Solutions</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Our Solutions</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Renewable Energy</h3>
              <p>Solar, wind, and hydroelectric power solutions for sustainable energy generation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏭</div>
              <h3>Energy Efficiency</h3>
              <p>Optimize your energy consumption with smart technologies and innovative solutions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Comprehensive environmental solutions to reduce your carbon footprint</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovation</h3>
              <p>Cutting-edge technology and services to drive the energy transition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">170+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100,000+</div>
              <div className="stat-label">Employees</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">€60B+</div>
              <div className="stat-label">Annual Revenue</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start your energy transition?</h2>
            <p>Join thousands of businesses already working with us to create a sustainable future</p>
            <button className="btn btn-primary btn-large">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#investors">Investors</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#renewable">Renewable Energy</a></li>
                <li><a href="#efficiency">Energy Efficiency</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#innovation">Innovation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#youtube">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Marketplace. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
