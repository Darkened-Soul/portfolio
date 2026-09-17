import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { Mail, Linkedin } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();
  const { personalInfo } = portfolioData;

  const contactLinks = [
    {
      label: t.contact.labels.email,
      href: personalInfo.email.includes('@') ? `mailto:${personalInfo.email}` : '#',
      icon: <Mail size={22} />
    },
    {
      label: t.contact.labels.linkedin,
      href: personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`,
      icon: <Linkedin size={22} />
    }
  ];

  return (
    <section id="contact" style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} stampText="連絡" />

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '2rem 0'
        }}>
          {contactLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              aria-label={item.label}
              className="contact-icon-box"
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-crimson)',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-icon-box:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 24px var(--accent-crimson-glow);
          border-color: var(--accent-crimson) !important;
          color: var(--accent-crimson-bright) !important;
          background-color: var(--bg-tertiary);
        }
      `}</style>
    </section>
  );
};
