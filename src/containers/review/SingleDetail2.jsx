
export const SingleDetail = ({ label, value }) => {
	return (
		<>
			<div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]">
				<div className="text-[#90A5B5] font-poppinsRegular">{label}</div>
				<div className="text-black font-poppinsRegular">{value}</div>
			</div>
		</>
	);
};
