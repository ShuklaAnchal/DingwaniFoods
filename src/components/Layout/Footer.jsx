import { Link } from "react-router-dom";

const FacebookIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer style={styles.footer} id="contact">
      <div className="container" style={styles.container}>
        <div style={styles.column}>
          <Link
            to="/"
            style={{ display: "inline-block", marginBottom: "16px" }}
          >
            <img
              src="/logo.png"
              alt="Dingwani Foods Logo"
              style={{ height: "56px", width: "auto" }}
            />
          </Link>
          <p style={styles.text}>
            Crispy, delicious wafers bringing smiles to every face. Premium
            quality in every bite since our inception.
          </p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.title}>Quick Links</h4>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/about" style={styles.link}>
            Our Story
          </Link>
          <Link to="/products" style={styles.link}>
            Products
          </Link>
        </div>
        <div style={styles.column}>
          <h4 style={styles.title}>Contact</h4>
          <p style={styles.text}>
            Address: 46, Confectionery park, Rangwasa, Indore, Madhya Pradesh
            453331
          </p>
          <p style={styles.text}>Email: info@dingwanifoods.com</p>
          <p style={styles.text}>Phone: +91 8269968097</p>
          <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
            <a href="#" style={styles.link} className="hover-brightness">
              <FacebookIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/dingwani-foods/"
              style={styles.link}
              className="hover-brightness"
            >
              <LinkedInIcon size={24} />
            </a>
            <a
              href="https://www.instagram.com/dingwani_foods/"
              style={styles.link}
              className="hover-brightness"
            >
              <InstagramIcon size={24} />
            </a>
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} Dingwani Foods. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "var(--color-primary)",
    color: "white",
    padding: "64px 0 0 0",
    marginTop: "64px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "48px",
    marginBottom: "48px",
  },
  column: {
    flex: "1",
    minWidth: "250px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  logoTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "8px",
    display: "flex",
    gap: "6px",
  },
  title: {
    fontSize: "1.25rem",
    color: "var(--color-secondary)",
  },
  text: {
    color: "rgba(255,255,255,0.8)",
  },
  link: {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  bottom: {
    textAlign: "center",
    padding: "24px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.875rem",
  },
};

export default Footer;
