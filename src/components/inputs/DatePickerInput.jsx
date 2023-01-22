import { DatePicker, Space } from 'antd';

const DatePickerInput = ({ icon, label, isImportant, height, isDisable, placeholder }) => {
	const onChange = (date, dateString) => {
		console.log(date, dateString);
	};

	return (
		<div className="flex flex-col">
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
			<Space direction="vertical">
				<DatePicker
					className="w-full px-4 text-[#353535] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] font-poppinsRegular border-0 focus:outline-none"
					style={{
						height: height || '47px'
					}}
					autoFocus={false}
					placement={'bottomRight'}
					format={'DD-MM-YYYY'}
					onChange={onChange}
					placeholder={placeholder}
					disabled={isDisable}
				/>
			</Space>

		</div>
	);
};

export default DatePickerInput;
