import { Link } from 'react-router-dom';

function JournalPage() {
  const posts = [
    { title: 'Rituals for the Changing Seasons', date: 'Sept 20, 2025', category: 'Wellness', slug: 'rituals-for-the-changing-seasons', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800' },
    { title: 'Understanding Your Skin Barrier', date: 'Aug 14, 2025', category: 'Skincare', slug: 'understanding-your-skin-barrier', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800' },
    { title: 'Morning Meditation with Beauty', date: 'July 10, 2025', category: 'Ritual', slug: 'morning-meditation-with-beauty', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '10rem 5% 8rem' }}>
      <div className="container-wide">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>The Beauty Journal</p>
          <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Musings on Minimalist Living</h1>
        </div>

        <div className="grid-cols-3">
          {posts.map((post, idx) => (
            <Link key={idx} to={`/blogs/journal/${post.slug}`} style={{ display: 'block', color: 'inherit', opacity: 1 }}>
              <div style={{ aspectRatio: '16/10', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <img 
                  src={post.img} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                {post.category} — {post.date}
              </p>
              <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h3>
              <p style={{ borderBottom: '1px solid var(--color-text)', display: 'inline-block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '0.25rem' }}>Read More</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JournalPage;
