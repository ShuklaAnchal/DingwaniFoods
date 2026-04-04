import React from 'react';
import ProductCard from '../components/ProductCard';
import useScrollReveal from '../hooks/useScrollReveal';

/* Category section — each gets its own reveal */
const CategoryBlock = ({ cat, index }) => {
  const [ref, visible] = useScrollReveal();
  const staggerMap = ['reveal-stagger-1', 'reveal-stagger-2', 'reveal-stagger-3', 'reveal-stagger-4'];

  return (
    <div ref={ref} style={{ marginBottom: '96px' }}>
      <div className={`reveal reveal-left ${visible ? 'visible' : ''}`}>
        <h2 style={{
          fontSize: '2rem',
          borderBottom: '3px solid var(--color-secondary)',
          paddingBottom: '8px',
          display: 'inline-block',
          marginBottom: '40px',
          color: 'var(--color-primary)',
        }}>
          {cat.title}
        </h2>
      </div>
      <div style={styles.grid}>
        {cat.items.map((prod, j) => (
          <div key={j} className={`reveal card-pop ${visible ? 'visible' : ''} ${staggerMap[j] || ''}`}>
            <ProductCard
              name={prod.name}
              category={cat.title}
              description={prod.desc}
              imageColor={prod.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Products = () => {
  const [heroRef, heroVisible] = useScrollReveal();

  const categories = [
    {
      title: 'Signature Wafer Bites',
      items: [
        { name: 'Choco Delight',    desc: 'Intense dark chocolate sandwiched between light crispy layers.', color: '#8d5524' },
        { name: 'Vanilla Bean',     desc: 'Smooth, fragrant vanilla cream filling.', color: '#f1e3d3' },
        { name: 'Strawberry Swirl', desc: 'Tangy and sweet strawberry explosion.', color: '#ffb3c6' },
      ],
    },
    {
      title: 'Classic Wafer Cones',
      items: [
        { name: 'Hazelnut Wrap',   desc: 'Crispy cone filled to the brim with rich hazelnut spread.', color: '#c68e17' },
        { name: 'Matcha Green Tea', desc: 'An elegant twist with premium Japanese matcha.', color: '#a3b18a' },
      ],
    },
  ];

  return (
    <div className="animate-fade-in container" style={{ padding: '64px 24px' }}>

      {/* Page Header */}
      <div ref={heroRef} style={{ textAlign: 'center', marginBottom: '80px', marginTop: '32px' }}>
        <div className={`reveal ${heroVisible ? 'visible' : ''}`}>
          <span style={styles.pill}>Our Range</span>
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
