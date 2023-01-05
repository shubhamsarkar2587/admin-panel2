import { svgAssets } from "../../assets/asset";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="py-3 flex items-center">
      <div className="w-[280px] px-2.5 cursor-pointer">
        <img alt="app_logo" src={svgAssets.bigul} />
      </div>
      <div className="mx-5 flex grow items-center justify-between">
        <Searchbar />
        <div className="flex items-center">
          <button className="px-4 py-2.5 mx-2.5 rounded-[10px] bg-black text-white">+ Start KYC</button>
          <img className="mx-2.5 cursor-pointer" alt="notification" src={svgAssets.navbar.notification} />
          <img className="mx-2.5 cursor-pointer" alt="user_img" src={svgAssets.navbar.defaultUser} />
          <span className="ml-1.5 mr-5">Alex Dam</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
