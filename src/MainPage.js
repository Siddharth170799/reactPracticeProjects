


import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <button style={styles.startButton} onClick={() => navigate('/Quiz')}>
        Start Quiz
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  startButton: {
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  startButtonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
};

export default MainPage;
