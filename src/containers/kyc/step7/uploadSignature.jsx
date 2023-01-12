import { svgAssets } from "../../../assets/asset"
import InputIcon from "../../../components/inputs/InputIcon"
import UploadSelfie from "../step6/UploadSelfie"

const UploadSignature = () => {
  return (
    <>
      <UploadSelfie marginBottom="0" />
      <div className="w-full flex flex-col mb-10">
        <div className="mb-8 grid grid-cols-2 gap-10 items-end">
          <div className="flex flex-col ">
            <span className="mb-3">Signature Link *</span>
            <span className="text-[#A3A3A3] mb-1">Share below link with client</span>
            <InputIcon iconText="Send Link" />
          </div>
          <div className="w-[113px] flex flex-col items-center">
            <img
              className="w-[64px] h-[64px] rounded-[10px]"
              alt="user_image"
              src={svgAssets.kyc.signature}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadSignature