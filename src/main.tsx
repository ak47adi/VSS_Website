import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import UnderConstruction from './components/UnderConstruction.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnderConstruction />
  </StrictMode>,
)

// Commented out for maintenance mode
// <App />

// Remove the SSR-less boot loader once app is mounted
const bootLoader = document.getElementById('app-initial-loader')
if (bootLoader && bootLoader.parentElement) {
  bootLoader.parentElement.removeChild(bootLoader)
}
