import BackBtn from "../../../components/common/BackBtn";
import CommonInput from "../../../components/common/CommonInput";
import ContinueBtn from "../../../components/common/ContinueBtn";
import SelectItem from "../../../components/common/SelectItem";

const OccupationDetail = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">Bank Details</div>
      <div className="grid grid-cols-2 gap-10 items-end mb-8">
        <div className="flex flex-col">
          <span className="mb-3">Marital Status *</span>
          <SelectItem height={'47px'} placeholder="Please select marital status" />
        </div>
        <div className="flex flex-col">
          <span className="mb-3">Father’s/Spouse Name *</span>
          <CommonInput placeholder="Please enter father’s/spouse name" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 items-end mb-8">
        <div className="flex flex-col">
          <span className="mb-3">Gender *</span>
          <SelectItem height={'47px'} placeholder="Please select marital status" />
        </div>
        <div className="flex flex-col">
          <span className="mb-3">Please enter father’s/spouse name</span>
          <CommonInput placeholder="Please enter father’s/spouse name" />
        </div>
      </div>
      <div className="w-full flex items-end mb-20">
        <div className="w-full flex flex-col">
          <span className="mb-3">Nationality</span>
          <CommonInput isDisable={true} placeholder="Indian" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <BackBtn />
        <ContinueBtn />
      </div>
    </div>
  )
}

export default OccupationDetail;
