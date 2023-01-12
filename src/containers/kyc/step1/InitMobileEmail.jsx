import CommonInput from "../../../components/common/CommonInput";
import ContinueBtn from "../../../components/buttons/ContinueBtn";

const InitMobileEmail = () => {
  return (
    <div className="w-full flex flex-col mb-10">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">Mobile and Email Verification</div>
      <div className="mb-8 grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <span className="mb-3">Mobile Number *</span>
          <CommonInput />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <span className="mb-3">Email Id *</span>
          <CommonInput />
        </div>
      </div>
    </div>
  )
}

export default InitMobileEmail;