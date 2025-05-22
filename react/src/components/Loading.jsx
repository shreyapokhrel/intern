import React, { Suspense, useState } from 'react';
const LazyComponent = React.lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: () => <div>This is a lazily loaded component!</div>,
      });
    }, 2000); 
  })
);

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Lazy Loading</h1>
      <button onClick={() => setShow(true)}>Load Lazy Component</button>

      <Suspense fallback={<div>Loading component...</div>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}
