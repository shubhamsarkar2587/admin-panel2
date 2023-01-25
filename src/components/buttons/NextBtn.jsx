
export const NextBtn = ({ handleNextBtn }) => {
	return (
		<button
			className="h-[47px] px-5 flex items-center rounded-[10px] leading-6 text-white bg-black"
			onClick={() => handleNextBtn()}
		>
			<span>AddUser</span>
		</button>
	);
};
