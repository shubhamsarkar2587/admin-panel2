import BackBtn from "../../../components/buttons/BackBtn"
import CommonInput from "../../../components/common/CommonInput"
import ContinueBtn from "../../../components/buttons/ContinueBtn"
import SelectItem from "../../../components/common/SelectItem"
import Declaration from "./Declaration"
import Checkbox from "../../../components/common/Checkbox"

const BrokerageDetails = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full mb-[22px] text-[#323232] leading-[27px] font-medium text-lg">Brokerage Details</div>
      <div className="w-full mb-8 grid grid-cols-5 gap-7">
        <div className="w-full col-span-3 flex flex-col">
          <span className="mb-3">Brokerage Scheme</span>
          <SelectItem />
        </div>
        <div className="w-full col-span-2 flex flex-col">
          <span className="mb-3">DP Tariff</span>
          <SelectItem />
        </div>
      </div>
      <div>
        <div className="mb-[22px] text-[#323232] leading-[27px] font-medium text-lg">Declaration & Preferences</div>
        <Declaration />
      </div>
      <div className="w-full mb-8 grid grid-cols-2 gap-7">
        <div className="flex flex-col">
          <SelectItem />
        </div>
        <div className="flex flex-col">
          <SelectItem />
        </div>
      </div>
      <div className="mb-20">
        <div className="mb-[17px] text-[#323232] leading-[27px] font-medium text-lg">Terms & Conditions</div>
        <Checkbox
          labelText="I have understood the information requirements of this form and hereby confirm and accept that the information provided by me on this
          form is true and correct and complete for the purpose of the demat debit and  pledge instruction."
          labelWidth="90%"
        />
      </div>
    </div>
  )
}

export default BrokerageDetails