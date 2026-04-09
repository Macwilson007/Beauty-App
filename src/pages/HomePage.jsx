import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ 
        height: '90vh', 
        background: 'linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.05)), url("https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=2000") center/cover no-repeat',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '0 5%',
        position: 'relative'
      }}>
        <div style={{ zIndex: 2 }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>Nordic Skin Rituals</p>
          <h2 className="serif" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', color: 'var(--color-text)', maxWidth: '900px' }}>
            Pure Botanicals for <br /> Sensitive Souls
          </h2>
          <Link to="/collections/shop-all" style={{ 
            display: 'inline-block', 
            backgroundColor: 'var(--color-text)', 
            color: 'var(--color-bg)', 
            padding: '1rem 3rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            fontSize: '0.75rem', 
            fontWeight: 500,
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Shop The Collection
          </Link>
        </div>
      </section>

      {/* Values Bar */}
      <section style={{ padding: '2rem 0', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
        <div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          {['Dermatologist Tested', 'Vegan & Cruelty Free', 'Pure Nordic Botanicals', 'Clinically Advanced'].map((value, idx) => (
            <div key={idx} style={{ flex: 1, textAlign: 'center', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>
              {value}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products / Bestsellers */}
      <section className="container-wide" style={{ padding: '8rem 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}>The Essentials</p>
            <h3 className="serif" style={{ fontSize: '2.5rem' }}>Bestsellers</h3>
          </div>
          <Link to="/collections/bestsellers" style={{ textDecoration: 'underline', fontSize: '0.875rem', color: 'var(--color-text)', letterSpacing: '0.05em' }}>View All</Link>
        </div>
        <div className="grid-cols-3">
          {[
            { name: 'The Cleansing Balm', price: '$45.00', desc: 'Gentle daily cleanser', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800' },
            { name: 'The Face Oil', price: '$65.00', desc: 'Nourishing treatment', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800' },
            { name: 'The Body Serum', price: '$58.00', desc: 'Nourishing oil blend', img: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&q=80&w=800' }
          ].map((prod, idx) => (
            <div key={idx} style={{ group: 'true', cursor: 'pointer' }}>
              <div style={{ backgroundColor: 'var(--color-bg-secondary)', aspectRatio: '4/5', marginBottom: '1.5rem', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <button style={{ 
                  position: 'absolute', 
                  bottom: '1rem', 
                  left: '1rem', 
                  right: '1rem', 
                  backgroundColor: 'white', 
                  padding: '0.75rem', 
                  fontSize: '0.7rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  opacity: 0,
                  transform: 'translateY(10px)',
                  transition: 'all 0.3s ease'
                }}
                className="add-to-cart-btn"
                >Add to Cart</button>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.25rem' }}>{prod.name}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>{prod.desc}</p>
              <p style={{ fontSize: '1rem', fontWeight: 600 }}>{prod.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: '10rem 5%', textAlign: 'center', backgroundColor: '#f9f8f6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem', marginBottom: '2rem', color: 'var(--color-text-light)' }}>Our Philosophy</p>
          <h3 className="serif" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, marginBottom: '3rem' }}>
            "Beauty delivers visible results that work in harmony with your skin, not against it. Pure Nordic botanicals, clinically proven results."
          </h3>
          <Link to="/pages/about" style={{ display: 'inline-block', borderBottom: '1px solid var(--color-text)', color: 'var(--color-text)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', paddingBottom: '0.5rem' }}>Discover Our Story</Link>
        </div>
      </section>

      {/* Twin Column Intro */}
      <section style={{ padding: '8rem 5%' }}>
        <div className="container-wide grid-cols-2" style={{ alignItems: 'center', gap: '8%' }}>
          <div style={{ aspectRatio: '1/1', backgroundColor: '#eee', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&q=80&w=1000" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Skincare" />
          </div>
          <div>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>Pure & Simple</p>
            <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Made for you, <br /> inspired by nature.</h3>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              Each ingredient is selected for its efficacy and gentleness. We strip away the unnecessary—no fillers, no synthetic fragrances—leaving only what your skin needs to thrive.
            </p>
            <Link to="/collections/shop-all" style={{ 
              backgroundColor: 'transparent', 
              border: '1px solid var(--color-text)', 
              color: 'var(--color-text)', 
              padding: '1rem 3rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em', 
              fontSize: '0.75rem' 
            }}>
              Explore ingredients
            </Link>
          </div>
        </div>
      </section>

      {/* Retreat / Experience Banner */}
      <section style={{ 
        height: '80vh', 
        background: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000") center/cover no-repeat',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '0 5%',
        color: 'white'
      }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '4rem', backdropFilter: 'blur(5px)' }}>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Yoga Retreat 2026</p>
          <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2.5rem' }}>A Journey Into Wellness</h2>
          <Link to="/pages/retreat-spring-2026" style={{ 
            display: 'inline-block', 
            backgroundColor: 'white', 
            color: 'var(--color-text)', 
            padding: '1rem 3rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            fontSize: '0.75rem', 
            fontWeight: 500 
          }}>
            Reserve Your Place
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
