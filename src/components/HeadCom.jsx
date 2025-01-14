import "./style.css"
import logo from "../assets/electronic-store-logo.svg"
import { Link } from "react-router"
import { FaShoppingBag ,FaBars } from "react-icons/fa";
import { useState } from "react";

const HeadCom = () => {
    const [isOpen , setIsOpen] = useState(false);
    const handleInput=(e)=>{

    }
  return (
    <header className="Navigation">
        <div className="navHead">
            <div className="navLogo">
                <FaBars onClick={()=>{setIsOpen(!isOpen)}} className="toggle"/>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="navTop">
                <form action="">
                    <input type="text" placeholder="Search product..." onChange={handleInput}/>
                </form>
                <FaShoppingBag className="navIcon"/>
                <p className="navLogin">Login</p>
            </div>
        </div>
        <hr />
        <div className="navMenu">
            <ul type="none" className={isOpen ? "navItem active" : "navItem"} >
                <li><Link to="/product" className="navLink">All products</Link></li>
                <li><Link to="" className="navLink">Kitchen appliances</Link></li>
                <li><Link to="" className="navLink">Audio & Video</Link></li>
                <li><Link to="" className="navLink">Labtop</Link></li>
                <li><Link to="" className="navLink">Smart watchs</Link></li>
                <li><Link to="/contact" className="navLink">Contact us</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default HeadCom