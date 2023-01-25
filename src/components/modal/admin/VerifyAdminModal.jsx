import '../modal.css';
import { Modal } from 'antd';
import { pngAssets } from '../../../assets/asset';
import { InputBtnIcon } from '../../inputs/InputBtnIcon';
import { OtpInput } from '../../inputs/OtpInput';
import { Link } from 'react-router-dom';
import { NextBtn } from '../../buttons/NextBtn';

export const VerifyAdminModal = ({ isModalOpen, closeModal, handleModal }) => {
	return (
		<div>
			<Modal
				title=""
				open={isModalOpen}
				onCancel={() => closeModal()}
				centered={true}
				width={550}
				closeIcon={false}
				footer={null}
				className="w-full"
			>
				<div className="w-full">
					<div className="w-full mb-8 flex flex-col items-center justify-center">
						<img className="mb-5" alt="verifyAdmin" src={pngAssets.admin.verifyAdmin} />
						<h6 className="text-lg font-medium font-poppinsMedium">Mobile Number Verification</h6>
						<span className="text-sm text-[#B1B1B1] font-normal font-poppinsRegular">You need to verify your mobile number before Add User</span>
					</div>
					<div className="mb-6">
						<InputBtnIcon
							label="Mobile Number"
							subLabel="We will send OTP in entered mobile number."
							isImportant={true}
							placeholder="Please enter mobile number"
							btnText="Submittttt"
						/>
					</div>
					<div className="mb-6">
						<OtpInput
							label="Mobile Number"
							subLabel="We will send OTP in entered mobile number."
							isImportant={true}
							placeholder="Please enter mobile number"
						/>
					</div>
					<div className="text-right font-poppinsRegular mb-10">
						<span>Code didn’t Received. </span>
						<Link to="/">
							<span className="text-[#5367FC]">Resend Again</span>
						</Link>
					</div>
					<div className="flex justify-end">
						<NextBtn handleNextBtn={handleModal} />
					</div>
				</div>
			</Modal>
		</div>
	);
};
