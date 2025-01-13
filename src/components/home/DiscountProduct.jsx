import "./ShowProduct.css"
import ListProductData from "../../components/data";

import { AddtoCard, OutofStock } from "../AllButton"

const DiscountProduct = () => {
  const filterProduct = ListProductData.filter((ft)=>{
    return ft.productType !== "showCategory";
  })
  return (
    <section>
      <div className="productCategory">
        {
          filterProduct.map(({id,name,image,des,oldPrice,newPrice,isStock})=>(
            <div className="cardDiscount" key={id}>
              {isStock==false ? OutofStock() : ""}
              <div className="hiddenIcon">{(isStock==true) ? AddtoCard()  : ""}</div>
              <img src={image} alt="" />
              <div className="cardText">
                <h1>{name}</h1>
                <h4>{des}</h4>
                <p><span>${oldPrice}</span> ${newPrice}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default DiscountProduct