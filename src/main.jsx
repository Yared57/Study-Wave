import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Documentreader from './DocumentRender'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Documentreader/>
  </StrictMode>,
)
