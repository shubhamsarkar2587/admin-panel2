import { svgAssets } from '../../assets/asset'

const BackBtn = () => {
  return (
    <button className="h-[47px] px-5 flex items-center rounded-[10px] leading-6 text-white bg-[rgba(180,186,189,0.38)]">
      <img className="mr-2" alt="back_icon" src={svgAssets.kyc.backIcon} />
      <span>Back</span>
    </button>
  )
}

export default BackBtn