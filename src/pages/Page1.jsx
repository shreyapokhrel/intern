import React from 'react';
import { useAppContext } from '../components/MyContext';

function Page1() {
  const {
    value,
    updateValue,
    count,
    increment,
    decrement,
    theme,
    toggleTheme,
    resetAll,
  } = useAppContext();

  const style = {
    background: theme === 'light' ? '#f9f9f9' : '#1e1e1e',
    color: theme === 'light' ? '#111' : '#f9f9f9',
    minHeight: '100vh',
    padding: '30px',
    transition: 'all 0.4s ease',
  };

  const cardStyle = {
    background: theme === 'light' ? '#fff' : '#2c2c2c',
    borderRadius: '16px',
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    boxShadow: theme === 'light' ? '0 4px 12px rgba(0,0,0,0.1)' : '0 4px 12px rgba(255,255,255,0.05)',
    transition: 'all 0.4s ease',
  };

  const btnStyle = {
    padding: '10px 16px',
    margin: '4px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: theme === 'light' ? '#007bff' : '#444',
    color: '#fff',
    transition: 'all 0.2s',
  };

  const warning = count >= 10 ? { color: 'red' } : {};

  return (
    <div style={style}>
      <div style={cardStyle}>
        <h2>🚀 Page 1</h2>

        <label>Update Value:</label>
        <input
          value={value}
          onChange={(e) => updateValue(e.target.value)}
          placeholder="Type something..."
          style={{
            padding: '8px',
            width: '100%',
            margin: '10px 0',
            borderRadius: '6px',
            border: '1px solid #ccc',
            background: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
          }}
        />
        <small>{value.length} characters</small>

        <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Value: {value}</p>

        <h3 style={warning}>Count: {count}</h3>
        <button
          style={btnStyle}
          onClick={increment}
          disabled={count >= 10}
          title={count >= 10 ? 'Max count reached' : ''}
        >
           Increment
        </button>
        <button
          style={btnStyle}
          onClick={decrement}
          disabled={count <= 0}
        >
          Decrement
        </button>

        <h3>Theme: {theme === 'light' ? '🌞 Light' : '🌙 Dark'}</h3>
        <button style={btnStyle} onClick={toggleTheme}>
          Toggle Theme
        </button>

        <hr style={{ margin: '20px 0' }} />
        <button
          style={{
            ...btnStyle,
            backgroundColor: '#dc3545',
          }}
          onClick={resetAll}
        >
          🔄 Reset All
        </button>
      </div>
    </div>
  );
}

export default Page1;
