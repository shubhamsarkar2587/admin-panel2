import React from 'react'
import { svgAssets } from '../../assets/asset'

export const VerifySingleDetail = ({ label, value, isValid }) => {
  return (
    <div className={`mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid 
      ${isValid ? 'border-[#69BF77]' : 'border-[#F6F6F6] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]'}
    `}>
      <div className="text-[#90A5B5]">{label}</div>
      <div className="">{value}</div>
      <div className='flex items-center justify-end'>
        <img className="mr-5" alt="wrong_field" src={svgAssets.verifyApplication.wrong_field} />
        <img alt="right_field" src={svgAssets.verifyApplication.right_field} />
      </div>
    </div>
  )
}
