import "./HeroAndChoose.css"
import { AiFillMessage} from "react-icons/ai";
import { FaArrowRotateLeft,FaCreditCard,FaTruck } from "react-icons/fa6";

const ChooseUs = () => {
  return (
    <div className="choose_us">
        <div className="choose-side">
            <div className="choose-us-box">
                <FaTruck className="choose-icon"/>
                <div>
                    <h5>Free shipping</h5>
                    <p>When you spend $80 or more</p>
                </div>
            </div>
            <div className="choose-us-box">
                <AiFillMessage className="choose-icon"/>
                <div>
                    <h5>We are available 24/7</h5>
                    <p>Need help? contact us anytime</p>
                </div>
            </div>
        </div>
        <div className="choose-side">
            <div className="choose-us-box">
                <FaArrowRotateLeft className="choose-icon"/>
                <div>
                    <h5>Satisfied or return</h5>
                    <p>Easy 30-day return policy</p>
                </div>
            </div>
            <div className="choose-us-box">
                <FaCreditCard className="choose-icon"/>
                <div>
                    <h5>100% secure payments</h5>
                    <p>Visa, Mastercard, Stripe, PayPal</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs