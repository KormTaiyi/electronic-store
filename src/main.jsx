import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter ,Routes , Route } from 'react-router'
import ContactPage from './pages/ContactPage.jsx'
import ShowAllProduct from './pages/ShowAllProduct'
import MainLayout from "./components/MainLayout"
import ProductCategoryPage from './pages/ProductCategoryPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<MainLayout/>}>
          <Route index element={<App />}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='product' element={<ShowAllProduct/>}/>
          <Route path='product_category' element={<ProductCategoryPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
