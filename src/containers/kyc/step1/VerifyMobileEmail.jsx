import { InputBtnIcon } from '../../../components/inputs/InputBtnIcon';
import { OtpInput } from '../../../components/inputs/OtpInput';

const VerifyMobileEmail = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<div className="mb-[22px] font-medium text-lg leading-[27px]">Mobile and Email Verification</div>
			<div className="mb-8 grid grid-cols-2 gap-10">
				<div className="flex flex-col ">
					<span className="mb-3">Mobile Number *</span>
					<InputBtnIcon btnText="Send Link" />
				</div>
				<div className="flex flex-col">
					<span className="mb-3">Mobile OTP</span>
					<OtpInput />
				</div>
			</div>
			<div className="grid grid-cols-2 gap-10">
				<div className="flex flex-col ">
					<span className="mb-3">Mobile Number *</span>
					<InputBtnIcon btnText="Send Link" />
				</div>
				<div className="flex flex-col">
					<span className="mb-3">Mobile OTP</span>
					<OtpInput />
				</div>
			</div>
		</div>
	);
};

export default VerifyMobileEmail;
