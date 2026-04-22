'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff6b35' }}>Something went wrong!</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>{error.message}</p>
      <button 
        onClick={reset}
        style={{
          background: '#ff6b35',
          color: 'white',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Try again
      </button>
    </div>
  );
}
