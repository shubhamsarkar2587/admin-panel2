import React from 'react'
import { svgAssets } from '../../assets/asset'

const Applications = () => {
  return (
    <div className="w-full px-6 py-5 bg-white rounded-[20px] shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
      <div className="flex justify-between mb-2.5">
        <div className="">
          <span className="text-[#868686]">All Applications</span>
          <h6 className="text-[32px] leading-[48px] font-semibold">5000</h6>
        </div>
        <div className="p-5 bg-[#E0E3FF] rounded-full">
          <img alt="application_icon" src={svgAssets.dashboard.application}></img>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <img className="mr-10" alt="" src={svgAssets.dashboard.graph}></img>
        <button className="px-3 py-2 flex items-center rounded-[10px] bg-[#EBFFFA] shadow-[0px_3px_16px_rgba(171,171,171,0.25)]">
          <img alt="" src=""></img>
          <span>View Details</span>
        </button>
      </div>
    </div>
  )
}

export default Applications