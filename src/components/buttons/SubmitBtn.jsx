
const SubmitBtn = ({ handleSubmitBtn }) => {
	return (
		<button
			className="h-[35px] px-5 flex items-center rounded-[10px] leading-6 text-white bg-black font-poppinsRegular"
			onClick={() => handleSubmitBtn()}
		>
			<span>Submit</span>
		</button>
	);
};

export default SubmitBtn;
