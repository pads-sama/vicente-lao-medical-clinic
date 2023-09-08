import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'aos/dist/aos.css'; 
import App from './App';
import router from './router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)