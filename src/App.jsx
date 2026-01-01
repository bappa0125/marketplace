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
              <svg width="115" height="20" viewBox="0 0 115 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.88235 0H0V20H5.88235V12.9412H11.7647V20H17.6471V0H11.7647V7.05882H5.88235V0Z" fill="white"/>
                <path d="M20.5882 0V20H26.4706V12.9412H32.3529C36.7176 12.9412 40.2353 9.42353 40.2353 5.05882C40.2353 0.694118 36.7176 0 32.3529 0H20.5882ZM26.4706 5.88235H32.3529C33.7647 5.88235 34.4118 6.52941 34.4118 7.94118C34.4118 9.35294 33.7647 10 32.3529 10H26.4706V5.88235Z" fill="white"/>
                <path d="M44.1176 0V20H50V12.9412H52.9412L58.8235 20H65.8824L58.2353 11.7647C61.1765 10.5882 63.5294 7.64706 63.5294 4.11765C63.5294 1.17647 61.1765 0 57.6471 0H44.1176ZM50 5.88235H57.6471C58.8235 5.88235 59.4118 6.47059 59.4118 7.64706C59.4118 8.82353 58.8235 9.41176 57.6471 9.41176H50V5.88235Z" fill="white"/>
                <path d="M69.4118 0V20H75.2941V0H69.4118Z" fill="white"/>
                <path d="M79.4118 0V20H93.5294V14.1176H85.2941V0H79.4118Z" fill="white"/>
                <path d="M97.6471 0V20H103.529V12.9412H110.588V20H116.471V0H97.6471ZM103.529 7.05882V5.88235H110.588V7.05882H103.529Z" fill="white"/>
              </svg>
            </div>
            <nav className="nav">
              <a href="#features">Features</a>
              <a href="#solutions">Solutions</a>
              <a href="#docs">Docs</a>
              <a href="#templates">Templates</a>
              <a href="#pricing">Pricing</a>
            </nav>
            <div className="header-actions">
              <a href="#login" className="login-link">Log in</a>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>New:</span> Platform updates and improvements
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Develop. Preview. Ship.</span>
            </h1>
            <p className="hero-subtitle">
              Vercel is the platform for frontend developers, providing the speed and reliability
              innovators need to create at the moment of inspiration.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large">Start Deploying</button>
              <button className="btn btn-secondary btn-large">Get a Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">5M+</div>
                <div className="stat-label">Developers</div>
              </div>
              <div className="stat">
                <div className="stat-value">100B+</div>
                <div className="stat-label">Requests/Month</div>
              </div>
              <div className="stat">
                <div className="stat-value">99.99%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everything you need to ship faster</h2>
            <p className="section-subtitle">Build, scale, and ship with the best developer experience</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Deploy instantly, scale automatically. Our global Edge Network ensures your sites load in milliseconds.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure by Default</h3>
              <p>SSL certificates, DDoS protection, and enterprise-grade security built into every deployment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Zero Configuration</h3>
              <p>Automatic deployments, instant cache invalidation, and Git integration out of the box.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Global Edge Network</h3>
              <p>Deploy to 100+ edge locations worldwide for the fastest possible performance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time Analytics</h3>
              <p>Monitor performance, track deployments, and optimize with comprehensive analytics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Developer Tools</h3>
              <p>CLI, API, and integrations with your favorite tools. Work the way you want.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="code-preview">
        <div className="container">
          <div className="code-section">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="code-title">vercel.json</div>
            </div>
            <div className="code-content">
              <pre><code>{`{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start deploying?</h2>
            <p>Join millions of developers shipping faster with Vercel</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Start Deploying</button>
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
                <svg width="115" height="20" viewBox="0 0 115 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.88235 0H0V20H5.88235V12.9412H11.7647V20H17.6471V0H11.7647V7.05882H5.88235V0Z" fill="currentColor"/>
                  <path d="M20.5882 0V20H26.4706V12.9412H32.3529C36.7176 12.9412 40.2353 9.42353 40.2353 5.05882C40.2353 0.694118 36.7176 0 32.3529 0H20.5882ZM26.4706 5.88235H32.3529C33.7647 5.88235 34.4118 6.52941 34.4118 7.94118C34.4118 9.35294 33.7647 10 32.3529 10H26.4706V5.88235Z" fill="currentColor"/>
                  <path d="M44.1176 0V20H50V12.9412H52.9412L58.8235 20H65.8824L58.2353 11.7647C61.1765 10.5882 63.5294 7.64706 63.5294 4.11765C63.5294 1.17647 61.1765 0 57.6471 0H44.1176ZM50 5.88235H57.6471C58.8235 5.88235 59.4118 6.47059 59.4118 7.64706C59.4118 8.82353 58.8235 9.41176 57.6471 9.41176H50V5.88235Z" fill="currentColor"/>
                  <path d="M69.4118 0V20H75.2941V0H69.4118Z" fill="currentColor"/>
                  <path d="M79.4118 0V20H93.5294V14.1176H85.2941V0H79.4118Z" fill="currentColor"/>
                  <path d="M97.6471 0V20H103.529V12.9412H110.588V20H116.471V0H97.6471ZM103.529 7.05882V5.88235H110.588V7.05882H103.529Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="footer-tagline">Develop. Preview. Ship.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#changelog">Changelog</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#guides">Guides</a></li>
                <li><a href="#templates">Templates</a></li>
                <li><a href="#support">Support</a></li>
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
            <p>&copy; 2024 Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
