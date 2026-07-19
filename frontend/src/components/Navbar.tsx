import { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when viewport widens past md breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setMenuOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        {/* ── Logo ───────────────────────────────────────────── */}
        <a href="#hero" className="navbar-logo" aria-label="CareerPilot AI home" onClick={close}>
          <div className="navbar-logo-icon" aria-hidden="true">CP</div>
          <span className="navbar-logo-text">
            Career<span>Pilot</span>
          </span>
          <span className="navbar-badge">AI</span>
        </a>

        {/* ── Desktop CTAs (hidden below md) ─────────────────── */}
        <div className="navbar-desktop-actions">
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

        {/* ── Hamburger (visible below md) ───────────────────── */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          id="hamburger-btn"
        >
          {/* Three-bar / X toggle */}
          <span className={`ham-bar ham-bar-top${menuOpen ? ' open' : ''}`} />
          <span className={`ham-bar ham-bar-mid${menuOpen ? ' open' : ''}`} />
          <span className={`ham-bar ham-bar-bot${menuOpen ? ' open' : ''}`} />
        </button>
      </nav>

      {/* ── Mobile Dropdown Menu ──────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' mobile-menu-open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <a
            href="#hero"
            className="mobile-menu-link"
            onClick={close}
            id="mobile-nav-home"
          >
            <span aria-hidden="true">🏠</span> Home
          </a>
          <a
            href="#features"
            className="mobile-menu-link"
            onClick={close}
            id="mobile-nav-features"
          >
            <span aria-hidden="true">✨</span> Features
          </a>
          <div className="mobile-menu-divider" />
          <a
            href="#predict"
            className="btn btn-secondary mobile-menu-cta"
            onClick={close}
            id="mobile-nav-try"
          >
            Try Predictor
          </a>
          <a
            href="#predict"
            className="btn btn-primary mobile-menu-cta"
            onClick={close}
            id="mobile-nav-start"
          >
            🎯 Get Started
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={close}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
