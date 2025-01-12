import "./ShowProduct.css"

import img1 from "../../assets/electronic-store-product-image-27-300x300.jpg"
import img2 from "../../assets/electronic-store-product-image-28-300x300.jpg"
import img3 from "../../assets/electronic-store-product-image-2-300x300.jpg"
import img4 from "../../assets/electronic-store-product-image-21-300x300.jpg"
import img5 from "../../assets/electronic-store-product-image-22-300x300.jpg"
import img6 from "../../assets/electronic-store-product-image-36-300x300.jpg"
import img7 from "../../assets/electronic-store-product-image-18-300x300.jpg"
import img8 from "../../assets/electronic-store-product-image-19-300x300.jpg"

const DiscountProduct = () => {
    const ProductList=[
      {
        id: 1,
        name: "",
        des: "Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        oldPrice: 49.00,
        newPrice: 44.00,
        image: img1,
      },
      {
        id: 2,
        name: "",
        des: "Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
        oldPrice: 249.00,
        newPrice: 219.00,
        image: img2,
      },
      {
        id: 3,
        name: "",
        des: "Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
        oldPrice: 229.00,
        newPrice: 209.00,
        image: img3,
      },
      {
        id: 4,
        name: "",
        des: "Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
        oldPrice: 699.00,
        newPrice: 659.00,
        image: img4,
      },
      {
        id: 5,
        name: "",
        des: "5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
        oldPrice: 1099,
        newPrice: 999,
        image: img5,
      },
      {
        id: 6,
        name: "",
        des: "5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
        oldPrice: 1299,
        newPrice: 1199,
        image: img6,
      },
      {
        id: 7,
        name: "",
        des: "13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
        oldPrice: 1499,
        newPrice: 1399,
        image: img7,
      },
      {
        id: 8,
        name: "",
        des: "15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
        oldPrice: 1029,
        newPrice: 999,
        image: img8,
      },
    ]
  return (
    <section>
      <div className="productCategory">
        {
          ProductList.map(({id,name,image,des,oldPrice,newPrice})=>(
            <div className="cardDiscount" key={id}>
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