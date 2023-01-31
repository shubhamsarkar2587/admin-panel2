import { SelectDropdown } from '../../../components/dropdown/SelectDropdown';

const OccuptionDetails = () => {
	return (
		<div className="w-full flex flex-col mb-10">
			<div className="mb-[22px] font-medium text-lg leading-[27px]">Occupational Details</div>
			<div className="grid grid-cols-2 gap-10 items-end mb-8">
				<div className="flex flex-col">
					<span className="mb-3">Marital Status *</span>
					<SelectDropdown
						placeholder="Please select brokerage scheme"
					/>
				</div>
				<div className="flex flex-col">
					<span className="mb-3">Father’s/Spouse Name *</span>
					<SelectDropdown
						placeholder="Please select brokerage scheme"
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-10 items-end">
				<div className="flex flex-col">
					<span className="mb-3">Gender *</span>
					<SelectDropdown
						placeholder="Please select brokerage scheme"
					/>
				</div>
				<div className="flex flex-col">
					<span className="mb-3">Please enter father’s/spouse name</span>
					<SelectDropdown
						placeholder="Please select brokerage scheme"
					/>
				</div>
			</div>
		</div>
	);
};

export default OccuptionDetails;
