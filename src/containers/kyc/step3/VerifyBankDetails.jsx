import { useState } from 'react';
import { svgAssets } from "../../../assets/asset";
import BackBtn from '../../../components/buttons/BackBtn';
import CommonInput from '../../../components/common/CommonInput';
import ContinueBtn from '../../../components/buttons/ContinueBtn';
import VerifyBtn from '../../../components/buttons/VerifyBtn';
import SearchIfcDialog from "../../../components/dialog/SearchIfcDialog";

const VerifyBankDetails = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleKycModel = (condition) => {
    if (condition) {
      setIsModelOpen(true)
    } else {
      setIsModelOpen(false)
    }
  }

  return (
    <div className="w-full flex flex-col">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">Bank Details</div>
      <div className="grid grid-cols-2 gap-10 items-end mb-8">
        <div className="flex flex-col">
          <span className="mb-3">IFSC *</span>
          <CommonInput />
        </div>
        <div className="flex items-center">
          <span className="mr-[26px]">OR</span>
          <button
            className="h-[47px] px-5 flex items-center rounded-[10px] leading-6 text-white bg-black"
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
          <CommonInput />
        </div>
        <div className="flex flex-col">
          <span className="mb-3">Bank Account Number *</span>
          <CommonInput />
        </div>
      </div>
      <div className="mb-20 flex items-center justify-center">
        <VerifyBtn />
      </div>
      <div className="flex items-center justify-between">
        <BackBtn />
        <ContinueBtn />
      </div>
      <SearchIfcDialog isModalOpen={isModelOpen} handleKycModel={handleKycModel} />
    </div>
  )
}

export default VerifyBankDetails;