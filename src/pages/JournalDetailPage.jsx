import { useParams, Link } from 'react-router-dom';

const BLOG_POSTS = {
  'rituals-for-the-changing-seasons': {
    title: 'Rituals for the Changing Seasons',
    date: 'Sept 20, 2025',
    category: 'Wellness',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000',
    content: `
      <p>As the air turns crisp and the leaves begin their slow descent, our skin often feels the first whisper of change. In the Nordic traditions, moving with the seasons is not just a habit, but a necessity for wellbeing.</p>
      <h3>The Autumn Transition</h3>
      <p>During the cooler months, the skin barrier requires more protection. This is the time to transition from lightweight lotions to richer, barrier-supporting lipid oils. We recommend starting your evening ritual with a double cleanse to remove pollutants, followed by our signature face oil to lock in moisture.</p>
      <blockquote>"Wellness is the harmony of moving in tandem with nature's rhythm."</blockquote>
      <p>Take time this season to slow down. Lighting a candle, enjoying a warm cup of herbal tea, and spending an extra five minutes on your skincare can transform a routine into a restorative ritual.</p>
    `
  },
  'understanding-your-skin-barrier': {
    title: 'Understanding Your Skin Barrier',
    date: 'Aug 14, 2025',
    category: 'Skincare',
    img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=2000',
    content: `
      <p>The skin barrier, or moisture barrier, is your body's first line of defense. When it's healthy, your skin looks plump, calm, and glowing. When it's compromised, you may experience redness, dryness, and sensitivity.</p>
      <h3>What Causes Damage?</h3>
      <p>Over-exfoliation, harsh cleansers, and environmental stressors are the primary culprits. At Beauty, we focus on ingredients that 'mimic' the skin's natural lipids—ceramides, fatty acids, and squalane.</p>
      <p>By protecting this vital layer, we allow the skin to heal itself from within. Remember, more is not always better. A simple, consistent routine is often the most powerful tool for long-term skin health.</p>
    `
  },
  'morning-meditation-with-beauty': {
    title: 'Morning Meditation with Beauty',
    date: 'July 10, 2025',
    category: 'Ritual',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000',
    content: `
      <p>How you begin your day sets the tone for everything that follows. We believe that skincare is the perfect anchor for a morning mindfulness practice.</p>
      <h3>The Three-Minute Ritual</h3>
      <p>As you apply your cleanser, focus on the sensation of the product on your skin. Notice the scent, the temperature, and the texture. Take deep, belly breaths. This small window of time is yours alone.</p>
      <p>Integrating simple breathwork into your skincare routine can lower cortisol levels and brighten your complexion by improving oxygen flow. It's beauty from the inside out.</p>
    `
  }
};

function JournalDetailPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS[slug];

  if (!post) {
    return (
      <div className="container-wide" style={{ padding: '10rem 5%', textAlign: 'center' }}>
        <h1 className="serif">Post Not Found</h1>
        <Link to="/blogs/journal" style={{ textDecoration: 'underline' }}>Back to Journal</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Image */}
      <div style={{ height: '60vh', width: '100%', overflow: 'hidden' }}>
        <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div className="container-wide" style={{ padding: '6rem 5% 10rem', maxWidth: '900px', margin: '0 auto' }}>
        <Link to="/blogs/journal" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)', marginBottom: '2rem', display: 'block' }}>
          ← Back to Journal
        </Link>
        <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
          {post.category} — {post.date}
        </p>
        <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '3rem', lineHeight: 1.1 }}>{post.title}</h1>
        
        <div 
          style={{ lineHeight: 1.8, color: 'var(--color-text-light)', fontSize: '1.1rem' }}
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div style={{ marginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
          <p className="serif" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Share this Musings</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>Facebook</span>
            <span>Pinterest</span>
            <span>Email</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JournalDetailPage;
