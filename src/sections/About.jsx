import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader title={t.about.title} subtitle={t.about.subtitle} stampText="概要" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

          <div
            className="hover-box"
            style={{
              backgroundColor: 'var(--bg-card)',
              padding: '2rem',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--accent-crimson)',
              transition: 'all 0.3s ease'
            }}
          >
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '1rem',
              color: 'var(--accent-crimson)',
              fontFamily: 'var(--font-mono)'
            }}>
              // {t.about.objectiveTitle}
            </h3>
            <p style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
              {t.about.text}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.about.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="hover-box"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  padding: '1.2rem 1.5rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{metric.label}</span>
                <span className="mono" style={{ fontWeight: '700', color: 'var(--accent-crimson)', fontSize: '0.95rem' }}>
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .hover-box:hover {
          transform: translateY(-3px) scale(1.01);
          box-shadow: 0 8px 24px var(--accent-crimson-glow);
          border-color: var(--accent-crimson) !important;
        }
      `}</style>
    </section>
  );
};
