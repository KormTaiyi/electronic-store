import { Link } from "react-router"
import logo from "../assets/electronic-store-logo-mono.svg"
import "./style.css"

const FootCom = () => {
  return (
    <footer>
      <div className="footer">
          <img src={logo} alt="" />
          <div className="footSide">
            <ul type="none" className="footItem">
              <h1>Link</h1>
              <li className="footList"><Link to="/" className="footLink">Home</Link></li>
              <li className="footList"><Link to="/contact" className="footLink">Contact</Link></li>
              <li className="footList"><Link to=" " className="footLink">Privacy</Link></li>
            </ul>
            <ul type="none" className="footItem">
              <h1>Shop</h1>
              <li className="footList"><Link to="/product" className="footLink">All products</Link></li>
              <li className="footList"><Link to=" " className="footLink">Kitchen appliances</Link></li>
              <li className="footList"><Link to=" " className="footLink">Audio & Video</Link></li>
              <li className="footList"><Link to=" " className="footLink">Labtop</Link></li>
              <li className="footList"><Link to=" " className="footLink">Smart watchs</Link></li>
            </ul>
            <ul type="none" className="footItem">
              <h1>Address</h1>
              <li className="footAdd">2011st, Kok Kleang,<br /> Sen Sok, Phnom Penh</li>
            </ul>
          </div>
      </div>
    </footer>
  )
}

export default FootCom