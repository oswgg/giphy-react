import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './assets/main.css'
import App from './App'
import React from 'react'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
)
