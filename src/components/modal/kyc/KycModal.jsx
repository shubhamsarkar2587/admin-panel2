import '../modal.css';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { svgAssets } from '../../../assets/asset';

export const KycModal = ({ isModalOpen, handleKycModel }) => {
	const navigate = useNavigate();

	const handleClick = (route) => {
		navigate(`/${route}`);
	};

	return (
		<div>
			<Modal
				title="Please Choose any one"
				open={isModalOpen}
				onCancel={() => handleKycModel(false)}
				centered={true}
				width={390}
				closeIcon={false}
				footer={null}
				className="w-full p-[33px]"
				bodyStyle={{
					backgroundColor: 'red'
				}}
			>
				<div className="grid grid-cols-2 gap-5 bg-white">
					<div className="p-5 flex items-center justify-center rounded-[10px] bg-[#E9F1FF]">
						<img
							className="cursor-pointer"
							alt="bigul_logo"
							src={svgAssets.bigul}
							onClick={() => handleClick('kyc')}
						/>
					</div>
					<div className="px-5 flex items-center justify-center rounded-[10px] bg-[#E9F1FF]">
						<img className="p-1.5 m-0 text-center" alt="bigul_logo" src={svgAssets.bonabza}></img>
					</div>
				</div>
			</Modal>
		</div>
	);
};
