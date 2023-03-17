import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Adopt from './Adopt';
import About from './About';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Adopt',
        element: <Adopt />,
      },
      {
        path: '/About',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
