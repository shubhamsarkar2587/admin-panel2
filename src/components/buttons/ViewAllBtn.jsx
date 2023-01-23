import React from 'react';

export const ViewAllBtn = ({ text }) => {
	return (
		<button className="px-3 py-[1px] rounded-md	flex items-center font-semibold bg-[#EBFFFA] shadow-[0px_3px_16px_rgba(171,171,171,0.25)]">
			{ text || 'View All' }
		</button>
	);
};
