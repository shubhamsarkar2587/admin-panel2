import BackBtn from "../../../components/buttons/BackBtn";
import CommonInput from "../../../components/common/CommonInput";
import ContinueBtn from "../../../components/buttons/ContinueBtn";
import SelectItem from "../../../components/common/SelectItem";

const OccupationDetail = () => {
  return (
    <div className="w-full flex flex-col mb-10">
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
      <div className="w-full flex items-end">
        <div className="w-full flex flex-col">
          <span className="mb-3">Nationality</span>
          <CommonInput isDisable={true} placeholder="Indian" />
        </div>
      </div>
    </div>
  )
}

export default OccupationDetail;
