import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

const basename = "/Prism-Admin-Dashboard/";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}> 
      <App />
    </BrowserRouter>
  </StrictMode>,
)
