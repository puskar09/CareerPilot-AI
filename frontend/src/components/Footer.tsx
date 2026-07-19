const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <p>
        © {year}{' '}
        <strong style={{ color: 'var(--text-secondary)' }}>CareerPilot AI</strong>
        {' '}— Built with React, TypeScript & FastAPI.
        <br />
        <span style={{ marginTop: '0.375rem', display: 'inline-block' }}>
          ML predictions are for guidance only.{' '}
          <a href="#predict">Try the predictor ↑</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
