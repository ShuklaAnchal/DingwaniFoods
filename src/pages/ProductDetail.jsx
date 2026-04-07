import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, CheckCircle2, ShoppingBag } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Product Not Found</h2>
        <p style={{ margin: '20px 0', color: 'var(--color-text-light)' }}>Sorry, the product you are looking for does not exist.</p>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      {/* Product Hero Section */}
      <section style={{ ...styles.heroSection, backgroundColor: product.color + '15' }}>
        <div className="container" style={styles.heroContainer}>
          <Link to="/products" style={styles.backLink} className="icon-hover">
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
          
          <div style={styles.productLayout}>
            {/* Image Side */}
            <div style={styles.imageSide} className="animate-slide-up">
              <div style={{ ...styles.imageWrapper, backgroundColor: product.color }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={styles.mainImage} 
                  className="animate-float" 
                />
              </div>
            </div>

            {/* Info Side */}
            <div style={styles.infoSide} className="reveal visible">
              <span style={{ ...styles.badge, color: product.color, border: `1px solid ${product.color}` }}>
                {product.category}
              </span>
              <h1 style={styles.title}>{product.name}</h1>
              <p style={styles.description}>{product.fullDescription}</p>
              
              <div style={styles.featuresList}>
                {product.features.map((feature, index) => (
                  <div key={index} style={styles.featureItem} className={`reveal visible reveal-stagger-${index + 1}`}>
                    <CheckCircle2 size={20} color={product.color} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Additional Details / Ingredients Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={styles.detailsGrid}>
            <div className="glass-panel" style={styles.detailCard}>
              <h3 style={styles.detailTitle}>Ingredients</h3>
              <p style={styles.detailText}>
                Premium Wheat Flour, Pure Cocoa Solids, Natural Cane Sugar, Vegetable Oils, 
                Milk Solids, Soy Lecithin, Authentic Flavorings.
              </p>
            </div>
            <div className="glass-panel" style={styles.detailCard}>
              <h3 style={styles.detailTitle}>Shelf Life</h3>
              <p style={styles.detailText}>
                Best consumed within 9 months from the date of manufacture. 
                Store in a cool, dry place away from direct sunlight.
              </p>
            </div>
            <div className="glass-panel" style={styles.detailCard}>
              <h3 style={styles.detailTitle}>Packaging</h3>
              <p style={styles.detailText}>
                Available in 150g, 250g, and 500g family packs. 
                Eco-friendly, recyclable inner foil packaging for freshness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  heroSection: {
    padding: '60px 0 100px 0',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  backLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--color-primary)',
    fontWeight: 600,
    fontSize: '0.95rem',
  },
  productLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '80px',
    alignItems: 'center',
  },
  imageSide: {
    display: 'flex',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: '500px',
    aspectRatio: '1',
    borderRadius: 'var(--radius-lg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    borderRadius:'var(--radius-lg)'
  },
  infoSide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  badge: {
    alignSelf: 'flex-start',
    padding: '4px 16px',
    borderRadius: 'var(--radius-full)',
    fontSize: '0.85rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  title: {
    fontSize: '3.5rem',
    color: 'var(--color-primary)',
    lineHeight: 1.1,
    margin: 0,
  },
  description: {
    fontSize: '1.2rem',
    color: 'var(--color-text-light)',
    lineHeight: 1.8,
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: '10px 0',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '1.05rem',
    fontWeight: 500,
    color: 'var(--color-text)',
  },
  actions: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
  },
  detailCard: {
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  detailTitle: {
    fontSize: '1.25rem',
    color: 'var(--color-primary)',
    fontWeight: 700,
  },
  detailText: {
    color: 'var(--color-text-light)',
    fontSize: '1rem',
    lineHeight: 1.6,
  }
};

export default ProductDetail;
