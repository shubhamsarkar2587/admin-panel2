import { useRef, useState } from 'react';

export const CustomDropdown = ({ label, position, children }) => {
	const wrapperRef = useRef(null);
	const [isSelected, setIsSelected] = useState(true);

	// const handleOutsideClick = () => {
	// 	setIsSelected(false);
	// };

	// OutsideClickListner({ ref: wrapperRef, closeBox: handleOutsideClick });

	return (
		<div ref={wrapperRef} className={`w-full h-full rounded-[10px] relative z-50 
			${isSelected && 'bg-white shadow-[0px_2px_10px_rgba(201,201,201,0.25)]'}
		`}>
			<div
				className="px-3.5 py-3 flex items-center justify-between cursor-pointer rounded-[10px_10px_0px_0px] bg-[#F6FAFF] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
				onClick={() => setIsSelected(!isSelected)}
			>
				<span className="inline-flex items-center text-lg leading-[27px] font-medium font-poppinsMedium">
					{label || 'Label'}
				</span>
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
			<div className={`w-full transition-all duration-700 rounded-[0px_0px_10px_10px] 
				${!isSelected && 'hidden'}
				${position || 'absolute'}
			`}>
				{children}
			</div>
		</div>
	);
};
