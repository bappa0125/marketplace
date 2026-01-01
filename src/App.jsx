import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="white">Middlewire</text>
              </svg>
            </div>
            <nav className="nav">
              <a href="#solutions">Solutions</a>
              <a href="#services">Services</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#support">Support</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="header-actions">
              <a href="#login" className="login-link">Log in</a>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="floating-elements">
          <div className="floating-element floating-1"></div>
          <div className="floating-element floating-2"></div>
          <div className="floating-element floating-3"></div>
        </div>
        <div className="container">
          <div className="hero-content animate-fade-in">
            <div className="hero-badge animate-slide-up">
              <span>Enterprise Ready:</span> 24/7 Support & DevSecOps Services
            </div>
            <h1 className="hero-title animate-fade-in-delay">
              <span className="gradient-text">Transform. Integrate. Scale.</span>
            </h1>
            <p className="hero-subtitle animate-fade-in-delay-2">
              Complete middleware solutions with real-time data streaming, enterprise integrations,
              and end-to-end DevSecOps services for modern businesses.
            </p>
            <div className="hero-buttons animate-fade-in-delay-3">
              <button className="btn btn-primary btn-large">Get Started</button>
              <button className="btn btn-secondary btn-large">Schedule Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item animate-scale-in">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support</div>
              </div>
              <div className="stat-item animate-scale-in">
                <div className="stat-value">100%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="stat-item animate-scale-in">
                <div className="stat-value">Enterprise</div>
                <div className="stat-label">Grade Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="capabilities" className="features">
        <div className="container">
          <div className="section-header animate-fade-in">
            <h2 className="section-title">Our Capabilities</h2>
            <p className="section-subtitle">Complete middleware solutions for enterprise data and integration needs</p>
          </div>
          <div className="features-grid">
            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon kafka-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="2" fill="currentColor"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  <circle cx="12" cy="17" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3>Real-Time Data Streaming</h3>
              <p>Apache Kafka-powered real-time data ingestion and transformation pipelines for high-throughput, low-latency data processing.</p>
            </div>

            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon sap-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 8H16M8 12H16M8 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <h3>SAP Billing Transformation</h3>
              <p>WebMethod and Talend-powered SAP billing system transformation for seamless enterprise integration and data flow.</p>
            </div>

            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon dataiku-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.2"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8L12 10L16 8M8 12L12 14L16 12M8 16L12 18L16 16" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>DataIKU Business Modeling</h3>
              <p>Self-service data modeling with DataIKU, empowering business users to create and deploy data science projects without extensive technical expertise.</p>
            </div>

            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon devsecops-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                  <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                </svg>
              </div>
              <h3>End-to-End DevSecOps</h3>
              <p>Complete DevSecOps services from development to deployment, including CI/CD pipelines, security scanning, and automated testing.</p>
            </div>

            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon support-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="18" r="1" fill="currentColor"/>
                  <path d="M8 8L16 8M8 12L16 12" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                </svg>
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support with dedicated teams ensuring your systems run smoothly with proactive monitoring and instant response.</p>
            </div>

            <div className="feature-card animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="feature-icon integration-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8L16 12L12 16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Enterprise Integration</h3>
              <p>Seamless integration services connecting your legacy systems with modern cloud platforms and microservices architecture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <div className="section-header animate-fade-in">
            <h2 className="section-title">Technology Stack</h2>
            <p className="section-subtitle">Built with industry-leading tools and platforms</p>
          </div>
          <div className="tech-grid">
            <div className="tech-item animate-bounce-in">Apache Kafka</div>
            <div className="tech-item animate-bounce-in" style={{ animationDelay: '0.1s' }}>WebMethod</div>
            <div className="tech-item animate-bounce-in" style={{ animationDelay: '0.2s' }}>Talend</div>
            <div className="tech-item animate-bounce-in" style={{ animationDelay: '0.3s' }}>DataIKU</div>
            <div className="tech-item animate-bounce-in" style={{ animationDelay: '0.4s' }}>DevSecOps</div>
            <div className="tech-item animate-bounce-in" style={{ animationDelay: '0.5s' }}>CI/CD</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content animate-fade-in">
            <h2>Ready to transform your middleware infrastructure?</h2>
            <p>Join leading enterprises leveraging our comprehensive middleware solutions</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Get Started</button>
              <button className="btn btn-secondary btn-large">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">Middlewire</text>
                </svg>
              </div>
              <p className="footer-tagline">Transform. Integrate. Scale.</p>
            </div>
            <div className="footer-section">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#kafka">Real-Time Streaming</a></li>
                <li><a href="#sap">SAP Integration</a></li>
                <li><a href="#dataiku">Data Modeling</a></li>
                <li><a href="#devsecops">DevSecOps</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#support">24/7 Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#guides">Guides</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#licenses">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Middlewire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
