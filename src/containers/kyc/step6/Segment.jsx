import { Checkbox } from '../../../components/common/Checkbox';
import { CustomDropdown } from '../../../components/dropdown/CustomDropdown';

export const Segment = () => {
	return (
		<CustomDropdown
			label="Segments"
			position="relative"
		>
			<div className="w-full px-3.5 py-[25px] mb-6 grid grid-cols-2 gap-7">
				<Checkbox
					labelText="All Transactions"
					labelSize="18px"
					labelWeight="500"
					labelFamily="font-poppinsMedium"
					marginBottom="mb-4"
				/>
				<Checkbox
					labelText="Settlement Transactions"
					labelSize="16px"
					labelWeight="400"
					labelFamily="font-poppinsRegular"
					marginBottom="mb-4"
				/>
				<Checkbox
					labelText="Margin Pledge Transactions"
					labelSize="16px"
					labelWeight="400"
					labelFamily="font-poppinsRegular"
					marginBottom="mb-4"
				/>
				<Checkbox
					labelText="Mutual Fund Transactions"
					labelSize="16px"
					labelWeight="400"
					labelFamily="font-poppinsRegular"
					marginBottom="mb-4"
				/>
			</div>
		</CustomDropdown>
	);
};
