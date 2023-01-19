import { DatePicker, Space } from 'antd';

const DatePickerInput = ({ placeholder }) => {
	const onChange = (date, dateString) => {
		console.log(date, dateString);
	};

	return (
		<Space direction="vertical">
			<DatePicker
				className="py-2.5 border border-[#D6D3D3] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] focus:outline-none focus:shadow-outline-blue focus:border-blue-500 bg-white"
				onChange={onChange}
				placeholder="Enter date"
				format={'DD-MM-YYYY'}
			/>
		</Space>
	);
};

export default DatePickerInput;
