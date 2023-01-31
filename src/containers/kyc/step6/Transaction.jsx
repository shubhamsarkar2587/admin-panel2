import { Checkbox } from '../../../components/common/Checkbox';
import { CustomDropdown } from '../../../components/dropdown/CustomDropdown';

export const Transaction = () => {
	return (
		<CustomDropdown
			label="Transactions Type"
			position="relative"
		>
			<div className="px-3.5 py-[25px]">
				<Checkbox
					labelText="All Transactions"
					labelSize="18px"
					labelWeight="500"
					labelFamily="font-poppinsMedium"
					marginBottom="mb-4"
				/>
				<div className="ml-8 flex flex-col">
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
			</div>
		</CustomDropdown>
	);
};
