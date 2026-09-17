import React from 'react';

export const JapaneseStamp = ({ text = "データ" }) => {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid var(--accent-crimson)',
      color: 'var(--accent-crimson)',
      padding: '2px 6px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '1px',
      borderRadius: '2px',
      backgroundColor: 'var(--accent-seal)',
      userSelect: 'none'
    }}>
      {text}
    </div>
  );
};