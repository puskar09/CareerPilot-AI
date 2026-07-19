import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';
import ErrorBanner from './components/ErrorBanner';
import Footer from './components/Footer';
import type { PredictResponse } from './types';

const App = () => {
  const [result, setResult] = useState<PredictResponse | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to result / error when they appear
  useEffect(() => {
    if ((result || error) && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result, error]);

  return (
    <>
      {/* Background ambient orbs */}
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="bg-orb bg-orb-2" aria-hidden="true" />
      <div className="bg-orb bg-orb-3" aria-hidden="true" />

      {/* Skip to content */}
      <a
        href="#predict"
        style={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 999,
          padding: '0.75rem 1.5rem',
          background: 'var(--blue-500)',
          color: '#fff',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: 600,
        }}
        onFocus={(e) => (e.currentTarget.style.left = '1rem')}
        onBlur={(e) => (e.currentTarget.style.left = '-9999px')}
      >
        Skip to predictor
      </a>

      <Navbar />
      <HeroSection />

      {/* ── Prediction Section ────────────────────────────────── */}
      <section
        id="predict"
        className="section"
        aria-labelledby="predict-heading"
        style={{ paddingTop: '5rem' }}
      >
        <div className="section-container">
          {/* Section header */}
          <header className="section-header">
            <p className="section-label">AI Predictor</p>
            <h2 className="section-title" id="predict-heading">
              Enter Your Academic Profile
            </h2>
            <p className="section-desc">
              Fill in your academic and professional details below. All fields are required.
              The model will analyse your profile and return an instant prediction.
            </p>
          </header>

          {/* Form card */}
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            {/* Card header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                marginBottom: '2rem',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  width: 40, height: 40,
                  background: 'rgba(66, 153, 225, 0.12)',
                  border: '1px solid rgba(66, 153, 225, 0.25)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                }}
                aria-hidden="true"
              >
                📝
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.125rem' }}>
                  Academic Profile
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  12 inputs · All fields required · Processed locally
                </p>
              </div>

              {isLoading && (
                <div
                  style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--blue-400)', fontSize: '0.875rem', fontWeight: 500 }}
                  aria-live="polite"
                  role="status"
                >
                  <span className="spinner" style={{ borderColor: 'rgba(99,179,237,0.3)', borderTopColor: 'var(--blue-400)' }} />
                  Analysing…
                </div>
              )}
            </div>

            <PredictionForm
              onResult={setResult}
              onError={setError}
              onLoading={setIsLoading}
            />
          </div>

          {/* Result / Error output */}
          <div ref={resultRef}>
            {error && <ErrorBanner message={error} />}
            {result && !error && <ResultCard result={result} />}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
