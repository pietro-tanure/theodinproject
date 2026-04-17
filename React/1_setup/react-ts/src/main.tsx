import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Greetings from './Greetings.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Greetings />
  </StrictMode>,
)
