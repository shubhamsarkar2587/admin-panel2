import { SelectDropdown } from '../dropdown/SelectDropdown';

const options = [
	{ id: 0, name: '10' },
	{ id: 1, name: '20' },
	{ id: 2, name: '30' },
	{ id: 3, name: '40' }
];

export const PageCount = () => {
	return (
		<div className="flex items-center justify-end font-medium font-poppinsMedium text-[#231F20]">
			<span>Show</span>
			<div className="w-[105px] mx-[5px]">
				<SelectDropdown
					options={options}
					disabled={true}
					border="border"
					selectedValue={'10'}
					height="h-[44px]"
				/>
			</div>
			<span>entries</span>
		</div>
	);
};
