import { pngAssets } from '../../../assets/asset';
import CommonInput from '../../../components/inputs/CommonInput';
import DatePickerInput from '../../../components/inputs/DatePickerInput';
import VerifyBtn from '../../../components/buttons/VerifyBtn';
import MainTitle from '../../../components/common/MainTitle';

const VerifyPan = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="PAN Details" />
			<div className="mb-10 grid grid-cols-2 gap-10 items-end">
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="PAN"
					isImportant={true}
					placeholder=""
				/>
				<DatePickerInput
					icon={pngAssets.kyc.mobileNumber}
					label="Date Of Birth"
					isImportant={true}
					placeholder="DD-MM-YYYY"
				/>
			</div>
			<div className="flex items-center justify-center">
				<VerifyBtn />
			</div>
		</div>
	);
};

export default VerifyPan;
