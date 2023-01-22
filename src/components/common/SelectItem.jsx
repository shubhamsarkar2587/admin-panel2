import { Select } from 'antd';
import { svgAssets } from '../../assets/asset';

const selectOption = [
	{
		value: 'jack',
		label: 'Jack'
	},
	{
		value: 'lucy',
		label: 'Lucy'
	},
	{
		value: 'Yiminghe',
		label: 'Yiminghe'
	}
];

const SelectItem = ({ icon, label, isImportant, height, isDisable, placeholder }) => {
	return (
		<div>
			<label className="mb-4 flex items-center leading-6 font-poppinsMedium">
				{
					icon && <img
						className="max-h-[22px] mr-1.5 object-contain"
						alt="input_icon"
						src={icon}
					/>
				}
				<span className="mr-1">{label}</span>
				{isImportant && <span className="text-[#EA0000]">*</span>}
			</label>
			<Select
				suffixIcon={<img height={22} alt="dropdown_icon" src={svgAssets.dropdownIcon} />}
				className="text-[#353535] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular flex items-center bg-white"
				style={{
					width: '100%',
					height: height || '47px'
				}}
				placeholder={placeholder}
				options={selectOption}
				bordered={false}
				disabled={isDisable}
			/>
		</div>
	);
};

export default SelectItem;
