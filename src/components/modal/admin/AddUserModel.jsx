import '../modal.css';
import { Modal } from 'antd';
import { CommonInput } from '../../inputs/CommonInput';
import { SelectItem } from '../../common/SelectItem';
import { SubmitBtn } from '../../buttons/SubmitBtn';

export const AddUserModal = ({ title, isModalOpen, handleModel, closeModal }) => {
	return (
		<div>
			<Modal
				title={title || ''}
				open={isModalOpen}
				onCancel={() => closeModal()}
				centered={true}
				width={900}
				closeIcon={false}
				footer={null}
				className="w-full"
			>
				<div className="w-full px-5 max-h-[calc(100vh-100px)] overflow-y-scroll block scroll">
					<div className="">
						<div className="mb-8 grid grid-cols-2 gap-10">
							<CommonInput
								label="Mobile Number"
								isImportant={true}
								placeholder="Please enter name"
							/>
							<CommonInput
								label="Employee Code"
								isImportant={true}
								placeholder="Please enter employee code"
							/>
						</div>
						<div className="mb-8 grid grid-cols-2 gap-10">
							<SelectItem
								label="Employee Code"
								isImportant={true}
								placeholder="Please select marital status"
								height={'47px'}
							/>
							<CommonInput
								label="Employee Code"
								isImportant={true}
								placeholder="Please enter employee code"
							/>
						</div>
						<div className="mb-8 grid grid-cols-2 gap-10">
							<CommonInput
								label="Mobile Number"
								isImportant={true}
								placeholder="Please enter name"
							/>
							<CommonInput
								label="Employee Code"
								isImportant={true}
								placeholder="Please enter employee code"
								isDisable={true}
							/>
						</div>
						<div className="mb-8 grid grid-cols-2 gap-10">
							<SelectItem
								label="Employee Code"
								isImportant={true}
								placeholder="Please select marital status"
								height={'47px'}
							/>
							<CommonInput
								label="Employee Code"
								isImportant={true}
								placeholder="Please enter employee code"
							/>
						</div>
						<div className="mb-8 grid grid-cols-2 gap-10">
							<CommonInput
								label="Mobile Number"
								isImportant={true}
								placeholder="Please enter name"
							/>
							<CommonInput
								label="Employee Code"
								isImportant={true}
								placeholder="Please enter employee code"
							/>
						</div>
						<div className="mb-8 grid grid-cols-2 gap-10">
							<SelectItem
								label="Employee Code"
								isImportant={true}
								placeholder="Please select marital status"
								height={'47px'}
							/>
							<CommonInput
								label="Employee Code"
								isImportant={true}
								placeholder="Please enter employee code"
							/>
						</div>
					</div>
					<div className="flex items-center justify-center mb-8">
						<SubmitBtn handleSubmitBtn={() => closeModal()} />
					</div>
				</div>
			</Modal>
		</div>
	);
};
