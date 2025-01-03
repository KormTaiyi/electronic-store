import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import ProductCategory from "./Pages/ProductCategory";

export default function(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product_category" element={<ProductCategory/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}