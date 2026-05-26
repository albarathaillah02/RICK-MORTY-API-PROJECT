import { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import LoadingSpinner from './LoadingSpinner';
// Mengambil data dari file json lokal yang baru kamu salin
import localData from '../characters.json';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = () => {
    setLoading(true);
    setError(null);
    try {
      // Langsung mengambil array dari properti 'results' di file JSON lokal
      setCharacters(localData.results);
    } catch (err) {
      setError('Gagal memuat data karakter dari file lokal.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Logika fitur pencarian karakter berdasarkan nama
  const filteredCharacters = characters.filter(char =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;
  if (error) return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <p style={{ color: '#e74c3c', fontSize: '16px', marginBottom: '1.5rem' }}>{error}</p>
      <button onClick={fetchCharacters} style={styles.retryButton}>Coba Lagi</button>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Input Pencarian Otomatis */}
      <input
        type="text"
        placeholder="Cari nama karakter (misal: Rick, Morty, Summer, Jerry)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '1.5rem' }}>
        Menampilkan {filteredCharacters.length} dari {characters.length} karakter terpopuler
      </p>

      {/* Grid Layout Tampilan Card */}
      <div style={styles.grid}>
        {filteredCharacters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem 1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  searchInput: {
    width: '100%',
    padding: '14px',
    marginBottom: '0.5rem',
    border: '2px solid #333',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: '#222',
    color: '#fff',
    boxSizing: 'border-box'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '2rem',
  },
  retryButton: {
    padding: '10px 20px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};