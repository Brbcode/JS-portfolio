import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App><NotFound /></App>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'projects',
        element: <p>To do</p>,
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
