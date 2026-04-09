import { useParams } from 'react-router-dom';

const CATEGORY_DATA = {
  'shop-all': {
    title: 'Shop All',
    subtitle: 'High-performance essentials for every skin concern.',
    products: [
      { name: 'The Cleansing Balm', price: '$45.00', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800' },
      { name: 'The Face Oil', price: '$65.00', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800' },
      { name: 'The Healing Mask', price: '$55.00', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800' },
      { name: 'The Body Serum', price: '$58.00', img: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'bestsellers': {
    title: 'Bestsellers',
    subtitle: 'Our community’s favorite Nordic rituals.',
    products: [
      { name: 'The Cleansing Balm', price: '$45.00', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800' },
      { name: 'The Face Oil', price: '$65.00', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  'cleansers-masks': {
    title: 'Cleansers + Masks',
    subtitle: 'Gentle purification and deep restoration.',
    products: [
      { name: 'The Cleansing Balm', price: '$45.00', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800' },
      { name: 'The Healing Mask', price: '$55.00', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800' }
    ]
  }
};

function ProductCategoryPage() {
  const { category } = useParams();
  const data = CATEGORY_DATA[category] || CATEGORY_DATA['shop-all'];

  return (
    <div className="animate-fade-in" style={{ padding: '10rem 5% 8rem' }}>
      <div className="container-wide">
        <div style={{ marginBottom: '6rem' }}>
          <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{data.title}</h1>
          <p style={{ color: 'var(--color-text-light)', fontSize: '1.25rem' }}>{data.subtitle}</p>
        </div>

        <div className="grid-cols-4">
          {data.products.map((prod, idx) => (
            <div key={idx} style={{ cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--color-bg-secondary)', aspectRatio: '3/4', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.25rem' }}>{prod.name}</h4>
              <p style={{ fontSize: '0.9rem' }}>{prod.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategoryPage;
