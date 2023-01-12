import { useState } from "react";
import { svgAssets } from "../../assets/asset";

const Sidebar = ({ handleKycModel }) => {

  const [sidebarState, SetSidebarState] = useState({
    dashboard: false,
    startKyc: false,
    eSignReport: false,
    application: false,
    downloadForms: false,
    linkAadhar: false,
    settings: false,
    logout: false
  })

  const handleMouseOver = () => {
    console.log('dfd')
  }

  const handleMouseOut = () => {
    console.log('dfd344')
  }

  return (
      <div className="min-w-[300px] h-[calc(100vh-115px)] mt-[115px] px-[50px] py-5 fixed">
        <ul className="w-full grow">
          <li
            className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] bg-black text-white"
            onMouseOver={() => handleMouseOver()}
            onMouseOut={() => handleMouseOut()}
          >
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span>Dashboard</span>
          </li>
          <li
            className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] hover:bg-black"
            onClick={() => handleKycModel(true)}
          >
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span className="text-[#808080] hover:text-white">Start KYC</span>
          </li>
          <li className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] hover:bg-black">
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span className="text-[#808080] hover:text-white">E-sign Report</span>
          </li>
          <li className="flex flex-col mb-2.5">
            <div className="px-3 py-2.5 flex items-center justify-between cursor-pointer rounded-[10px] hover:bg-black">
              <div className="flex items-center">
                <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
                <span className="text-[#808080] hover:text-white">Applications</span>
              </div>
              <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.rightArrow} />
            </div>
            <div className="px-3 mr-2.5 flex justify-end">
              <ul>
                <li className="text-[#5367FC] mb-2.5 cursor-pointer hover:text-[#5367FC]">All Applications</li>
                <li className="cursor-pointer mb-2.5 hover:text-[#5367FC]">Verified Applications</li>
                <li className="cursor-pointer mb-2.5 hover:text-[#5367FC]">Rejected Applications</li>
                <li className="cursor-pointer mb-2.5 hover:text-[#5367FC]">Pending Applications</li>
                <li className="cursor-pointer hover:text-[#5367FC]">Resubmitted</li>
              </ul>
            </div>
          </li>
          <li className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] hover:bg-black">
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span className="text-[#808080] hover:text-white">Download Forms</span>
          </li>
          <li className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] hover:bg-black">
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span className="text-[#808080] hover:text-white">Link Aadhar</span>
          </li>
          <li className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] hover:bg-black">
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span className="text-[#808080] hover:text-white">Settings</span>
          </li>
          <li className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] hover:bg-black">
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span className="text-[#808080] hover:text-white">Logout</span>
          </li>
        </ul>
      </div>
  )
}

export default Sidebar;
