import React, { useState } from 'react';
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};


const Custom = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Custom Hook</h1>
      <h2>{count}</h2>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement} style={{ margin: '0 10px' }}> Decrement</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
};

export default Custom;
