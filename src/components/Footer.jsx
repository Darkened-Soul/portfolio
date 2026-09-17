import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '2rem 1.5rem',
      backgroundColor: 'var(--bg-primary)',
      fontSize: '0.8rem',
      color: 'var(--text-dim)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <div className="mono">
          © {new Date().getFullYear()} {portfolioData.personalInfo.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
