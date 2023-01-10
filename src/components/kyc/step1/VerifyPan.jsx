import { DatePicker, Space } from 'antd';
import { svgAssets } from '../../../assets/asset';

const VerifyPan = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">PAN Details</div>
      <div className="mb-8 grid grid-cols-2 gap-7">
          <div className="flex flex-col mb-8">
            <span className="mb-3">PAN *</span>
            <input className="p-4 text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]" placeholder="Please enter email id" />
          </div>
          <div className="flex flex-col mb-8">
            <span className="mb-3">Date Of Birth *</span>
            <Space className="w-full text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] focus:outline-none" direction="vertical">
              <DatePicker
                className="w-full p-4 border-0 focus:outline-none"
                autoFocus={false}
                placement={"bottomRight"}
                format={"DD-MM-YYYY"}
                onChange={onChange}
              />
            </Space>
          </div>
      </div>
      <div className="mb-20 flex items-center justify-center">
        <button className="px-5 py-3 flex items-center rounded-[10px] leading-6 text-white bg-black">
          <img className="mr-2" alt="back_icon" src={svgAssets.kyc.verify}/>
          <span>Verify</span>
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button className="px-5 py-3 flex items-center rounded-[10px] leading-6 text-white bg-black">
          <img className="mr-2" alt="back_icon" src={svgAssets.kyc.backIcon}/>
          <span>Back</span>
        </button>
        <button className="px-5 py-3 flex items-center rounded-[10px] leading-6	 text-white bg-black">
          <span className="mr-2">continue</span>
          <img alt="continue_icon" src={svgAssets.kyc.continueIcon}/>
        </button>
      </div>
    </div>
  )
}

export default VerifyPan