import { Link } from "react-router-dom";
import { svgAssets } from "../../assets/asset";
import Searchbar from "./Searchbar";

const Navbar = ({ handleKycModel }) => {
  const handleStartKyc = () => {
    handleKycModel(true)
  }

  return (
    <div className="py-5 mb-[30px] w-full flex items-center z-50 fixed bg-[#F6F8F9]">
      <div className="w-[300px] px-[50px] cursor-pointer">
        <Link to="/">
          <img className="h-[40px]" alt="app_logo" src={svgAssets.bigul} />
        </Link>
      </div>
      <div className="mx-5 pr-2.5 flex grow items-center justify-between">
        <Searchbar />
        <div className="flex items-center">
          <button
            className="px-4 py-2.5 mx-2.5 rounded-[10px] bg-black text-white"
            onClick={() => handleStartKyc()}
          >
            + Start KYC
          </button>
          <img className="mx-2.5 cursor-pointer" alt="notification" src={svgAssets.navbar.notification} />
          <Link to="/login" className="flex items-center">
            <img className="mx-2.5 cursor-pointer" alt="user_img" src={svgAssets.navbar.defaultUser} />
            <span className="ml-1.5">Alex Dam</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
