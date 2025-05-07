import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AdventureProvider } from './Components/UI/AdventureContext.tsx'
import { createBrowserRouter, redirect } from 'react-router'

let router = createBrowserRouter([
  {
    path:"/",
    Component : App,
    children:[
      {path: "venture", Component: VenturePage},
      {index: true, loader: () => redirect("/venture")},
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdventureProvider>
      <App />
    </AdventureProvider>
  </StrictMode>,
)
