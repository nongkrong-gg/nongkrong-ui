import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Modal from 'react-modal';
import Darkmode from 'darkmode-js';
import 'normalize.css/normalize.css';
import 'utilities/reset.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@splidejs/react-splide/css'; // eslint-disable-line import/no-unresolved
import 'utilities/index.scss';
import { DarkModeContext } from 'contexts';
import {
  Register,
  Login,
  Homepage,
  Create,
  Success,
  Event,
} from 'pages';
import reportWebVitals from './reportWebVitals';

Modal.setAppElement('#root');
const darkmode = new Darkmode({ autoMatchOsTheme: false });

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
  {
    path: '/',
    element: (
      <Homepage />
    ),
  },
  {
    path: '/wacana',
    element: (
      <Create />
    ),
  },
  {
    path: '/success',
    element: (
      <Success />
    ),
  },
  {
    path: '/wacana/:event_id',
    element: (
      <Event />
    ),
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContext.Provider value={darkmode}>
      <div className="body-parent">
        <div className="body">
          <RouterProvider router={router} />
        </div>
      </div>
    </DarkModeContext.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
