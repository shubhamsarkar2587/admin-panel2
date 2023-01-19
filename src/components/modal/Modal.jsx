import './modal.css';
import { Modal } from 'antd';

const MyModal = ({ title, width, height, isModalOpen, handleModel, children }) => {

  // const handleClick = (route) => {
  //   navigate(`/${route}`);
  // }

  return (
    <div>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={() => handleModel(false)}
        centered={true}
        width={width || 390}
        closeIcon={false}
        footer={null}
        className="w-full p-[33px] text-center"
      >
        {children}
      </Modal>
    </div>
  )
}

export default MyModal