import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider}from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
  
  </React.StrictMode>,
)
