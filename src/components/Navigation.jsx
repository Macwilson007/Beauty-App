import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag } from 'lucide-react';

function Navigation() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: 'var(--color-bg)' }} onMouseLeave={handleMouseLeave}>
      {/* Announcement Bar */}
      <div style={{ backgroundColor: 'var(--color-bg-tan)', height: 'var(--announcement-height)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        <span>FREE SHIPPING ON ALL ORDERS | <Link to="/collections/shop-all" style={{ textDecoration: 'underline' }}>SHOP NOW</Link></span>
      </div>

      {/* Main Nav */}
      <nav style={{ height: 'var(--nav-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4%', borderBottom: '1px solid var(--color-border)' }}>
        {/* Left Links */}
        <div style={{ display: 'flex', gap: '2rem', flex: 1, height: '100%' }}>
          <div 
            onMouseEnter={() => handleMouseEnter('shop')} 
            style={{ height: '100%', display: 'flex', alignItems: 'center', fontSize: '0.875rem', cursor: 'default', borderBottom: activeMenu === 'shop' ? '2px solid var(--color-text)' : '2px solid transparent', transition: 'border-color 0.2s' }}
          >
            SHOP
          </div>
          <div 
            onMouseEnter={() => handleMouseEnter('discover')} 
            style={{ height: '100%', display: 'flex', alignItems: 'center', fontSize: '0.875rem', cursor: 'default', borderBottom: activeMenu === 'discover' ? '2px solid var(--color-text)' : '2px solid transparent', transition: 'border-color 0.2s' }}
          >
            DISCOVER
          </div>
        </div>

        {/* Center Logo */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <Link to="/" className="serif" style={{ fontSize: '1.75rem', letterSpacing: '0.1em' }} onClick={() => setActiveMenu(null)}>BEAUTY</Link>
        </div>

        {/* Right Icons */}
        <div style={{ display: 'flex', gap: '1.5rem', flex: 1, justifyContent: 'flex-end', height: '100%', alignItems: 'center' }}>
          <button style={{ display: 'flex', alignItems: 'center' }}><Search size={18} strokeWidth={1.5} /></button>
          <button style={{ display: 'flex', alignItems: 'center' }}><User size={18} strokeWidth={1.5} /></button>
          <button style={{ display: 'flex', alignItems: 'center' }}><ShoppingBag size={18} strokeWidth={1.5} /></button>
        </div>
      </nav>

      {/* Mega Menus overlays */}
      <div 
        style={{
          position: 'absolute',
          top: 'calc(var(--nav-height) + var(--announcement-height))',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--color-bg)',
          borderBottom: '1px solid var(--color-border)',
          display: activeMenu ? 'flex' : 'none',
          gap: '4rem',
          padding: '3rem 6%',
          boxShadow: '0 15px 30px rgba(0,0,0,0.04)',
          transformOrigin: 'top',
          animation: 'fadeIn 0.2s ease-out'
        }}
        onMouseEnter={() => handleMouseEnter(activeMenu)}
      >
        {activeMenu === 'shop' && (
          <>
            <div>
              <h4 style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '1rem', letterSpacing: '0.05em' }}>SHOP ALL</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.875rem' }}>
                <li><Link to="/collections/shop-all" onClick={handleMouseLeave}>Shop All</Link></li>
                <li><Link to="/collections/bestsellers" onClick={handleMouseLeave}>Bestsellers</Link></li>
                <li><Link to="/collections/new-in" onClick={handleMouseLeave}>New In</Link></li>
                <li><Link to="/collections/award-winners" onClick={handleMouseLeave}>Award-Winners</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '1rem', letterSpacing: '0.05em' }}>SKINCARE CONCERN</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.875rem' }}>
                <li><Link to="/collections/sensitive-skin" onClick={handleMouseLeave}>Sensitive Skin</Link></li>
                <li><Link to="/collections/dry-dehydrated-skin" onClick={handleMouseLeave}>Dehydrated + Dry</Link></li>
                <li><Link to="/collections/winter-skin" onClick={handleMouseLeave}>Winter Skin</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '1rem', letterSpacing: '0.05em' }}>PRODUCT TYPE</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.875rem' }}>
                <li><Link to="/collections/cleansers-masks" onClick={handleMouseLeave}>Cleansers + Masks</Link></li>
                <li><Link to="/collections/serums-oils" onClick={handleMouseLeave}>Serums + Oils</Link></li>
                <li><Link to="/collections/balms" onClick={handleMouseLeave}>Balms</Link></li>
                <li><Link to="/collections/treatments" onClick={handleMouseLeave}>Treatments</Link></li>
                <li><Link to="/collections/body" onClick={handleMouseLeave}>Body</Link></li>
                <li><Link to="/collections/refills" onClick={handleMouseLeave}>Refills</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '1rem', letterSpacing: '0.05em' }}>MORE</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.875rem' }}>
                <li><Link to="/collections/for-men" onClick={handleMouseLeave}>For Men</Link></li>
                <li><Link to="/collections/gifts-sets-bundles" onClick={handleMouseLeave}>Gifts, Sets + Bundles</Link></li>
                <li><Link to="/collections/merch" onClick={handleMouseLeave}>Merch</Link></li>
              </ul>
            </div>
          </>
        )}

        {activeMenu === 'discover' && (
          <>
            <div>
              <h4 style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '1rem', letterSpacing: '0.05em' }}>ABOUT BEAUTY</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.875rem' }}>
                <li><Link to="/pages/about" onClick={handleMouseLeave}>About</Link></li>
                <li><Link to="/pages/rewards" onClick={handleMouseLeave}>Beauty Rewards</Link></li>
                <li><Link to="/pages/stockist" onClick={handleMouseLeave}>Stockists</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '1rem', letterSpacing: '0.05em' }}>EXPERIENCE</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.875rem' }}>
                <li><Link to="/pages/retreat-spring-2026" onClick={handleMouseLeave}>Yoga Retreat 2026</Link></li>
                <li><Link to="/blogs/journal" onClick={handleMouseLeave}>Journal</Link></li>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Navigation;
