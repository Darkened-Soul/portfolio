import React from 'react';

export const SectionHeader = ({ title, subtitle, stampText = "情報" }) => {
  return (
    <div style={{
      marginBottom: '2.5rem',
      position: 'relative',
      borderBottom: '1px solid var(--border-subtle)',
      paddingBottom: '1rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent-crimson)',
          fontSize: '0.8rem',
          letterSpacing: '1px'
        }}>
          {subtitle}
        </span>
        <span style={{
          display: 'inline-block',
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--accent-crimson)'
        }} />
      </div>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '700',
        letterSpacing: '-0.5px',
        color: 'var(--text-main)'
      }}>
        {title}
      </h2>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-dim)'
        }}>
          [{stampText}]
        </span>
      </div>
    </div>
  );
};