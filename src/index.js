import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css/normalize.css';
import 'utilities/reset.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@splidejs/react-splide/css'; // eslint-disable-line import/no-unresolved
import 'utilities/index.scss';
import { Register, Login } from 'pages';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/register',
    element: (
      <Register />
    ),
  },
  {
    path: '/login',
    element: (
      <Login />
    ),
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="body-parent">
      <div className="body">
        <canvas className="canvas" />
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
