import React, { useContext } from 'react';
import { MyContext } from '../components/MyContext';

function Page2() {
  const { value, count, theme } = useContext(MyContext);

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    color: theme === 'light' ? '#000' : '#eee',
    padding: '20px',
    minHeight: '100vh',
  };

  return (
    <div style={style}>
      <h2>Page 2</h2>
      <p>Context value: {value}</p>
      <p>Counter: {count}</p>
      <p>Theme: {theme}</p>
    </div>
  );
}

export default Page2;
