const features = [
  {
    icon: '🧠',
    title: 'ML-Powered Prediction',
    desc: 'Trained on real campus placement data to deliver accurate placement likelihood scores.',
  },
  {
    icon: '⚡',
    title: 'Instant Results',
    desc: 'Sub-second inference. Submit your profile and get your result in the blink of an eye.',
  },
  {
    icon: '📊',
    title: 'Confidence Scoring',
    desc: 'Every prediction comes with a confidence percentage so you know exactly how strong the signal is.',
  },
  {
    icon: '🎯',
    title: 'Actionable Insights',
    desc: 'Tailored messages to help you understand your result and take informed next steps.',
  },
  {
    icon: '🔒',
    title: 'Private & Secure',
    desc: 'Your data is never stored. Predictions run in-memory and are discarded immediately.',
  },
  {
    icon: '🎓',
    title: 'Student-First Design',
    desc: 'Built with final-year students in mind — simple inputs, clear outputs, zero fluff.',
  },
];

const HeroSection = () => {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      {/* Eyebrow */}
      <div className="hero-eyebrow" role="status">
        <span className="hero-eyebrow-dot" aria-hidden="true" />
        Powered by Machine Learning
      </div>

      {/* Heading */}
      <h1 className="hero-title" id="hero-heading">
        Predict Your{' '}
        <span className="hero-title-gradient">Campus Placement</span>
        {' '}Outcome Instantly
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        Enter your academic profile and get an AI-powered prediction of your
        placement likelihood — complete with a confidence score and personalised insight.
      </p>

      {/* Stats */}
      <div className="stats-row" role="list" aria-label="Platform statistics">
        <div className="stat-item" role="listitem">
          <div className="stat-number">95%+</div>
          <div className="stat-label">Model Accuracy</div>
        </div>
        <div className="stat-divider" aria-hidden="true" />
        <div className="stat-item" role="listitem">
          <div className="stat-number">12</div>
          <div className="stat-label">Input Features</div>
        </div>
        <div className="stat-divider" aria-hidden="true" />
        <div className="stat-item" role="listitem">
          <div className="stat-number">&lt;1s</div>
          <div className="stat-label">Response Time</div>
        </div>
        <div className="stat-divider" aria-hidden="true" />
        <div className="stat-item" role="listitem">
          <div className="stat-number">Free</div>
          <div className="stat-label">Always</div>
        </div>
      </div>

      {/* CTA */}
      <div className="hero-cta-group">
        <a href="#predict" className="btn btn-primary btn-lg" id="hero-cta-primary">
          🚀 Predict My Placement
        </a>
        <a href="#features" className="btn btn-secondary btn-lg" id="hero-cta-secondary">
          Learn More
        </a>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll to explore</span>
        <div className="hero-scroll-line" />
      </div>

      {/* Features strip */}
      <div
        id="features"
        className="features-grid"
        style={{ marginTop: '6rem', width: '100%', maxWidth: '960px' }}
        aria-label="Platform features"
      >
        {features.map((f) => (
          <article key={f.title} className="glass-card feature-card">
            <div className="feature-icon" aria-hidden="true">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
