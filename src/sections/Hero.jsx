import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { JapaneseStamp } from '../components/JapaneseStamp';
import { ArrowDownRight, Terminal } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();
  const { personalInfo } = portfolioData;

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem', width: '100%' }}>

        {/* Status Tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'var(--bg-tertiary)',
          border: '1px solid var(--border-crimson)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.3rem 0.8rem',
          marginBottom: '1.5rem'
        }}>
          <Terminal size={14} color="var(--accent-crimson)" />
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {t.hero.systemStatus}
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <JapaneseStamp text="開発者" />
              <span className="mono" style={{ color: 'var(--accent-crimson)', fontSize: '0.9rem' }}>
                {t.hero.role}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '800',
              lineHeight: 1.1,
              letterSpacing: '-1px',
              margin: '0.5rem 0 1.5rem 0',
              color: 'var(--text-main)'
            }}>
              {personalInfo.name}
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              maxWidth: '650px',
              marginBottom: '2.5rem',
              lineHeight: '1.7'
            }}>
              {t.hero.tagline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#experience"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--accent-crimson)',
                  color: '#ffffff',
                  padding: '0.8rem 1.8rem',
                  fontWeight: '600',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--accent-crimson-bright)',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>{t.hero.viewExperience}</span>
                <ArrowDownRight size={16} />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'transparent',
                  color: 'var(--text-main)',
                  padding: '0.8rem 1.8rem',
                  fontWeight: '600',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-strong)',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>{t.hero.contactMe}</span>
              </a>
            </div>
          </div>

          {/* Primary Diamond Visual Container (No Abstract Box/Text) */}
          <div className="diamond-container" style={{
            width: '220px',
            height: '220px',
            border: '2px solid var(--border-crimson)',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--bg-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.35s ease',
            cursor: 'pointer',
            margin: '0 auto'
          }}>
            <div className="diamond-inner" style={{
              width: '100px',
              height: '100px',
              backgroundColor: 'var(--accent-crimson)',
              border: '2px solid var(--accent-crimson-bright)',
              borderRadius: '8px',
              transform: 'rotate(45deg)',
              transition: 'all 0.35s ease',
              boxShadow: '0 0 30px var(--accent-crimson-glow)'
            }} />
          </div>
        </div>

      </div>

      <style>{`
        .btn-primary:hover, .btn-secondary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 24px var(--accent-crimson-glow);
          border-color: var(--accent-crimson) !important;
        }
        .diamond-container:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 30px var(--accent-crimson-glow);
          border-color: var(--accent-crimson-bright) !important;
        }
        .diamond-container:hover .diamond-inner {
          transform: rotate(225deg) scale(1.1);
        }
      `}</style>
    </section>
  );
};
