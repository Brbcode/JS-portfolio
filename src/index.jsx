import React from 'react';
import { createRoot } from 'react-dom/client';
import ResponsiveImage from './components/ResponsiveImage';

const testSet = {
  name: 'programmer-desk',
  sizes: [300, 768, 1280],
  extension: 'png',
};

function App() {
  return (
    <>
      <h1>React App</h1>
      <ResponsiveImage set={testSet} />
    </>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);
