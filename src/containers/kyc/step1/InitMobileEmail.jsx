import { pngAssets } from '../../../assets/asset';
import CommonInput from '../../../components/inputs/CommonInput';
import MainTitle from '../../../components/common/MainTitle';

const InitMobileEmail = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Mobile and Email Verification" />
			<div className="mb-8 grid grid-cols-2 gap-10">
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="Mobile Number"
					isImportant={true}
					placeholder="Please enter mobile number"
				/>
			</div>
			<div className="grid grid-cols-2 gap-10">
				<CommonInput
					icon={pngAssets.kyc.mail}
					label="Email Id"
					isImportant={true}
					placeholder="Please enter email id"
					inputMessage="Invalid Email !"
					inputMessageType="error"
				/>
			</div>
		</div>
	);
};

export default InitMobileEmail;
