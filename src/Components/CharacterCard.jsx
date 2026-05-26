export default function CharacterCard({ character }) {
  return (
    <div style={styles.card}>
      <img src={character.image} alt={character.name} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.name}>{character.name}</h3>
        <p style={styles.text}><strong>Spesies:</strong> {character.species}</p>
        <p style={styles.text}>
          <strong>Status:</strong> {character.status === 'Alive' ? '🟢 Alive' : character.status === 'Dead' ? '🔴 Dead' : '⚪ Unknown'}
        </p>
        <p style={styles.text}><strong>Gender:</strong> {character.gender}</p>
        <p style={styles.text}><strong>Asal:</strong> {character.origin.name}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#2c3e50',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
    color: 'white',
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: '240px',
    objectFit: 'cover',
  },
  info: {
    padding: '1.2rem',
  },
  name: {
    margin: '0 0 0.6rem 0',
    color: '#2ecc71',
    fontSize: '18px',
  },
  text: {
    margin: '0.4rem 0',
    fontSize: '14px',
    color: '#bdc3c7',
  }
};