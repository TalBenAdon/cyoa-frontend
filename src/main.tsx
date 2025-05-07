import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AdventureProvider } from './Components/UI/AdventureContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdventureProvider>
      <App />
    </AdventureProvider>
  </StrictMode>,
)
