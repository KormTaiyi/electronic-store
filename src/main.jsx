import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter ,Routes , Route } from 'react-router'
import ContactPage from './pages/ContactPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/contact' element={<ContactPage/>}/>
        {/* <Route path='' element={}/>
        <Route path='*' element={}/> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
