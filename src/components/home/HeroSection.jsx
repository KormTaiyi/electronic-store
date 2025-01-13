import "./HeroAndChoose.css"
import 'animate.css';
import { ShopNow } from "../AllButton"
import img from "../../assets/electronic-store-brand-logo-00.png"

const HeroSection = () => {
  return (
    <div className="heroSection">
       <div className="heroSection-box animate__animated animate__fadeInTopRight animate__slow">
            <div className="hero_card">
                <img src={img} alt="" />
                <h1>The best home entertainment system is here</h1>
                <p>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.</p>
                <h2>{ ShopNow() }</h2>
            </div>
       </div>
    </div>
  )
}

export default HeroSection