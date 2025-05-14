import React, { useState, useEffect } from 'react';

export function Mounting() {
  const [message, setMessage] = useState('Please wait...');

  useEffect(() => {
    console.log('Component Mounted');

    const timer = setTimeout(() => {
      setMessage('👋 Welcome to My React App!');
    }, 2000);

    return () => {
      clearTimeout(timer);
      console.log('Component Unmounted');
    };
  }, []);

  console.log('Rendering component...');

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial' }}>
      <h1>{message}</h1>
    </div>
  );
}
