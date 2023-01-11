import BackBtn from "../../../components/common/BackBtn";
import ContinueBtn from "../../../components/common/ContinueBtn";
import InputIcon from "../../../components/InputIcon";
import OtpInput from "../../../components/OtpInput";

const VerifyMobileEmail = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">Mobile and Email Verification</div>
      <div className="mb-8 grid grid-cols-2 gap-10">
        <div className="flex flex-col ">
          <span className="mb-3">Mobile Number *</span>
          <InputIcon iconText="Send Link" />
        </div>
        <div className="flex flex-col">
          <span className="mb-3">Mobile OTP</span>
          <OtpInput />
        </div>
      </div>
      <div className="mb-20 grid grid-cols-2 gap-10">
        <div className="flex flex-col ">
          <span className="mb-3">Mobile Number *</span>
          <InputIcon iconText="Send Link" />
        </div>
        <div className="flex flex-col">
          <span className="mb-3">Mobile OTP</span>
          <OtpInput />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <BackBtn />
        <ContinueBtn />
      </div>
    </div>
  )
}

export default VerifyMobileEmail;