import { pngAssets } from '../../../assets/asset';
import { CommonInput } from '../../../components/inputs/CommonInput';
import { MainTitle } from '../../../components/common/MainTitle';
import { SelectDropdown } from '../../../components/dropdown/SelectDropdown';

export const PersonalDetail = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Personal Details" />
			<div className="grid grid-cols-2 gap-10 items-end mb-8">
				<SelectDropdown
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
				<SelectDropdown
					icon={pngAssets.kyc.mobileNumber}
					label="Gender"
					isImportant={true}
					placeholder="Please select marital status"
				/>
				<CommonInput
					icon={pngAssets.kyc.mobileNumber}
					label="City Of Birth"
					isImportant={true}
					placeholder="Please enter city of birth"
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
