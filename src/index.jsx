import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App><Home /></App>,
    errorElement: <App />,
    children: [
      {
        path: 'projects',
        element: <p>test</p>,
      },
    ],
  },
]);

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
