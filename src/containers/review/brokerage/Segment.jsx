import { Checkbox } from '../../../components/common/Checkbox';
import { MainTitle } from '../../../components/common/MainTitle';

export const Segment = () => {
	return (
		<>
			<MainTitle title="Segments" marginBottom="mb-4" />
			<div className="grid grid-cols-2 gap-x-7">
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
		</>
	);
};
