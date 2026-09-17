import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader title={t.experience.title} subtitle={t.experience.subtitle} stampText="経歴" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {t.experience.items.map((item, idx) => (
            <div
              key={idx}
              className="experience-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1rem'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Briefcase size={16} color="var(--accent-crimson)" />
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700' }}>{item.role}</h3>
                  </div>
                  <div style={{ color: 'var(--accent-crimson)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
                    {item.organization}
                  </div>
                </div>

                <span className="mono" style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  padding: '0.3rem 0.8rem',
                  border: '1px solid var(--border-crimson)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}>
                  {item.period}
                </span>
              </div>

              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {item.points.map((pt, pIdx) => (
                  <li
                    key={pIdx}
                    style={{
                      position: 'relative',
                      paddingLeft: '1.5rem',
                      paddingRight: '1.5rem',
                      marginBottom: '0.8rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.7'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.6rem',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-crimson)'
                    }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-card:hover {
          transform: translateY(-3px) scale(1.01);
          box-shadow: 0 8px 24px var(--accent-crimson-glow);
          border-color: var(--accent-crimson) !important;
        }
      `}</style>
    </section>
  );
};
