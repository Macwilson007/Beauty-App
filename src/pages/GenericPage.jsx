import { useLocation } from 'react-router-dom';

function GenericPage({ defaultTitle }) {
  const location = useLocation();
  let pathName = location.pathname.split('/').pop().replace(/-/g, ' ');
  if (!pathName || pathName === 'collections' || pathName === 'pages' || pathName === 'blogs') {
    pathName = defaultTitle;
  }

  return (
    <div className="container-wide" style={{ padding: '8rem 5%', textAlign: 'center', minHeight: '60vh' }}>
      <h1 className="serif animate-fade-in" style={{ fontSize: '3rem', marginBottom: '1rem', textTransform: 'capitalize' }}>
        {pathName}
      </h1>
      <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto', opacity: 0, animation: 'fadeIn 0.8s ease-out 0.2s forwards' }}>
        This page represents the <strong>{location.pathname}</strong> route. It is a high-fidelity placeholder
        to ensure all navigation links have a valid landing page, matching the Beauty site architecture.
      </p>
    </div>
  );
}

export default GenericPage;
