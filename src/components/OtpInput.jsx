import React from 'react'
import { svgAssets } from '../assets/asset'

const OtpInput = ({ height }) => {
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-6 gap-4 mr-3.5">
        <input
          maxLength="1"
          className={`w-full px-4 h-[${height || '47px'}] text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]`}
        />
        <input
          maxLength="1"
          className={`w-full px-4 h-[${height || '47px'}] text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]`}
        />
        <input
          maxLength="1"
          className={`w-full px-4 h-[${height || '47px'}] text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]`}
        />
        <input
          maxLength="1"
          className={`w-full px-4 h-[${height || '47px'}] text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]`}
        />
        <input
          maxLength="1"
          className={`w-full px-4 h-[${height || '47px'}] text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]`}
        />
        <input
          maxLength="1"
          className={`w-full px-4 h-[${height || '47px'}] text-[#989898] text-center border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]`}
        />
      </div>
      <button className={`min-w-max h-[${height || '47px'}] px-3.5 flex items-center whitespace-nowrap rounded-r-[10px] text-white bg-black`}>
        <img className="mr-2.5" alt="send_link_img" src={svgAssets.kyc.verify} />
        <span>Verify</span>
      </button>
    </div>
  )
}

export default OtpInput