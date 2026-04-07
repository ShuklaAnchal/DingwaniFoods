import React from 'react';
import ProductCard from '../components/ProductCard';
import useScrollReveal from '../hooks/useScrollReveal';
import { products, categories } from '../data/products';

/* Category section — each gets its own reveal */
const CategoryBlock = ({ cat, index }) => {
  const [ref, visible] = useScrollReveal();
  const staggerMap = ['reveal-stagger-1', 'reveal-stagger-2', 'reveal-stagger-3', 'reveal-stagger-4', 'reveal-stagger-5'];

  // Filter products for this category
  const catItems = products.filter(p => cat.itemIds.includes(p.id));

  return (
    <div ref={ref} style={{ marginBottom: '96px' }}>
      <div className={`reveal reveal-left ${visible ? 'visible' : ''}`}>
        <h2 className="heading-underline visible" style={{
          fontSize: '2rem',
          paddingBottom: '8px',
          display: 'inline-block',
          marginBottom: '40px',
          color: 'var(--color-primary)',
        }}>
          {cat.title}
        </h2>
      </div>
      <div style={styles.grid}>
        {catItems.map((prod, j) => (
          <div key={prod.id} className={`reveal card-pop ${visible ? 'visible' : ''} ${staggerMap[j] || ''}`}>
            <ProductCard
              id={prod.id}
              name={prod.name}
              category={prod.category}
              description={prod.description}
              imageColor={prod.color}
              image={prod.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Products = () => {
  const [heroRef, heroVisible] = useScrollReveal();

  return (
    <div className="animate-fade-in container" style={{ padding: '64px 24px' }}>

      {/* Page Header */}
      <div ref={heroRef} style={{ textAlign: 'center', marginBottom: '80px', marginTop: '32px' }}>
        <div className={`reveal ${heroVisible ? 'visible' : ''}`}>
          <span style={styles.pill} className="glow-badge">Our Range</span>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--color-primary)', marginBottom: '16px', marginTop: '16px' }}>
            Our Full Range
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
            Discover our handcrafted assortments perfect for your sweet cravings.
          </p>
        </div>
      </div>

      {/* Product Categories */}
      {categories.map((cat, i) => (
        <CategoryBlock key={i} cat={cat} index={i} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '40px',
  },
  pill: {
    display: 'inline-block',
    padding: '6px 16px',
    backgroundColor: 'rgba(28,53,127,0.08)',
    color: 'var(--color-primary)',
    borderRadius: '9999px',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },
};

export default Products;
