import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader title={t.education.title} subtitle={t.education.subtitle} stampText="学歴" />

        <div
          className="education-card"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            position: 'relative',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', flexWrap: 'wrap' }}>
            <div style={{
              padding: '0.8rem',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-crimson)',
              borderRadius: 'var(--radius-md)'
            }}>
              <GraduationCap size={28} color="var(--accent-crimson)" />
            </div>

            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.2rem' }}>
                {t.education.degree}
              </h3>
              <div style={{ color: 'var(--accent-crimson)', fontFamily: 'var(--font-mono)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                {t.education.institution}
              </div>
              <div className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
                [{t.education.status}]
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {t.education.details}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .education-card:hover {
          transform: translateY(-3px) scale(1.01);
          box-shadow: 0 8px 24px var(--accent-crimson-glow);
          border-color: var(--accent-crimson) !important;
        }
      `}</style>
    </section>
  );
};
