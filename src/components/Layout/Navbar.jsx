import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logo} className="nav-logo">
          <img src="/logo.png" alt="Dingwani Foods Logo" style={{ height: '48px', width: 'auto' }} />
        </Link>
        
        {/* Desktop Menu */}
        <nav style={styles.desktopNav} className="desktop-nav">
          <Link to="/" style={styles.link} className="nav-link">Home</Link>
          <Link to="/about" style={styles.link} className="nav-link">About Us</Link>
          <Link to="/products" style={styles.link} className="nav-link">Our Products</Link>
          <a href="#contact" className="btn btn-secondary card-pop" style={{ padding: '8px 24px' }}>Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" style={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="white" size={28} /> : <Menu color="white" size={28} />}
        </button>
      </div>

      {/* Mobile Menu Container */}
      <div className={`mobile-nav-container ${isOpen ? 'open' : ''}`}>
        <nav style={styles.mobileNav}>
          <Link to="/" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" style={styles.mobileLink} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/products" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Products</Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'var(--color-primary)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: 'var(--shadow-md)'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px'
  },
  logo: {
    fontWeight: 700,
    fontSize: '2rem',
    display: 'flex',
    gap: '6px',
    zIndex: 101,
  },
  desktopNav: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  },
  link: {
    color: 'var(--color-white)',
    fontWeight: 500,
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    zIndex: 101,
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 24px 24px 24px',
    backgroundColor: 'var(--color-primary)',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  },
  mobileLink: {
    color: 'white',
    padding: '16px 0',
    fontSize: '1.1rem',
    fontWeight: 500,
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  }
};

export default Navbar;
