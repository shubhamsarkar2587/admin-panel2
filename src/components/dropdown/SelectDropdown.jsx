import { OutsideClickListner } from '../../hooks/OutsideClickListner';
import { useRef, useState } from 'react';

const dummyOptions = [
	{ id: 0, name: 'New' },
	{ id: 1, name: 'New' },
	{ id: 2, name: 'New' },
	{ id: 3, name: 'New' }
];

export const SelectDropdown = ({ icon, label, isImportant, height, placeholder, options, inputType, handleSelect }) => {
	const wrapperRef = useRef(null);
	const [isSelected, setIsSelected] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	const handleOutsideClick = () => {
		setIsSelected(false);
	};

	const handleOption = ({ value }) => {
		setSelectedOption(value);
		setIsSelected(false);
		handleSelect && handleSelect({ type: inputType, value });
	};

	OutsideClickListner({ ref: wrapperRef, closeBox: handleOutsideClick });

	const initOption = options || dummyOptions;

	return (
		<div className="w-full flex flex-col">
			{
				label && (
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
				)
			}
			<div
				ref={wrapperRef}
				className={`w-full h-full rounded-[10px]
			  ${isSelected && 'bg-white shadow-[0px_2px_10px_rgba(201,201,201,0.25)] relative z-10'}
        ${height || 'h-[47px]'}
		  `}>
				<div
					className="px-3.5 py-3 flex items-center justify-between cursor-pointer rounded-[10px] bg-white shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
					onClick={() => setIsSelected(!isSelected)}
				>
					<input
						className="w-full pr-5 m-0 outline-none border-none font-poppinsRegular bg-white"
						type="text"
						placeholder={placeholder}
						value={selectedOption}
						disabled={true}
					/>
					<svg
						className={`fill-[#808080] h-6 w-6 transform duration-150 ease-in-out
						${isSelected && 'rotate-180'}
					`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
						/>
					</svg>
				</div>
				<div
					className={`w-full transition-all duration-700 top-[49px] rounded-[10px] border-b-lg font-poppinsRegular bg-white shadow-[0px_2px_10px_rgba(201,201,201,0.25)]
					${isSelected ? 'absolute z-50' : 'hidden'}
				`}
				>
					<ul className="px-1.5 py-1">
						{initOption?.length > 0
							? initOption.map((option) => (
								<li
									key={option.id}
									className="px-3 py-2 my-0.5 rounded-md hover:bg-[#F6F8F9] cursor-pointer"
									style={{
										backgroundColor: selectedOption === option.name && '#e7e7e7'
									}}
									onClick={() => handleOption({ value: option.name })}
								>
									{option.name}
								</li>
							))
							: null}
					</ul>
				</div>
			</div>
		</div>
	);
};
