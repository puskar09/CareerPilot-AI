const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <a href="#hero" className="navbar-logo" aria-label="CareerPilot AI home">
        <div className="navbar-logo-icon" aria-hidden="true">CP</div>
        <span className="navbar-logo-text">
          Career<span>Pilot</span>
        </span>
        <span className="navbar-badge">AI</span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <a
          href="#predict"
          className="btn btn-secondary"
          style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
          id="nav-predict-btn"
        >
          Try Predictor
        </a>
        <a
          href="#predict"
          className="btn btn-primary"
          style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
          id="nav-cta-btn"
        >
          Get Started →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
