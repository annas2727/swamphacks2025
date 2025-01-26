import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
      <App />
  </StrictMode>
=======
      return (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  )
  </StrictMode>,
>>>>>>> 48178c19ea12d24de7d02f41fef04417baf669e0
)
