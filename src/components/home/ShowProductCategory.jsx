import "./ShowProduct.css"
import ListProductData from "../../components/data";

const ShowProductCategory = () => {
  const filterCategory = ListProductData.filter((ft)=>{
    return ft.productType === "showCategory";
  })
  return (
     <section>
      <div className="productCategory">
        {
          filterCategory.map(({id,title,image})=>(
            <div className="cardCategory" key={id}>
              <img src={image} alt="" />
              <h3>{title}</h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ShowProductCategory