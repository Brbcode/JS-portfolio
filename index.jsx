import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import App from './src/App';
import ErrorElement from './src/components/ErrorElement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App><ErrorElement /></App>,
    children: [
      /* {
        path: 'contacts',
        element: <p>test</p>,
      }, */
    ],
  },
]);

const root = document.getElementById('root');
root.classList.add('flex', 'flex-column');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
