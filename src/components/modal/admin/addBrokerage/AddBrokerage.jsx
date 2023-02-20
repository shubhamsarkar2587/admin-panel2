import '../../modal.css';
import { useState } from 'react';
import { Modal } from 'antd';
import { CommonInput } from '../../../inputs/CommonInput';
import { CommodityTab, CurrencyTab, EquityTab, FutureOptionTab } from './TabComponent';
import { SubmitBtn } from '../../../buttons/SubmitBtn';

const tabs = [
	{
		label: 'Equity',
		component: <EquityTab />
	},
	{
		label: 'Future Option',
		component: <FutureOptionTab />
	},
	{
		label: 'Commodity',
		component: <CommodityTab />
	},
	{
		label: 'Currency',
		component: <CurrencyTab />
	}
];

export const AddBrokerage = ({ title, isModalOpen, handleModel, closeModal }) => {
	const [selectedTab, setSelectedTab] = useState(0);

	return (
		<div>
			<Modal
				title={title || ''}
				open={isModalOpen}
				onCancel={() => closeModal()}
				centered={true}
				width={670}
				closeIcon={false}
				footer={null}
				className="w-full"
			>
				<div className="w-full mt-5">
					<div className="mb-10">
						<CommonInput
							label="Brokerage Plan Name"
							isImportant={true}
							placeholder="Enter Brokerage plan name"
						/>
					</div>
					<div className="pb-4 mb-2.5 flex justify-items-center">
						{
							tabs.map((tab, index) => (
								<span
									key={`tab_${index}`}
									className={`pb-4 flex-grow text-center text-lg font-medium font-poppinsMedium cursor-pointer transition-colors duration-300 ease-in-out	${selectedTab === index ? 'border-b-4 border-[#5367FC]' : 'border-b-2'} `}
									onClick={() => setSelectedTab(index)}
								>
									{tab.label}
								</span>
							))
						}
					</div>
					{
						tabs[selectedTab].component
					}
					<div className="w-full mb-[30px] flex items-center justify-center">
						<SubmitBtn height="h-10" />
					</div>
				</div>
			</Modal>
		</div>
	);
};
