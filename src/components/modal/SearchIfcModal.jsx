import './modal.css';
import { Modal } from 'antd';
import { svgAssets } from '../../assets/asset';
import CommonInput from '../common/CommonInput';
import SelectItem from '../common/SelectItem';

const selectOption = [
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'Yiminghe',
    label: 'yiminghe',
  },
]

const SearchIfcModal = ({ isModalOpen, handleKycModel }) => {

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
            <div className="flex flex-col">
              <span className="mb-3">Bank Name</span>
              <CommonInput height={'45px'} />
            </div>
            <div className="flex flex-col">
              <span className="mb-3">Branch</span>
              <SelectItem />
            </div>
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
  )
}

export default SearchIfcModal