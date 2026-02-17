import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Body from './Body.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Body/>
  </StrictMode>,
)
