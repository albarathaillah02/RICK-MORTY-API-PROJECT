import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#111', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <header style={styles.header}>
        <h1 style={styles.title}>RICK & MORTY - API</h1>
        <p style={styles.subtitle}>Integrasi Real-Time API Publik dengan React & Axios</p>
      </header>
      <main>
        <CharacterList />
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#1c2833',
    padding: '2.5rem 1rem',
    textAlign: 'center',
    borderBottom: '3px solid #2ecc71'
  },
  title: {
    margin: 0,
    fontSize: '36px',
    letterSpacing: '2px',
    color: '#fff',
    textShadow: '0 0 10px #2ecc71, 0 0 20px #2ecc71'
  },
  subtitle: {
    margin: '10px 0 0 0',
    color: '#bdc3c7',
    fontSize: '15px'
  }
};

export default App;