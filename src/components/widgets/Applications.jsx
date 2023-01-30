import React from 'react';
import { svgAssets } from '../../assets/asset';

const widgetIconBgColor = {
	'All Applications': {
		bgColor: '#E0E3FF',
		icon: svgAssets.dashboard.widgetApplication
	},
	'Verified Applications': {
		bgColor: '#FFF4B8',
		icon: svgAssets.dashboard.widgetApplication
	},
	'Rejected Applications': {
		bgColor: '#FFF1D7',
		icon: svgAssets.dashboard.widgetApplication
	},
	'Pending Verification': {
		bgColor: '#FFE8FF',
		icon: svgAssets.dashboard.widgetApplication
	},
	Resubmitted: {
		bgColor: '#CBFFDD',
		icon: svgAssets.dashboard.widgetApplication
	},
	'Re-Activation': {
		bgColor: '#C3FFB9',
		icon: svgAssets.dashboard.widgetApplication
	}
};

export const ApplicationWidget = ({ title, numberOfApplications }) => {
	return (
		<div className="w-full px-6 py-5 bg-white rounded-[20px] shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
			<div className="flex justify-between mb-2.5">
				<div className="">
					<span className="text-[#868686] leading-6 font-medium font-poppinsMedium">{title}</span>
					<h6 className="text-[32px] leading-[48px] font-semibold font-poppinsSemiBold">{numberOfApplications}</h6>
				</div>
				<div
					className="p-5 bg-[#E0E3FF] rounded-full"
					style={{
						backgroundColor: widgetIconBgColor[title].bgColor
					}}
				>
					<img alt="application_icon" src={widgetIconBgColor[title].icon}></img>
				</div>
			</div>
			<div className="flex items-end justify-between">
				<img className="mr-10" alt="" src={svgAssets.dashboard.graph}></img>
				<button className="px-3 py-2 flex items-center rounded-[10px] bg-[#EBFFFA] shadow-[0px_3px_16px_rgba(171,171,171,0.25)]">
					<img alt="" src=""></img>
					<span className="text-xs leading-[18px] font-medium font-poppinsMedium">View Details</span>
				</button>
			</div>
		</div>
	);
};
