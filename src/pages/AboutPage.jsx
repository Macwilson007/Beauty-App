function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section style={{ padding: '10rem 5% 6rem', textAlign: 'center', backgroundColor: '#f5f3f0' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>Our Story</p>
        <h1 className="serif" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '1.5rem', color: 'var(--color-text)' }}>Inspired by the North</h1>
      </section>

      {/* Intro */}
      <section className="container-wide" style={{ padding: '8rem 5%' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '2.5rem', lineHeight: 1.3 }}>
            Born from a desire to bring the purity of Nordic nature to the sensitive skin community.
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Beauty was founded on the belief that skincare should be a ritual of connection, both with ourselves and with the world around us. We harvest botanical ingredients that have thrived in the harsh Arctic climates, packing them into high-performance formulas that respect your skin's unique needs.
          </p>
        </div>
      </section>

      {/* Image Sections */}
      <section style={{ padding: '4rem 5%' }}>
        <div className="grid-cols-2" style={{ gap: '2rem' }}>
          <div style={{ aspectRatio: '3/4' }}>
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Nordic nature" />
          </div>
          <div style={{ aspectRatio: '3/4' }}>
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Skincare ritual" />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: '8rem 5%', backgroundColor: '#fff' }}>
        <div className="container-wide">
          <div className="grid-cols-3">
            {[
              { title: 'Conscious Sourcing', text: 'We work with small-scale farmers in Northern Europe who prioritize biodiversity and ecological health.' },
              { title: 'Clean Science', text: 'Our labs combine traditional herbalism with cutting-edge dermatology to create formulas that are safe and effective.' },
              { title: 'Refillable Beauty', text: 'We are committed to reducing our footprint. Most of our range is available in eco-friendly refills.' }
            ].map((p, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '0 2rem' }}>
                <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
