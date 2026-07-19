interface ErrorBannerProps {
  message: string;
}

const ErrorBanner = ({ message }: ErrorBannerProps) => {
  if (!message) return null;

  return (
    <div
      className="animate-fade-up"
      role="alert"
      aria-live="assertive"
      style={{
        padding: '1rem 1.25rem',
        background: 'rgba(252, 129, 129, 0.08)',
        border: '1px solid rgba(252, 129, 129, 0.25)',
        borderRadius: '0.875rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        marginTop: '1.5rem',
      }}
    >
      <span style={{ fontSize: '1.125rem', flexShrink: 0, marginTop: '1px' }} aria-hidden="true">
        ⚠️
      </span>
      <div>
        <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#fc8181', marginBottom: '0.25rem' }}>
          Something went wrong
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default ErrorBanner;
