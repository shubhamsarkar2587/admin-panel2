import { DatePicker, Space } from 'antd';

const DatePickerInput = ({ height }) => {
	const onChange = (date, dateString) => {
		console.log(date, dateString);
	};

	return (
		<Space className="w-full text-[#323232] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] focus:outline-none" direction="vertical">
			<DatePicker
				className={'w-full px-4 border-0 focus:outline-none'}
				style={{
					height: height || '47px'
				}}
				autoFocus={false}
				placement={'bottomRight'}
				format={'DD-MM-YYYY'}
				onChange={onChange}
			/>
		</Space>
	);
};

export default DatePickerInput;
