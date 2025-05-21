import React, { useState, useEffect } from 'react';

export function Lifecycle() {
  const [name, setName] = useState('');
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    console.log(' Component Mounted');

    
    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  
  useEffect(() => {
    if (name) {
      console.log(` Component Updated - name changed to: ${name}`);
    }

    return () => {
      if (name) {
        console.log(` Cleaning up before next update - previous name: ${name}`);
      }
    };
  }, [name]);

  if (!showComponent) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Component is unmounted</h2>
        <button onClick={() => setShowComponent(true)}>Mount Again</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial' }}>
      <h1>React Lifecycle </h1>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', marginRight: '10px' }}
      />
      <button onClick={() => setShowComponent(false)} style={{ padding: '10px' }}>
        Unmount Component
      </button>
      <p>{name ? `Hello, ${name}!` : 'Type something above to trigger update.'}</p>
    </div>
  );
}
