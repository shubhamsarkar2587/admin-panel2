import { useState } from 'react';
import { svgAssets } from "../../../assets/asset";
import SearchIfcDialog from "../../dialog/SearchIfcDialog";

const VerifyBankDetails = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleKycModel = (condition) => {
    if (condition) {
      setIsModelOpen(true)
    } else {
      setIsModelOpen(false)
    }
  }

  console.log(isModelOpen)

  return (
    <div className="w-full flex flex-col">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">Bank Details</div>
      <div className="grid grid-cols-2 gap-10 items-end mb-8">
        <div className="flex flex-col">
          <span className="mb-3">IFSC *</span>
          <input
            className="px-4 py-3 text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
            placeholder="Please enter ifsc"
          />
        </div>
        <div className="flex items-center">
          <span className="mr-[26px]">OR</span>
          <button
            className="px-5 py-3 flex items-center rounded-[10px] leading-6 text-white bg-black"
            onClick={() => handleKycModel(true)}
          >
            <img className="mr-2 text-xl leading-[30px] font-semibold" alt="back_icon" src={svgAssets.kyc.verify} />
            <span>Search IFSC</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 items-end mb-10">
        <div className="flex flex-col">
          <span className="mb-3">Bank Account Number *</span>
          <input
            className="px-4 py-3 text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
            placeholder="Please enter bank a/c number"
          />
        </div>
        <div className="flex flex-col">
          <span className="mb-3">Bank Account Number *</span>
          <input
            className="px-4 py-3 text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
            placeholder="Please enter confirm bank a/c number"
          />
        </div>
      </div>
      <div className="mb-20 flex items-center justify-center">
        <button className="px-5 py-3 flex items-center rounded-[10px] leading-6 text-white bg-black">
          <img className="mr-2" alt="back_icon" src={svgAssets.kyc.verify} />
          <span>Verify</span>
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button className="px-5 py-3 flex items-center rounded-[10px] leading-6 text-white bg-[rgba(180,186,189,0.38)]">
          <img className="mr-2" alt="back_icon" src={svgAssets.kyc.backIcon} />
          <span>Back</span>
        </button>
        <button className="px-5 py-3 flex items-center rounded-[10px] leading-6	 text-white bg-black">
          <span className="mr-2">continue</span>
          <img alt="continue_icon" src={svgAssets.kyc.continueIcon} />
        </button>
      </div>
      <SearchIfcDialog isModalOpen={isModelOpen} handleKycModel={handleKycModel} />
    </div>
  )
}

export default VerifyBankDetails;