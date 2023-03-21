import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Adopt from './Pages/Adopt';
import About from './Pages/About';
import Home from './Pages/Home';
import Error from './Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/AdoptDog',
        element: <Home />,
      },
      {
        path: '/AdoptDog/Adopt',
        element: <Adopt />,
      },
      {
        path: '/AdoptDog/About',
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
