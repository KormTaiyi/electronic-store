import HeadCom from "./components/HeadCom"
import FootCom from "./components/FootCom"
import HeroSection from "./components/home/HeroSection"
import ChooseUs from "./components/home/ChooseUs"
import ShowProductCategory from "./components/home/ShowProductCategory"
import DiscountProduct from "./components/home/DiscountProduct"

const App = () => {
  return (
    <div style={{backgroundColor: "whitesmoke"}}>
      <HeadCom/>
      <HeroSection/>
      <ChooseUs/>
      <ShowProductCategory/>
      <DiscountProduct/>
      <FootCom/>
    </div>
  )
}

export default App