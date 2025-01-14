import { Outlet } from "react-router"
import FootCom from "../components/FootCom"
import HeadCom from "../components/HeadCom"

const MainLayout = () => {
  return (
    <>
        <HeadCom/>  
        <Outlet/>
        <FootCom/>
    </>
  )
}

export default MainLayout