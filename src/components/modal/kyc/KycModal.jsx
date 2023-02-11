import '../modal.css';
import { Modal } from 'antd';
import { useState } from 'react';
import { svgAssets } from '../../../assets/asset';

export const KycModal = ({ isModalOpen, handleKycModel }) => {
	const [selectedItem, setSelectedItem] = useState('kyc');

	const handleClick = (channel) => {
		setSelectedItem(channel);
		setTimeout(() => {
			handleKycModel({ isOpen: false, channel });
		}, 1000);
	};

	return (
		<div>
			<Modal
				title="Please Choose any one"
				className="w-full p-[33px]"
				width={390}
				open={isModalOpen}
				centered={true}
				closable={false}
				footer={null}
			>
				<div className="grid grid-cols-2 gap-5">
					<div
						className={`p-5 flex items-center justify-center rounded-[10px] border-2 border-solid bg-[#E9F1FF] cursor-pointer
							${selectedItem === 'kyc' ? 'border-[#FF981E]' : 'border-[#E9F1FF]'}
						`}
						onClick={() => handleClick('kyc')}
					>
						<img alt="bigul_logo" src={svgAssets.bigul} />
					</div>
					<div
						className={`px-5 flex items-center justify-center rounded-[10px] border-2 border-solid bg-[#E9F1FF] cursor-pointer
							${selectedItem === 'bonanza' ? ' border-[#FF981E]' : 'border-[#E9F1FF]'}
						`}
						onClick={() => handleClick('bonanza')}
					>
						<img className="p-1.5 m-0 text-center" alt="bigul_logo" src={svgAssets.bonabza}></img>
					</div>
				</div>
			</Modal>
		</div>
	);
};
