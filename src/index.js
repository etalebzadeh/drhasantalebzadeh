import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./index.css";
import About from './pages/About';
import Abdo from './pages/services/Abdo';
import Article from './pages/articles/Article';
import './fonts/B-Nazanin.ttf'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/abdo",
    element: <Abdo />,
  },
  {
    path: "/surgeries",
    element: <Article />,
  },
  {
    path: "/articles",
    element: <Article />,
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

