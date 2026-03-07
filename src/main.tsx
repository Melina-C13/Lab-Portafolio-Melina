import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// El "!" le dice a TypeScript que garantizamos que el elemento existe
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)