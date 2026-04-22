import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '6rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>The page you're looking for doesn't exist.</p>
      <Link 
        href="/"
        style={{
          background: '#ff6b35',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1rem'
        }}
      >
        Go Home
      </Link>
    </div>
  );
}
