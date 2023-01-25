import '../modal.css';
import { Modal } from 'antd';
import { pngAssets, svgAssets } from '../../../assets/asset';
import { CommonInput } from '../../inputs/CommonInput';
import { SelectItem } from '../../common/SelectItem';

export const SearchIfcModal = ({ isModalOpen, handleKycModel }) => {
	return (
		<div>
			<Modal
				title="Search IFSC"
				open={isModalOpen}
				onCancel={() => handleKycModel(false)}
				centered={true}
				width={860}
				closeIcon={false}
				footer={null}
				className="w-full p-[33px]"
				bodyStyle={{
					backgroundColor: 'red'
				}}
			>
				<div className="bg-white">
					<div className="grid grid-cols-2 gap-7 mb-[30px]">
						<CommonInput
							icon={pngAssets.kyc.mobileNumber}
							label="Bank Name"
							isImportant={true}
							placeholder="Please enter bank name"
							height="45px"
						/>
						<SelectItem
							icon={pngAssets.kyc.mobileNumber}
							label="Branch"
							isImportant={true}
							placeholder="Please select branch"
							height="45px"
						/>
					</div>
					<div className="w-full flex justify-center mb-5">
						<button
							className="px-5 py-3 flex items-center rounded-[10px] leading-6 text-white bg-black"
							onClick={() => handleKycModel(false)}
						>
							<img className="mr-2 text-xl leading-[30px] font-semibold" alt="back_icon" src={svgAssets.kyc.verify} />
							<span>Search IFSC</span>
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};
