import { pngAssets, svgAssets } from '../../../assets/asset';
import { MainTitle } from '../../../components/common/MainTitle';
import { InputBtnIcon } from '../../../components/inputs/InputBtnIcon';
import { OtpInput } from '../../../components/inputs/OtpInput';

export const VerifyMobileEmail = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Mobile and Email Verification" />
			<div className="mb-8 grid grid-cols-2 gap-10">
				<div className="flex flex-col ">
					<InputBtnIcon
						icon={pngAssets.kyc.mobileNumber}
						label="Mobile Number"
						isImportant={true}
						placeholder="Please enter mobile number"
						btnIcon={svgAssets.kyc.send}
						btnWidth="175px"
						btnText="Send OTP"
					/>
				</div>
				<div className="flex flex-col">
					<OtpInput
						label="Mobile OTP"
						isImportant={true}
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-10">
				<InputBtnIcon
					icon={pngAssets.kyc.mail}
					label="Email Id"
					isImportant={true}
					placeholder="Please enter email id"
					btnIcon={svgAssets.kyc.send}
					btnWidth="175px"
					btnText="Send OTP"
				/>
			</div>
		</div>
	);
};
