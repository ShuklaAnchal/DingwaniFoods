import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logo}>
          <img src="/logo.png" alt="Dingwani Foods Logo" style={{ height: '48px', width: 'auto' }} />
        </Link>
        
        {/* Desktop Menu */}
        <nav style={styles.desktopNav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
          <Link to="/products" style={styles.link}>Our Products</Link>
          <a href="#contact" className="btn btn-secondary" style={{ padding: '8px 20px' }}>Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" style={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="white" /> : <Menu color="white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav style={styles.mobileNav}>
          <Link to="/" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" style={styles.mobileLink} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/products" style={styles.mobileLink} onClick={() => setIsOpen(false)}>Products</Link>
        </nav>
      )}
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'var(--color-primary)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: 'var(--shadow-sm)'
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
    gap: '6px'
  },
  desktopNav: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  },
  link: {
    color: 'var(--color-white)',
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 24px',
    backgroundColor: 'var(--color-primary)',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  },
  mobileLink: {
    color: 'white',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  }
};

export default Navbar;
