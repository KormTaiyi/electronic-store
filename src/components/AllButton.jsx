import { Link } from "react-router"
import { HiOutlineShoppingBag } from "react-icons/hi2";

export function ShopNow(){
    return(
        <>
            <Link to="" style={{fontSize:'16px', color:"#0673F0" }}>Shop Now</Link>
        </>
    )
}

export function AddtoCard(){
    const handleClick=()=>{
        
    }
    return(
        <>
            <HiOutlineShoppingBag onClick={handleClick} style={{fontSize: "22px", cursor:"pointer"}}/>
        </>
    )
}

export function OutofStock(){
    return(
        <>
        </>
    )
}