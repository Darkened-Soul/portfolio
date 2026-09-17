import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-subtle)',
      backdropFilter: 'blur(8px)',
      opacity: 0.95
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Updated Logo Name */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '14px',
            height: '14px',
            backgroundColor: 'var(--accent-crimson)',
            transform: 'rotate(45deg)',
            borderRadius: '2px'
          }} />
          <span className="mono" style={{ fontWeight: '700', letterSpacing: '0.5px', fontSize: '1.2rem' }}>
            IceBear<span style={{ color: 'var(--accent-crimson)' }}>.Dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-mono)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-crimson)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="hover-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0.9rem',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.25s ease'
            }}
          >
            <Globe size={14} color="var(--accent-crimson)" />
            {/* Shortened language label: EN / AR */}
            <span>{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="hover-card"
            style={{
              padding: '0.50rem',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={16} color="#d4af37" /> : <Moon size={16} color="var(--accent-crimson)" />}
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            style={{ padding: '0.4rem' }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-crimson)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                color: 'var(--text-main)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .hover-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--accent-crimson-glow);
          border-color: var(--accent-crimson) !important;
        }
      `}</style>
    </header>
  );
};
