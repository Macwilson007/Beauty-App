function RewardsPage() {
  return (
    <div className="animate-fade-in" style={{ padding: '10rem 5% 8rem' }}>
      <div className="container-wide" style={{ textAlign: 'center' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>The Beauty Circle</p>
        <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Our Community Rewards</h1>
        
        <div className="grid-cols-3" style={{ gap: '3rem', marginTop: '4rem' }}>
          {[
            { title: 'The Seeker', text: 'Sign up to our newsletter for 10% off your first order and exclusive first-look at new launches.' },
            { title: 'The Giver', text: 'Refer a friend and you both receive $15 off your next ritual. Shared beauty, shared health.' },
            { title: 'The Devotee', text: 'Unlock tiered rewards, complimentary shipping, and birthday surprises as you shop with us.' }
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '3rem 2rem', border: '1px solid var(--color-border)' }}>
              <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <button style={{ backgroundColor: 'var(--color-text)', color: 'white', padding: '1rem 4rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '6rem', cursor: 'pointer' }}>
          Join The Circle
        </button>
      </div>
    </div>
  );
}

export default RewardsPage;
