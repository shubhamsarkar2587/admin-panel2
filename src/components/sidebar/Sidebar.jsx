import { svgAssets } from "../../assets/asset";

const Sidebar = () => {
  return (
    <div className="h-full py-5">
      <div className="px-2.5 mb-5 cursor-pointer">
        <img alt="app_logo" src={svgAssets.bigul} />
      </div>
      <div className="px-8">
        <ul>
          <li className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] bg-black text-white">
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span>Dashboard</span>
          </li>
          <li className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] hover:bg-black hover:text-white">
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span>Start KYC</span>
          </li>
          <li className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] hover:bg-black hover:text-white">
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span>E-sign Report</span>
          </li>
          <li className="flex flex-col mb-2.5">
            <div className="px-3 py-2.5 flex items-center justify-between cursor-pointer rounded-[10px] hover:bg-black hover:text-white">
              <div className="flex items-center">
                <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
                <span>Applications</span>
              </div>
              <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.rightArrow} />
            </div>
            <div className="flex justify-end">
              <ul>
                <li className="text-[#5367FC] mb-2.5 cursor-pointer hover:text-[#5367FC]">All Applications</li>
                <li className="cursor-pointer hover:text-[#5367FC]">Verified Applications</li>
              </ul>
            </div>
          </li>
          <li className="px-3 py-2.5 mb-2.5 flex items-center cursor-pointer rounded-[10px] hover:bg-black hover:text-white">
            <img className="mr-2.5" alt="kyc_image" src={svgAssets.dashboard.kyc} />
            <span>Start KYC</span>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
