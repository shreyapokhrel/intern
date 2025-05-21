import React, { useState } from 'react';

export function FunctionalGreeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Functional Component</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}
