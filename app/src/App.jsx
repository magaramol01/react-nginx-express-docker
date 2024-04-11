import { useState, useEffect } from 'react';
import './App.css'; // Assuming you have an App.css file for global styles

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('There was an error fetching the data:', error));
  }, []);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <header className="App-header" style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        Welcome to Our Website
      </header>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', display: 'inline-block' }}>
        <p style={{ fontSize: '20px', color: '#333' }}>
          Message from the server:
        </p>
        <p style={{ fontSize: '16px', color: '#666', marginTop: '10px', fontStyle: 'italic' }}>
          {message || 'Loading...'}
        </p>
      </div>
    </div>
  );
}

export default App;
