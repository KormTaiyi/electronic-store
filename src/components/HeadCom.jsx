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
                <img src={logo} alt="" />
            </div>
            <form action="">
                <input type="text" placeholder="Search product..." onChange={handleInput}/>
            </form>
        </div>
        <hr />
        <div className="navMenu">
            <ul type="none" className={isOpen ? "navItem active" : "navItem"} >
                <li><Link to="" className="navLink">All products</Link></li>
                <li><Link to="" className="navLink">Kitchen appliances</Link></li>
                <li><Link to="" className="navLink">Audio & Video</Link></li>
                <li><Link to="" className="navLink">Labtop</Link></li>
                <li><Link to="" className="navLink">Smart watchs</Link></li>
            </ul>
            <ul type="none" className="navItem">
                <li className="navIcon"><FaShoppingBag/></li>
                <li className="navLogin">Login</li>
            </ul>
        </div>
    </header>
  )
}

export default HeadCom