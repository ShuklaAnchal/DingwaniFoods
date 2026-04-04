import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Tiny helper: wires up one scroll-reveal ref ── */
const Section = ({ children, direction = '', delay = 0, style = {} }) => {
  const [ref, visible] = useScrollReveal();
  const cls = ['reveal', direction ? `reveal-${direction}` : '', visible ? 'visible' : ''].join(' ');
  return (
    <div ref={ref} className={cls} style={{ transitionDelay: `${delay}s`, ...style }}>
      {children}
    </div>
  );
};

const About = () => {
  const values = [
    { icon: '🔁', title: 'Consistency over hype', desc: 'We deliver the same quality every time — no shortcuts, no compromises.' },
    { icon: '⚖️', title: 'Value with integrity', desc: 'Better taste and better quality should never feel like a luxury.' },
    { icon: '🌟', title: 'Pride in the ordinary', desc: 'We elevate everyday snacking by caring about details others overlook.' },
    { icon: '📈', title: 'Discipline in growth', desc: 'We scale responsibly, protecting our promise at every step.' },
    { icon: '🌱', title: 'Respect for our ecosystem', desc: 'From suppliers to consumers — every relationship earns our respect.' },
  ];

  /* Individual reveal refs for heading underlines */
  const [heroRef, heroVisible] = useScrollReveal();
  const [beliefRef, beliefVisible] = useScrollReveal();
  const [storyRef, storyVisible] = useScrollReveal();
  const [vmRef, vmVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();

  return (
    <div className="animate-fade-in">

      {/* ── Hero ── */}
      <section style={s.hero}>
        <div style={s.heroOverlay} />
        <div className="container" style={s.heroContent}>
          <div ref={heroRef} className={`reveal ${heroVisible ? 'visible' : ''}`}>
            <span style={s.pill} className="glow-badge">WHO WE ARE</span>
            <h1 style={s.heroHeading}>
              Quietly raising everyday<br />
              <span className={`heading-underline ${heroVisible ? 'visible' : ''}`}>snacking standards</span>
            </h1>
            <p style={s.heroSub}>Burst of Happiness in Every Bite</p>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section style={s.section}>
        <div className="container" style={s.twoCol}>
          <div ref={beliefRef} className={`reveal reveal-left col ${beliefVisible ? 'visible' : ''}`} style={s.col}>
            <span style={s.label}>OUR BELIEF</span>
            <h2 style={s.h2}>
              Consumers shouldn't have to choose between
              <span className={`heading-underline ${beliefVisible ? 'visible' : ''}`}> price and pride.</span>
            </h2>
          </div>
          <Section direction="right" style={s.col}>
            <p style={s.body}>
              Dingwani Foods was founded on a simple belief: too many everyday snacks ask people to compromise — on taste, quality, or presentation. We decided to change that.
            </p>
            <p style={{ ...s.body, marginTop: '16px' }}>
              From ingredient selection and recipes to packaging and presentation, we focus on details that matter when the pack is opened — and when the consumer comes back for more.
            </p>
            <p style={{ ...s.body, marginTop: '16px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Every bite is designed to deliver joy, taste, and satisfaction — a true burst of happiness.
            </p>
          </Section>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section style={{ ...s.section, backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <Section>
              <span style={{ ...s.pill, backgroundColor: 'rgba(255,204,0,0.15)', color: 'var(--color-secondary)' }}>OUR STORY</span>
            </Section>
          </div>
          <div ref={storyRef} style={s.storyGrid}>
            <div className={`reveal reveal-left ${storyVisible ? 'visible' : ''}`} style={s.storyCard}>
              <p style={s.storyQuote}>"We didn't set out to be the loudest brand on the shelf."</p>
              <p style={s.storyText}>We set out to be the most reliably satisfying.</p>
            </div>
            <div className={`reveal reveal-right ${storyVisible ? 'visible' : ''}`} style={{ ...s.col, color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: 1.9 }}>
              <p>From ingredient selection and recipes to packaging and presentation, we focus on details that matter when the pack is opened — and when the consumer comes back for more.</p>
              <p style={{ marginTop: '24px' }}>Every bite is designed to deliver joy, taste, and satisfaction — a true burst of happiness.</p>
              <p style={{ marginTop: '24px' }}>And through <strong style={{ color: 'var(--color-secondary)' }}>Dingwani Connect</strong>, we ensure this promise is delivered to every market, every store.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section style={s.section}>
        <div ref={vmRef} className="container" style={s.vmGrid}>
          {/* Vision */}
          <div className={`reveal reveal-left reveal-scale card-pop ${vmVisible ? 'visible' : ''}`} style={s.vmCard}>
            <span className="icon-wobble" style={s.vmIcon}>🔭</span>
            <span style={s.label}>VISION</span>
            <h3 style={s.vmTitle}>To quietly raise the standard of everyday snacking in India</h3>
            <p style={s.body}>— by proving that better taste, better quality, and better presentation don't have to be a luxury.</p>
          </div>
          {/* Mission */}
          <div className={`reveal reveal-right reveal-scale card-pop ${vmVisible ? 'visible' : ''}`} style={{ ...s.vmCard, borderColor: 'var(--color-primary)', backgroundColor: 'var(--color-primary)', color: 'white' }} >
            <span className="icon-wobble" style={s.vmIcon}>🎯</span>
            <span style={{ ...s.label, backgroundColor: 'rgba(255,204,0,0.2)', color: 'var(--color-secondary)' }}>MISSION</span>
            <h3 style={{ ...s.vmTitle, color: 'white' }}>Thoughtfully crafted snacks. Superior taste. Reliable quality.</h3>
            <ul style={s.missionList}>
              {[
                'Choosing ingredients and recipes with care',
                'Maintaining consistency across every batch and market',
                'Designing packaging that reflects the quality inside',
                'Building trust through honesty and discipline',
                'Focusing on long-term loyalty over short-term volume',
              ].map((item, i) => (
                <li key={i} style={s.missionItem}>
                  <span className="icon-hover" style={{ color: 'var(--color-secondary)', marginRight: '10px', fontWeight: 700 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section style={{ ...s.section, backgroundColor: '#f8f9ff' }}>
        <div className="container">
          <div ref={valuesRef} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className={`reveal ${valuesVisible ? 'visible' : ''}`}>
              <span style={s.label}>OUR VALUES</span>
              <h2 style={{ ...s.h2, textAlign: 'center', marginTop: '16px' }}>
                <span className={`heading-underline ${valuesVisible ? 'visible' : ''}`}>What guides every decision</span>
              </h2>
            </div>
          </div>
          <div style={s.valuesGrid}>
            {values.map((v, i) => {
              const staggerMap = ['reveal-stagger-1', 'reveal-stagger-2', 'reveal-stagger-3', 'reveal-stagger-4', 'reveal-stagger-5'];
              return (
                <div key={i} className={`reveal reveal-scale card-pop ${valuesVisible ? 'visible' : ''} ${staggerMap[i]}`} style={s.valueCard}>
                  <span className="icon-hover" style={s.valueIcon}>{v.icon}</span>
                  <h4 style={s.valueTitle}>{v.title}</h4>
                  <p style={s.valueDesc}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

const s = {
  hero: {
    backgroundColor: 'var(--color-primary)',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(135deg, #1c357f 0%, #0d1f50 100%)',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 70% 50%, rgba(255,204,0,0.08) 0%, transparent 70%)',
  },
  heroContent: {
    position: 'relative',
    textAlign: 'center',
    zIndex: 2,
    padding: '80px 24px',
  },
  pill: {
    display: 'inline-block',
    padding: '6px 16px',
    backgroundColor: 'rgba(255,204,0,0.15)',
    color: 'var(--color-secondary)',
    borderRadius: 'var(--radius-full)',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '24px',
  },
  heroHeading: {
    fontSize: '3.8rem',
    color: 'white',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: '16px',
  },
  heroSub: {
    fontSize: '1.4rem',
    color: 'rgba(255,204,0,0.85)',
    fontStyle: 'italic',
    fontWeight: 500,
  },
  section: {
    padding: '100px 0',
  },
  twoCol: {
    display: 'flex',
    gap: '80px',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  col: {
    flex: 1,
    minWidth: '280px',
  },
  label: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'var(--color-primary)',
    backgroundColor: 'rgba(28,53,127,0.08)',
    padding: '6px 14px',
    borderRadius: 'var(--radius-full)',
    marginBottom: '20px',
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: 'var(--color-primary)',
    lineHeight: 1.3,
  },
  body: {
    fontSize: '1.1rem',
    color: 'var(--color-text-light)',
    lineHeight: 1.9,
  },
  storyGrid: {
    display: 'flex',
    gap: '64px',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  storyCard: {
    flex: '1',
    minWidth: '280px',
    borderLeft: '4px solid var(--color-secondary)',
    paddingLeft: '32px',
  },
  storyQuote: {
    fontSize: '2rem',
    fontWeight: 800,
    color: 'white',
    lineHeight: 1.3,
    marginBottom: '16px',
    fontStyle: 'italic',
  },
  storyText: {
    fontSize: '1.2rem',
    color: 'var(--color-secondary)',
    fontWeight: 600,
  },
  vmGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '40px',
  },
  vmCard: {
    padding: '48px',
    borderRadius: 'var(--radius-lg)',
    border: '2px solid var(--color-secondary)',
    backgroundColor: '#fefce8',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '16px',
  },
  vmIcon: {
    fontSize: '2.5rem',
    display: 'inline-block',
  },
  vmTitle: {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: 'var(--color-primary)',
    lineHeight: 1.4,
  },
  missionList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '8px',
  },
  missionItem: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '1rem',
    lineHeight: 1.6,
    display: 'flex',
    alignItems: 'flex-start',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '28px',
  },
  valueCard: {
    backgroundColor: 'white',
    padding: '36px',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    borderTop: '4px solid var(--color-secondary)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  valueIcon: {
    fontSize: '2rem',
    cursor: 'default',
  },
  valueTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--color-primary)',
  },
  valueDesc: {
    fontSize: '0.95rem',
    color: 'var(--color-text-light)',
    lineHeight: 1.7,
  },
};

export default About;
