import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '4rem 5%', marginTop: 'auto' }}>
      <div className="container-wide grid-cols-4" style={{ paddingBottom: '3rem' }}>
        <div>
          <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>BEAUTY</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
            Dermatologist-tested formulas with pure Nordic botanicals and clinically advanced actives.
          </p>
        </div>
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem' }}>SHOP</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
            <li><Link to="/collections/shop-all">Shop All</Link></li>
            <li><Link to="/collections/bestsellers">Bestsellers</Link></li>
            <li><Link to="/collections/gifts-sets-bundles">Gifts & Sets</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem' }}>DISCOVER</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
            <li><Link to="/pages/about">About Us</Link></li>
            <li><Link to="/blogs/journal">Journal</Link></li>
            <li><Link to="/pages/retreat-spring-2026">Yoga Retreat 2026</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem' }}>STAY IN TOUCH</h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>Get 10% off your first order.</p>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)' }}>
            <input type="email" placeholder="Email address" style={{ border: 'none', background: 'transparent', padding: '0.5rem 0', flex: 1, outline: 'none' }} />
            <button style={{ padding: '0.5rem', fontWeight: 600 }}>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className="container-wide" style={{ paddingTop: '2rem', borderTop: '1px solid var(--color-border)', fontSize: '0.75rem', color: 'var(--color-text-light)', display: 'flex', justifyContent: 'space-between' }}>
        <p>&copy; {new Date().getFullYear()} Beauty Concept</p>
        <p>Values: Vegan, Cruelty-free, Clean ingredients</p>
      </div>
    </footer>
  );
}

export default Footer;
