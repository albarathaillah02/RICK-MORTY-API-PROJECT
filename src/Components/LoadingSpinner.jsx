export default function LoadingSpinner() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={{ color: '#fff', marginTop: '15px' }}>Menghubungi Server Rick & Morty...</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
  },
  spinner: {
    width: '45px',
    height: '45px',
    border: '4px solid #333',
    borderTop: '4px solid #2ecc71',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }
};