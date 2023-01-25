import { pngAssets } from '../../../assets/asset';
import { CommonInput } from '../../../components/inputs/CommonInput';
import { SelectItem } from '../../../components/common/SelectItem';
import { MainTitle } from '../../../components/common/MainTitle';

const OccupationDetail = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Personal Details" />
			<div className="grid grid-cols-2 gap-10 items-end mb-8">
				<SelectItem
					icon={pngAssets.kyc.mobileNumber}
					label="Marital Status"
					isImportant={true}
					placeholder="Please select marital status"
				/>
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="Father’s/Spouse Name"
					isImportant={true}
					placeholder="Please enter father’s/spouse name"
				/>
			</div>
			<div className="grid grid-cols-2 gap-10 items-end mb-8">
				<SelectItem
					icon={pngAssets.kyc.mobileNumber}
					label="Gender"
					isImportant={true}
					placeholder="Please select your gender"
				/>
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="City Of Birth"
					isImportant={true}
					placeholder="Please enter father’s/spouse name"
				/>
			</div>
			<div className="w-full flex items-end">
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="Nationality"
					isImportant={true}
					placeholder="Indian"
					isDisable={true}
				/>
			</div>
		</div>
	);
};

export default OccupationDetail;
