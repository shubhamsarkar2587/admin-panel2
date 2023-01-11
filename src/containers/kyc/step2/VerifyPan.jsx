import BackBtn from '../../../components/buttons/BackBtn';
import CommonInput from '../../../components/common/CommonInput';
import ContinueBtn from '../../../components/buttons/ContinueBtn';
import DatePickerInput from '../../../components/inputs/DatePickerInput';
import VerifyBtn from '../../../components/buttons/VerifyBtn';

const VerifyPan = () => {

  return (
    <div className="w-full flex flex-col">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">PAN Details</div>
      <div className="mb-8 grid grid-cols-2 gap-10">
        <div className="flex flex-col mb-8">
          <span className="mb-3">PAN *</span>
          <CommonInput placeholder="Please enter PAN" />
        </div>
        <div className="flex flex-col mb-8">
          <span className="mb-3">Date Of Birth *</span>
          <DatePickerInput />
        </div>
      </div>
      <div className="mb-20 flex items-center justify-center">
        <VerifyBtn />
      </div>
      <div className="flex items-center justify-between">
        <BackBtn />
        <ContinueBtn />
      </div>
    </div>
  )
}

export default VerifyPan