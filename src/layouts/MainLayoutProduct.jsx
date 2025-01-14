import { Outlet } from "react-router";
import FootCom from "../components/FootCom";
import HeadCom from "../components/HeadCom";
import LeftSide from "../components/LeftSide";

const MainLayoutProduct = () => {
  return (
    <div>
      <HeadCom />
      <div style={{ display: "grid", gridTemplateColumns: "4fr 8fr"}}>
        <div>
          <LeftSide style={{}} />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <FootCom />
    </div>
  );
};

export default MainLayoutProduct;
