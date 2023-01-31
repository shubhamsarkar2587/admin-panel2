
export const SingleDetail = ({ label, value }) => {
	return (
		<>
			<div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid">
				<div className="text-[#90A5B5] font-poppinsRegular">{label}</div>
				<div className="text-black font-poppinsRegular">{value}</div>
			</div>
		</>
	);
};
