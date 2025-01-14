import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ContactPage from './pages/ContactPage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"
import ShowAllProduct from "./pages/ShowAllProduct"
import MainLayoutProduct from './layouts/MainLayoutProduct.jsx'
import ProductCategoryPage from './pages/ProductCategoryPage.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:"/",
        element: <HomePage/>
      },
      {
        path: "contact",
        element: <ContactPage/>
      },
      {
        path: "product",
        element: <ShowAllProduct/>
      },
    ],
    errorElement: <ErrorPage/>
  },
  {
    path: "/",
    element: <MainLayoutProduct/>,
    children:[
      {
        path:"/product_type",
        element: <ProductCategoryPage/>
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
