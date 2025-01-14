import HeroSection from "../components/home/HeroSection"
import ChooseUs from "../components/home/ChooseUs"
import ShowProductCategory from "../components/home/ShowProductCategory"
import DiscountProduct from "../components/home/DiscountProduct"

const HomePage = () => {
  return (
    <div style={{backgroundColor: "whitesmoke"}}>
      <HeroSection/>
      <ChooseUs/>
      <ShowProductCategory/>
      <DiscountProduct/>
    </div>
  )
}

export default HomePage