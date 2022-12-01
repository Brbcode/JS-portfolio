import React from 'react';
import { createRoot } from 'react-dom/client';
import ResponsiveImage from './components/ResponsiveImage';

const programmerDesk = require.context('../public/img/sets/', true, /programmer-desk-(300|768|1280)w\.png$/);

function App() {
  return (
    <>
      <h1>React App</h1>
      <p>Test</p>
      <hr />
      <ResponsiveImage loader={programmerDesk} alt="Hola mundo" />
    </>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);
