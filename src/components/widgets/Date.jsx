import { svgAssets } from '../../assets/asset';

export const Date = ({ icon, label }) => {
	return (
		<div className="w-max px-5 py-3 mr-5 flex items-center cursor-pointer text-[#787878] bg-white rounded-[10px] shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
			<img
				alt="today_calender"
				src={icon || svgAssets.dashboard.calendar}
				className="mr-2 mb-0.5 object-contain"
			/>
			<span className="text-[#787878] font-medium font-poppinsMedium">{ label }</span>
		</div>
	);
};
