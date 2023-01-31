import { pngAssets } from '../../../assets/asset';
import { MainTitle } from '../../../components/common/MainTitle';
import { SelectDropdown } from '../../../components/dropdown/SelectDropdown';

export const OccuptionDetail = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<MainTitle title="Occupational Details" />
			<div className="grid grid-cols-2 gap-10 items-end mb-8">
				<SelectDropdown
					icon={pngAssets.kyc.mobileNumber}
					label="Brokerage Scheme"
					isImportant={true}
					placeholder="Please select brokerage scheme"
				/>
				<SelectDropdown
					icon={pngAssets.kyc.mobileNumber}
					label="Brokerage Scheme"
					isImportant={true}
					placeholder="Please select brokerage scheme"
				/>
			</div>
			<div className="grid grid-cols-2 gap-10 items-end">
				<SelectDropdown
					icon={pngAssets.kyc.mobileNumber}
					label="Brokerage Scheme"
					isImportant={true}
					placeholder="Please select brokerage scheme"
				/>
				<SelectDropdown
					icon={pngAssets.kyc.mobileNumber}
					label="Brokerage Scheme"
					isImportant={true}
					placeholder="Please select brokerage scheme"
				/>
			</div>
		</div>
	);
};
