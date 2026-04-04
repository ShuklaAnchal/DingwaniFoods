const ProductCard = ({ name, description, category, imageColor = '#f0f0f0' }) => {
  return (
    <div className="glass-panel card-hover animate-slide-up" style={styles.card}>
      <div className="img-wrapper" style={{...styles.imageContainer, backgroundColor: imageColor}}>
        <img src="/wafer-dummy.png" alt={name} className="product-img" style={styles.productImage} />
      </div>
      <div style={styles.content}>
        <span style={styles.category}>{category}</span>
        <h3 style={styles.title}>{name}</h3>
        <p style={styles.description}>{description}</p>
        <button className="btn btn-outline" style={{ width: '100%' }}>View Details</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    backgroundColor: '#ffffff'
  },
  imageContainer: {
    height: '240px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  category: {
    fontSize: '0.875rem',
    color: 'var(--color-primary)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  title: {
    fontSize: '1.25rem',
    color: 'var(--color-text)',
    margin: 0
  },
  description: {
    color: 'var(--color-text-light)',
    fontSize: '0.95rem',
    marginBottom: '16px'
  }
};

export default ProductCard;
