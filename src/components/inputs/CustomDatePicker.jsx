import { useRef, useState } from 'react';
import { pngAssets } from '../../assets/asset';

const CustomDatePicker = ({ placeholder }) => {
	const ref = useRef();
	const [isDateSelected, setIsDateSelected] = useState(false);
	return (
		<div className="relative">
			{
				isDateSelected
					? (
						<input
							ref={ref}
							type="date"
							format="DD-MM-YYYY"
							className="w-[135px] h-[44px] p-[13px] pl-[32px] appearance-none rounded-[10px] border border-[#D6D3D3] text-[#9A9A9A] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] focus:outline-none"
						/>
					)
					: (
						<div
							onClick={() => setIsDateSelected(true)}
						>
							<input
								ref={ref}
								type="input"
								placeholder={placeholder || 'Date'}
								onBlur={() => (ref.current.type = 'date')}
								className="w-[135px] h-[44px] p-[13px] pl-[32px] appearance-none rounded-[10px] border border-[#D6D3D3] text-[#9A9A9A] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] focus:outline-none"
							/>
							<div className="absolute left-2.5 top-0 flex items-center h-full cursor-pointer">
								<img alt="calender" src={pngAssets.reactTable.calendar} />
							</div>
						</div>
					)
			}
		</div>

	);
};

export default CustomDatePicker;
