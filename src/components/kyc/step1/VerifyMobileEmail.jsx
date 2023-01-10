import { svgAssets } from "../../../assets/asset";

const VerifyMobileEmail = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">Mobile and Email Verification</div>
      <div className="mb-20 grid grid-cols-2 gap-10">
        <div>
          <div className="flex flex-col mb-8">
            <span className="mb-3">Mobile Number *</span>
            <div className="flex items-center">
              <input className="w-full px-4 py-3 text-[#989898] border border-solid border-[#DFDFDF] rounded-l-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]" placeholder="Please enter email id" />
              <button className="min-w-max py-3  px-3.5 flex items-center whitespace-nowrap rounded-r-[10px] text-white bg-black">
                <img className="mr-2.5" alt="send_link_img" src={svgAssets.kyc.sendLink} />
                <span>Send Link</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <span className="mb-3">Email Id *</span>
            <div className="flex items-center">
              <input className="w-full px-4 py-3 text-[#989898] border border-solid border-[#DFDFDF] rounded-l-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]" placeholder="Please enter email id" />
              <button className="min-w-max py-3  px-3.5 flex items-center whitespace-nowrap rounded-r-[10px] text-white bg-black">
                <img className="mr-2.5" alt="send_link_img" src={svgAssets.kyc.sendLink} />
                <span>Send Link</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-8">
            <span className="mb-3">Mobile OTP</span>
            <div className="flex items-center">
              <div className="grid grid-cols-6 gap-4 mr-3.5">
                <input
                  maxLength="1"
                  className="w-full px-4 py-3 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full px-4 py-3 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full px-4 py-3 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full px-4 py-3 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full px-4 py-3 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full px-4 py-3 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
              </div>
              <button className="min-w-max py-3 px-3.5 flex items-center whitespace-nowrap rounded-r-[10px] text-white bg-black">
                <img className="mr-2.5" alt="send_link_img" src={svgAssets.kyc.verify} />
                <span>Verify</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-8">
            <span className="mb-3">Email OTP</span>
            <div className="flex items-center">
              <div className="grid grid-cols-6 gap-4 mr-3.5">
                <input
                  maxLength="1"
                  className="w-full px-4 py-3 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full p-4 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full p-4 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full p-4 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full p-4 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
                <input
                  maxLength="1"
                  className="w-full p-4 text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                />
              </div>
              <button className="min-w-max py-3 px-3.5 flex items-center whitespace-nowrap rounded-r-[10px] text-white bg-black">
                <img className="mr-2.5" alt="send_link_img" src={svgAssets.kyc.verify} />
                <span>Verify</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="px-5 py-3 flex items-center rounded-[10px] leading-6 text-white bg-[rgba(180,186,189,0.38)]">
          <img className="mr-2" alt="back_icon" src={svgAssets.kyc.backIcon}/>
          <span>Back</span>
        </button>
        <button className="px-5 py-3 flex items-center rounded-[10px] leading-6	 text-white bg-black">
          <span className="mr-2">continue</span>
          <img alt="continue_icon" src={svgAssets.kyc.continueIcon}/>
        </button>
      </div>
    </div>
  )
}

export default VerifyMobileEmail;