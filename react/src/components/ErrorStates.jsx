import React, { useState } from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h3 style={{ color: 'red' }}>⚠️ Oops! The component crashed.</h3>;
    }
    return this.props.children;
  }
}

function BuggyComponent() {
  const [explode, setExplode] = useState(false);

  if (explode) {
    throw new Error("Component crashed!");
  }

  return (
    <div>
      <p>Everything is working fine.</p>
      <button onClick={() => setExplode(true)}>Crash Component</button>
    </div>
  );
}
export default function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
