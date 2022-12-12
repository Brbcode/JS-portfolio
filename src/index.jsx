import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Pages or Components
import App from './App';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home';
import Projects, { Project } from './pages/Projects';

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
        element: <Projects />,
      },
      {
        path: 'projects/:id',
        element: <Project />,
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
