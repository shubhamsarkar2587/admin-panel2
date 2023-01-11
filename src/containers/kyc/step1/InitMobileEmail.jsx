import CommonInput from "../../../components/common/CommonInput";
import ContinueBtn from "../../../components/common/ContinueBtn";

const InitMobileEmail = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">Mobile and Email Verification</div>
      <div className="mb-8 grid grid-cols-2 gap-7">
        <div className="flex flex-col">
          <span className="mb-3">Mobile Number *</span>
          <CommonInput />
        </div>
      </div>
      <div className="mb-20 grid grid-cols-2 gap-7">
        <div className="flex flex-col">
          <span className="mb-3">Email Id *</span>
          <CommonInput />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <ContinueBtn />
      </div>
    </div>
  )
}

export default InitMobileEmail;