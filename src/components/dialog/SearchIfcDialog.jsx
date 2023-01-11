import './dialog.css';
import { Modal, Select } from 'antd';
import { svgAssets } from '../../assets/asset';

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

const SearchIfcDialog = ({ isModalOpen, handleKycModel }) => {

  console.log(isModalOpen)

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
              <input
                className="min-w-full px-[11px] py-2.5 text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                placeholder="Please enter bank name"
              />
            </div>
            <div className="flex flex-col">
              <span className="mb-3">Bank Name</span>
              <input
                className="min-w-full px-[11px] py-2.5 text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
                placeholder="Please enter bank name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-7 mb-9">
            <div className="flex flex-col">
              <span className="mb-3">Bank Name</span>
              <Select
                placeholder="Please select state"
                style={{
                  width: '100%',
                }}
                options={selectOption}
                bordered={false}
                className="h-[44px] flex items-center text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="mb-3">Branch</span>
              <Select
                placeholder="Please select state"
                style={{
                  width: '100%',
                }}
                // onChange={handleChange}
                options={selectOption}
                bordered={false}
                className="h-[44px] flex items-center text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]"
              />
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

export default SearchIfcDialog