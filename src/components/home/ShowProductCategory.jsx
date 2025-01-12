import "./ShowProduct.css"

import img1 from "../../assets/electronic-store-category-image-06.jpg"
import img2 from "../../assets/electronic-store-category-image-08.jpg"
import img3 from "../../assets/electronic-store-category-image-02.jpg"
import img4 from "../../assets/electronic-store-category-image-07.jpg"
import img5 from "../../assets/electronic-store-category-image-05.jpg"
import img6 from "../../assets/electronic-store-category-image-03.jpg"
import img7 from "../../assets/electronic-store-category-image-04.jpg"
import img8 from "../../assets/electronic-store-category-image-01.jpg"

const ShowProductCategory = () => {
  const ProductList=[
    {
      id: 1,
      name: "Air conditioner",
      image: img1,
    },
    {
      id: 2,
      name: "Audio & video",
      image: img2,
    },
    {
      id: 3,
      name: "Gadgets",
      image: img3,
    },
    {
      id: 4,
      name: "Home appliances",
      image: img4,
    },
    {
      id: 5,
      name: "Kitchen appliances",
      image: img5,
    },
    {
      id: 6,
      name: "PCs & laptop",
      image: img6,
    },
    {
      id: 7,
      name: "Refrigerator",
      image: img7,
    },
    {
      id: 8,
      name: "Smart home",
      image: img8,
    },
  ]
  return (
     <section>
      <div className="productCategory">
        {
          ProductList.map(({id,name,image})=>(
            <div className="cardCategory" key={id}>
              <img src={image} alt="" />
              <h3>{name}</h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ShowProductCategory