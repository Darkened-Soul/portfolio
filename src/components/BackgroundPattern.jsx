import React from 'react';

export const BackgroundPattern = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
      opacity: 0.8
    }}>
      {/* Structural Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
          linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />

      {/* Decorative Technical Borders */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        right: '20px',
        bottom: '20px',
        border: '1px solid var(--border-subtle)',
        pointerEvents: 'none'
      }} />

      {/* Crimson Accent Verticals */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '5%',
        width: '1px',
        backgroundColor: 'var(--border-crimson)',
        opacity: 0.3
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: '5%',
        width: '1px',
        backgroundColor: 'var(--border-crimson)',
        opacity: 0.3
      }} />
    </div>
  );
};