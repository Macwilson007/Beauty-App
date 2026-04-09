function StockistsPage() {
  const stockists = [
    { city: 'London', address: 'The Selfridges, 400 Oxford St, W1A 1AB', store: 'Selfridges' },
    { city: 'Copenhagen', address: 'Krontprinsensgade 4, 1114 København', store: 'Illum' },
    { city: 'New York', address: '99 Prince St, New York, NY 10012', store: 'Aura Collective' },
    { city: 'Paris', address: '24 Rue de Sèvres, 75007 Paris', store: 'Le Bon Marché' }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '10rem 5% 8rem' }}>
      <div className="container-wide">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>Find Us Locally</p>
          <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Global Stockists</h1>
          <p style={{ color: 'var(--color-text-light)' }}>Our collection is available in curated boutiques and luxury department stores worldwide.</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {stockists.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 0', borderBottom: '1px solid var(--color-border)' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.city}</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>{item.address}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p className="serif" style={{ fontSize: '1.25rem' }}>{item.store}</p>
                <p style={{ textDecoration: 'underline', fontSize: '0.75rem', marginTop: '0.5rem', cursor: 'pointer' }}>View on Maps</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StockistsPage;
