import { Outlet } from "react-router"
import FootCom from "../components/FootCom"
import HeadCom from "../components/HeadCom"

const MainLayoutProduct = () => {
  return (
    <div>
        <HeadCom/>  
        <div style={{display:"grid", gridColumn: "12"}}>
            <div style={{}}>

            </div>
            <div style={{}}>
                <Outlet/>
            </div>
            <div style={{}}>

            </div>
        </div>
        <FootCom/>
    </div>
  )
}

export default MainLayoutProduct