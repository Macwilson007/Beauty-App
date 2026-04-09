function YogaRetreatPage() {
  return (
    <div className="animate-fade-in">
      <section style={{ 
        height: '80vh', 
        background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000") center/cover no-repeat',
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 5%' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Experience the North</p>
          <h1 className="serif" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '2rem' }}>Yoga & Stillness <br /> Retreat 2026</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>Join us in the heart of Finnish Lapland for a five-day journey into silence, recovery, and the purity of the wild.</p>
        </div>
      </section>

      <section className="container-wide" style={{ padding: '8rem 5%' }}>
        <div className="grid-cols-2" style={{ gap: '10%', alignItems: 'center' }}>
          <div>
            <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>The Journey</h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '2rem' }}>
              We invite you to disconnect from the digital world and reconnect with the Earth. Our curated retreat focuses on restorative Yin Yoga, cold-water immersion, and Nordic sauna rituals, all designed to soothe the nervous system and revitalize the skin.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-light)' }}>
              <li>• Daily 90-minute Yoga & Meditation</li>
              <li>• Traditional Nordic Sauna Rituals</li>
              <li>• Farm-to-table organic meals</li>
              <li>• Personal skincare consultation</li>
            </ul>
          </div>
          <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=1000" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Lapland scenery" />
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 5%', backgroundColor: 'var(--color-bg-tan)', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '4rem' }}>Request Your Invitation</h2>
        <form style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <input type="text" placeholder="Full Name" style={{ padding: '1rem', border: 'none', borderBottom: '1px solid var(--color-border)', background: 'transparent', outline: 'none' }} />
          <input type="email" placeholder="Email Address" style={{ padding: '1rem', border: 'none', borderBottom: '1px solid var(--color-border)', background: 'transparent', outline: 'none' }} />
          <textarea placeholder="Tell us why you'd like to join us" rows="4" style={{ padding: '1rem', border: 'none', borderBottom: '1px solid var(--color-border)', background: 'transparent', outline: 'none', resize: 'none' }}></textarea>
          <button style={{ backgroundColor: 'var(--color-text)', color: 'white', padding: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1rem' }}>Submit Inquiry</button>
        </form>
      </section>
    </div>
  );
}

export default YogaRetreatPage;
