import React from 'react';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Heart, Play, ShieldCheck, Factory, Flame, Award ,BadgeIndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { products } from '../data/products';

const Home = () => {
  // Scroll-reveal refs
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [promiseRef, promiseVisible] = useScrollReveal();
  const [connectRef, connectVisible] = useScrollReveal();
  const [productsRef, productsVisible] = useScrollReveal();

const displayedProducts = products.slice(0, 3);


  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={styles.hero}>
        {/* Light blue transparent overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(135, 206, 250, 0.6)', zIndex: 1 }} />

        <div className="container" style={styles.heroContainer}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
            <div style={{ ...styles.heroContent, flex: 1.5, minWidth: '300px' }}>
              <span style={styles.pill}>Now Available Nationwide!</span>
              <h1 style={styles.heading}>
                Experience the <span className="text-secondary" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Perfect Crunch</span>
              </h1>
              <p style={{ ...styles.subtext, color: 'rgba(255, 255, 255, 0.95)' }}>
                Delicious, crispy, and baked to perfection. Discover our premium range of wafer bites and wafer cones packed with exciting new flavors.
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                <Link to="/products" className="btn btn-secondary" style={{ padding: '14px 28px' }}>Explore Products</Link>
                <Link to="/about" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', padding: '14px 28px' }}>Our Story</Link>
              </div>
            </div>

            {/* The Brand Model Image */}
            <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
              <img src="/model.png" alt="Dingwani Foods Brand Face" style={{ maxWidth: '100%', maxHeight: '550px', objectFit: 'contain', filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.6))' }} className="animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} style={{ backgroundColor: 'var(--color-primary)', padding: '120px 0', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', gap: '64px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className={`reveal reveal-left ${aboutVisible ? 'visible' : ''}`} style={{ flex: 1, minWidth: '300px', zIndex: 2 }}>
            <span style={{ color: 'var(--color-secondary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Our Story</span>
            <h2 style={{ fontSize: '3.5rem', margin: '16px 0 24px', lineHeight: 1.1, fontWeight: 700 }}>About Dingwani Foods</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', lineHeight: 1.8 }}>
              For over a decade, we have been crafting the perfect crunch. Our secret family recipe combined with premium ingredients ensures that every bite brings a smile. We believe snacking should be an experience, baked to perfection and packed with flavor.
            </p>
            <Link to="/about" className="btn btn-secondary" style={{ padding: '14px 28px' }}>Read Our Full Story <ArrowRight size={20} /></Link>
          </div>
          <div className={`reveal reveal-right ${aboutVisible ? 'visible' : ''}`} style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
            <div className="animate-float" style={{ width: '100%', maxWidth: '420px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '8px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
              <img src="/wafer-dummy.png" alt="About Dingwani" style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.05)' }} />
            </div>
          </div>
        </div>

        {/* Decorative background element */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,204,0,0.15) 0%, rgba(28,53,127,0) 70%)', zIndex: 1 }} />
      </section>

      {/* OUR PROMISE Section */}
      <section ref={promiseRef} style={promiseStyles.section}>
        <div className="container" style={promiseStyles.container}>
          {/* Left: Promise text */}
          <div className={`reveal reveal-left ${promiseVisible ? 'visible' : ''}`} style={promiseStyles.left}>
            <span style={promiseStyles.label} className="glow-badge">OUR PROMISE</span>
            <h2 style={promiseStyles.heading}>
              Better made.<br />Better packed.<br />Worth choosing again.
            </h2>
            <p style={promiseStyles.body}>
              This promise isn't just a line — it's how we operate. And to protect it as we scale, we built <strong>Dingwani Connect</strong>.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Learn About Us <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Value pillars */}
          <div style={promiseStyles.right} >
            {[
              { emoji: '🏭', title: 'Thoughtfully Crafted', desc: 'Recipes and ingredients chosen with care — every batch, every market.' },
              { emoji: '📦', title: 'Premium Packaging', desc: 'Packaging that reflects the quality inside — not just the outside.' },
              { emoji: '🤝', title: 'Built on Trust', desc: 'Honesty and discipline drive every decision we make.' },
              { emoji: '🎯', title: 'Long-term Loyalty', desc: 'We focus on repeat customers, not short-term volume.' },
            ].map((item, i) => {
              const delays = ['reveal-stagger-1', 'reveal-stagger-2', 'reveal-stagger-3', 'reveal-stagger-4'];
              return (
                <div key={i} className={`reveal card-pop ${promiseVisible ? 'visible' : ''} ${delays[i]}`} style={promiseStyles.card}>
                  <span className="icon-hover" style={promiseStyles.emoji}>{item.emoji}</span>
                  <div>
                    <h4 style={promiseStyles.cardTitle}>{item.title}</h4>
                    <p style={promiseStyles.cardDesc}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infinite Marquee Features Section */}
      <section className="marquee-container">
        {[1, 2].map(layer => (
          <div key={layer} className="marquee-content" aria-hidden={layer === 2 ? 'true' : 'false'}>
            {[
              { text: 'Uncompromising quality', icon: <ShieldCheck size={40} color="#f59e0b" className="animate-pulse-slow" />, bg: '#fef3c7' },
              { text: 'Built on Trust', icon: <Factory size={40} color="#3b82f6" className="animate-pulse-slow" />, bg: '#dbeafe' },
              { text: 'Thoughtfully Crafted', icon: <Flame size={40} color="#ef4444" className="animate-pulse-slow" />, bg: '#fee2e2' },
              { text: 'Premium Packaging', icon: <Award size={40} color="#8b5cf6" className="animate-pulse-slow" />, bg: '#ede9fe' },
               { text: 'Affordable Price', icon: <BadgeIndianRupee  size={40} color="#4bf161" className="animate-pulse-slow" />, bg: '#d8fad8' }
            ].map((item, idx) => (
              <div key={idx} className="marquee-item">
                <div className="marquee-icon-wrapper" style={{ backgroundColor: item.bg }}>
                  {item.icon}
                </div>
                <span className="marquee-text">{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section ref={productsRef} style={styles.section}>
        <div className="container">
          <div className={`reveal ${productsVisible ? 'visible' : ''}`} style={styles.sectionHeader}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '16px' }}>Fan Favorites</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>Our most loved creations, baked fresh with premium ingredients for the ultimate snacking experience.</p>
          </div>

          <div style={styles.grid}>
            {displayedProducts.map((prod, idx) => {
              const delays = ['reveal-stagger-1', 'reveal-stagger-2', 'reveal-stagger-3'];
              return (
                <div key={idx} className={`reveal card-pop ${productsVisible ? 'visible' : ''} ${delays[idx]}`}>
                  <ProductCard
                   id={prod.id}
                    name={prod.name}
                    category={prod.category}
                    description={prod.desc}
                    imageColor={prod.color}
                    image={prod.image}
                  />
                </div>
              );
            })}
          </div>

          <div className={`reveal ${productsVisible ? 'visible' : ''} reveal-stagger-4`} style={{ textAlign: 'center', marginTop: '64px' }}>
            <Link to="/products" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              View All Assortments <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>


      {/* Dingwani Connect Section */}
      <section ref={connectRef} style={connectStyles.section}>
        {/* Header */}
        <div className="container">
          <div className={`reveal ${connectVisible ? 'visible' : ''}`} style={connectStyles.header}>
            <div style={connectStyles.logoRow}>
              <img src="/logo.png" alt="Dingwani Foods" style={connectStyles.logo} className="animate-float" />
              <a href="https://dingwaniconnect.com" target="_blank" rel="noopener noreferrer">
                <img src="/logoDG.png" alt="Dingwani Connect" style={connectStyles.logo} className="animate-float" />
              </a>
            </div>
            <h2 style={connectStyles.heading}>What Dingwani Connect Does</h2>
            <p style={connectStyles.subtext}>
              Our platform that ensures every bite a consumer takes is a joyful experience — delivered to every market, every store.
            </p>
          </div>

          {/* Four Pillars */}
          <div style={connectStyles.pillarsGrid}>
            {[
              {
                icon: '👁️',
                color: '#dbeafe',
                accent: '#3b82f6',
                title: 'Creates Transparency',
                points: ['Clear pricing and scheme communication', 'Direct updates from Dingwani Foods'],
              },
              {
                icon: '🔒',
                color: '#dcfce7',
                accent: '#22c55e',
                title: 'Protects Consistency',
                points: ['Standard selling and display guidelines', 'Feedback loops tied to batches and markets'],
              },
              {
                icon: '🤝',
                color: '#fef9c3',
                accent: '#eab308',
                title: 'Builds Trust',
                points: ['Fair growth for distributors', 'Support tools for retailers', 'No surprise decisions'],
              },
              {
                icon: '📈',
                color: '#fce7f3',
                accent: '#ec4899',
                title: 'Encourages Long-Term Growth',
                points: ['Focus on repeat consumption', 'Discipline over discount-led volume'],
              },
            ].map((pillar, i) => {
              const delays = ['reveal-stagger-1', 'reveal-stagger-2', 'reveal-stagger-3', 'reveal-stagger-4'];
              return (
                <div key={i} className={`reveal card-pop ${connectVisible ? 'visible' : ''} ${delays[i]}`} style={{ ...connectStyles.pillarCard, borderTopColor: pillar.accent }}>
                  <div className="icon-hover" style={{ ...connectStyles.pillarIcon, backgroundColor: pillar.color }}>
                    <span style={{ fontSize: '2rem' }}>{pillar.icon}</span>
                  </div>
                  <h3 style={{ ...connectStyles.pillarTitle, color: pillar.accent }}>{pillar.title}</h3>
                  <ul style={connectStyles.pillarList}>
                    {pillar.points.map((pt, j) => (
                      <li key={j} style={connectStyles.pillarItem}>
                        <span style={{ color: pillar.accent, fontWeight: 700, marginRight: '8px' }}>→</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* WHO IT'S FOR */}
          <div style={connectStyles.forSection}>
            <h3 style={connectStyles.forTitle}>WHO IT'S FOR</h3>
            <div style={connectStyles.forGrid}>
              {[
                { icon: '🏢', role: 'Distributors', desc: 'Who value clarity, fairness, and brand strength' },
                { icon: '🏪', role: 'Retailers', desc: 'Who want reliable products that rotate well' },
                { icon: '🤲', role: 'Partners', desc: 'Who believe in building slow, strong businesses' },
              ].map((item, i) => {
                const delays = ['reveal-stagger-1', 'reveal-stagger-2', 'reveal-stagger-3'];
                return (
                  <div key={i} className={`reveal card-pop ${connectVisible ? 'visible' : ''} ${delays[i]}`} style={connectStyles.forCard}>
                    <span className="icon-hover" style={connectStyles.forIcon}>{item.icon}</span>
                    <h4 style={connectStyles.forRole}>{item.role}</h4>
                    <p style={connectStyles.forDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Socials / Instagram Section */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: 'rgba(28, 53, 127, 0.1)', color: 'var(--color-primary)', borderRadius: 'var(--radius-full)', fontWeight: 600, marginBottom: '16px', fontSize: '0.875rem' }}>Social Media</span>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-text)', marginBottom: '16px', fontWeight: 700 }}>Join Our Community</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.6 }}>
              Follow us for sweet moments, behind-the-scenes magic, and delicious new recipes on our official Instagram!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="social-card" style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: 'pointer', aspectRatio: '1/1', boxShadow: 'var(--shadow-sm)' }}>
                <img src="/wafer-dummy.png" alt={`Instagram Post ${item}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)' }} className="social-img" />
                <div className="social-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(28, 53, 127, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease', gap: '32px', color: 'white' }}>
                  <div className="social-stat" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '1.25rem' }}>
                    <Heart fill="white" size={26} /> {Math.floor(Math.random() * 800) + 200}
                  </div>
                  <div className="social-stat" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '1.25rem' }}>
                    <Play fill="white" size={26} /> {Math.floor(Math.random() * 10) + 2}k
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <a  href="https://www.instagram.com/dingwani_foods/" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '1.1rem', backgroundColor: 'white' }}>
              Follow @DingwaniFoods
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    backgroundColor: 'var(--color-primary)',
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `url('/store imag.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  heroContainer: {
    position: 'relative',
    zIndex: 20,
    width: '100%',
    padding: '64px 24px'
  },
  heroContent: {
    maxWidth: '650px',
  },
  pill: {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: 'rgba(255,204,0,0.12)',
    color: 'var(--color-secondary)',
    borderRadius: 'var(--radius-full)',
    fontWeight: 600,
    marginBottom: '24px',
    fontSize: '0.875rem'
  },
  heading: {
    fontSize: '4.5rem',
    lineHeight: 1.1,
    color: 'white',
    marginBottom: '24px',
    fontWeight: 700
  },
  subtext: {
    fontSize: '1.3rem',
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.6,
    marginBottom: '16px'
  },
  section: {
    padding: '120px 0',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '64px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px'
  }
};

const promiseStyles = {
  section: {
    padding: '120px 0',
    backgroundColor: '#f8f9ff',
    borderTop: '1px solid rgba(28,53,127,0.08)',
  },
  container: {
    display: 'flex',
    gap: '80px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  left: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    // position: 'sticky',
    top: '100px',
  },
  label: {
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'var(--color-secondary)',
    backgroundColor: 'rgba(255,204,0,0.12)',
    padding: '6px 14px',
    borderRadius: 'var(--radius-full)',
    display: 'inline-block',
    width: 'fit-content',
  },
  heading: {
    fontSize: '3.2rem',
    lineHeight: 1.2,
    fontWeight: 800,
    color: 'var(--color-primary)',
  },
  body: {
    fontSize: '1.15rem',
    color: 'var(--color-text-light)',
    lineHeight: 1.8,
  },
  right: {
    flex: '1.2',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '24px',
    backgroundColor: '#ffffff',
    padding: '28px',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    borderLeft: '4px solid var(--color-secondary)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  emoji: {
    fontSize: '2.2rem',
    lineHeight: 1,
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--color-primary)',
    marginBottom: '6px',
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: 'var(--color-text-light)',
    lineHeight: 1.6,
  },
};

const connectStyles = {
  section: {
    padding: '120px 0',
    backgroundColor: '#0d1f50',
    color: 'white',
  },
  header: {
    textAlign: 'center',
    marginBottom: '72px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '32px',
    flexWrap: 'wrap',
  },
  logo: {
    height: '60px',
    width: 'auto',
  },
  connectBadge: {
    backgroundColor: 'rgba(255,204,0,0.15)',
    border: '1px solid rgba(255,204,0,0.4)',
    borderRadius: '9999px',
    padding: '8px 20px',
  },
  connectText: {
    color: '#ffcc00',
    fontWeight: 800,
    letterSpacing: '3px',
    fontSize: '0.85rem',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 800,
    color: 'white',
    marginBottom: '16px',
    lineHeight: 1.2,
  },
  subtext: {
    fontSize: '1.15rem',
    color: 'rgba(255,255,255,0.7)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.8,
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '28px',
    marginBottom: '80px',
  },
  pillarCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderTop: '4px solid',
    borderRadius: '16px',
    padding: '32px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '16px',
    transition: 'transform 0.2s ease, background 0.2s ease',
  },
  pillarIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarTitle: {
    fontSize: '1.2rem',
    fontWeight: 800,
  },
  pillarList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  pillarItem: {
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 1.6,
    display: 'flex',
    alignItems: 'flex-start',
  },
  forSection: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: '64px',
    textAlign: 'center',
  },
  forTitle: {
    fontSize: '0.8rem',
    fontWeight: 800,
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color: '#ffcc00',
    marginBottom: '40px',
  },
  forGrid: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    gap: '28px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  forCard: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '16px',
    padding: '36px 32px',
    flex: '1',
    minWidth: '220px',
    maxWidth: '320px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '12px',
    transition: 'transform 0.2s ease',
  },
  forIcon: {
    fontSize: '2.4rem',
  },
  forRole: {
    fontSize: '1.2rem',
    fontWeight: 800,
    color: '#ffcc00',
  },
  forDesc: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.7,
  },
};

export default Home;
