import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import indexRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <RouterProvider router={indexRoutes} /> */}
    <RouterProvider router={indexRoutes} />
  </React.StrictMode>
);
