import React, { useContext } from 'react';
import { MyContext } from '../components/MyContext';

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
  } = useContext(MyContext);

  const pageStyle = {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    minHeight: '100vh',
  };

  return (
    <div style={pageStyle}>
      <h2>Page 1</h2>
      <p>Value: {value}</p>
      <button onClick={() => updateValue('Updated from Page 1')}>
        Update Value
      </button>

      <h3>Counter: {count}</h3>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>

      <h3>Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <br /><br />
      <button onClick={resetAll}>Reset All</button>
    </div>
  );
}

export default Page1;
