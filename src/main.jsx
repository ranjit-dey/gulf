import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Rd from './Rd.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Rd /> */}
  </StrictMode>,
)
