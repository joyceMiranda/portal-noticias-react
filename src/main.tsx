import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import React from 'react'
import rotas from './rotas'

createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>

)
