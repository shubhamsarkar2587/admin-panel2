import { OutsideClickListner } from '../../hooks/OutsideClickListner';
import { useRef, useState } from 'react';

const dummyOptions = ['Tony Stark', 'Option 1', 'Option 2', 'Option 3'];
export const SearchBar = ({ height, placeholder, border }) => {
	const wrapperRef = useRef(null);
	const [isSelected, setIsSelected] = useState(false);
	const [searchText, setSearchText] = useState('');
	const [options, setOptions] = useState(dummyOptions);

	const handleSearch = ({ value, closeOption }) => {
		setSearchText(value);
		setOptions(
			dummyOptions.filter((option) =>
				option.toLowerCase().includes(value.toLowerCase())
			)
		);
		if (closeOption) {
			setIsSelected(false);
		} else {
			setIsSelected(true);
		}
	};

	const handleOutsideClick = () => {
		setIsSelected(false);
	};

	OutsideClickListner({ ref: wrapperRef, closeBox: handleOutsideClick });

	return (
		<>
			<div
				ref={wrapperRef}
				className={`w-[350px] rounded-[10px] relative z-10 shadow-[0px_2px_10px_rgba(201,201,201,0.25)]
			  ${isSelected && 'bg-white'}
				${border || ''}
		  `}>
				<div
					className="h-[45px] px-3.5 flex items-center justify-between cursor-pointer rounded-[10px] bg-white"
					onClick={() => setIsSelected(!isSelected)}
				>
					<input
						className="w-full pr-5 m-0 text-xs inline-flex items-center outline-none border-none font-poppinsRegular"
						type="text"
						placeholder="Search by Name, Mobile Number, PAN"
						value={searchText}
						onChange={(e) => handleSearch({ value: e.target.value })}
					/>
					<svg className="h-4 w-4 fill-current text-[#A3A3A3]" viewBox="0 0 20 20">
						<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
					</svg>
				</div>
				<div
					className={`absolute w-full transition-all duration-700 top-12 rounded-[10px] border-b-lg bg-white shadow-[0px_2px_10px_rgba(201,201,201,0.25)]
					${!isSelected && 'hidden'}
				`}
				>
					<ul className="px-1 py-1">
						{options.map((option) => (
							<li
								key={option}
								className="px-2 py-2 flex flex-col text-xs rounded-md cursor-pointer font-poppinsRegular hover:bg-[#F6F8F9]"
								onClick={() => handleSearch({ value: option, closeOption: true })}
							>
								<span className="text-black font-medium font-poppinsMedium">{option}</span>
								<span className="text-[#ABABAB]">Ankit | BHD2587N | 7014587528</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
