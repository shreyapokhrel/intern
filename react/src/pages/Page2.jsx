import React from 'react';
import { useAppContext } from '../components/MyContext';

function Page2() {
  const { value, count, theme } = useAppContext();

  const style = {
    background: theme === 'light' ? '#eaf1f8' : '#1c1c1c',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '30px',
    transition: 'all 0.4s ease',
  };

  const card = {
    background: theme === 'light' ? '#ffffff' : '#2a2a2a',
    borderRadius: '16px',
    padding: '20px',
    maxWidth: '500px',
    margin: 'auto',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  };

  return (
    <div style={style}>
      <div style={card}>
        <h2>📄 Page 2 </h2>
        <p><strong>Shared Value:</strong> {value}</p>
        <p><strong>Counter:</strong> {count}</p>
        <p><strong>Theme:</strong> {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}</p>
      </div>
    </div>
  );
}

export default Page2;
