import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from '../components/SectionHeader';
import { Code2, Database, Cloud, Cpu, Terminal, BookOpen, Layers } from 'lucide-react';

export const Skills = () => {
  const { t } = useLanguage();
  const { skillsList } = portfolioData;

  const skillGroups = [
    { title: t.skills.categories.programming, icon: <Code2 size={18} />, list: skillsList.programming },
    { title: t.skills.categories.dataEngineering, icon: <Layers size={18} />, list: skillsList.dataEngineering },
    { title: t.skills.categories.databases, icon: <Database size={18} />, list: skillsList.databases },
    { title: t.skills.categories.cloud, icon: <Cloud size={18} />, list: skillsList.cloud },
    { title: t.skills.categories.ai, icon: <Cpu size={18} />, list: skillsList.ai },
    { title: t.skills.categories.tools, icon: <Terminal size={18} />, list: skillsList.tools },
    { title: t.skills.categories.coursework, icon: <BookOpen size={18} />, list: skillsList.coursework }
  ];

  return (
    <section id="skills" style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionHeader title={t.skills.title} subtitle={t.skills.subtitle} stampText="技術" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="skill-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '0.6rem',
                color: 'var(--accent-crimson)'
              }}>
                {group.icon}
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  {group.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.list.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="skill-chip mono"
                    style={{
                      fontSize: '0.78rem',
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-main)',
                      padding: '0.4rem 0.7rem',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 8px 24px var(--accent-crimson-glow);
          border-color: var(--accent-crimson) !important;
        }
        .skill-chip:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px var(--accent-crimson-glow);
          border-color: var(--accent-crimson) !important;
          background-color: var(--bg-card);
          color: var(--accent-crimson-bright);
        }
      `}</style>
    </section>
  );
};
