import './modal.css';
import { Modal } from 'antd';

export const MyModal = ({ title, width, height, isModalOpen, handleModal, children }) => {
	// const handleClick = (route) => {
	//   navigate(`/${route}`);
	// }

	return (
		<div>
			<Modal
				title={title}
				open={isModalOpen}
				onCancel={() => handleModal(false)}
				centered={true}
				width={width || 390}
				closeIcon={false}
				footer={null}
				className="w-full p-[33px] text-center"
				bodyStyle={{
					height: height || '100%'
				}}
			>
				{children}
			</Modal>
		</div>
	);
};
