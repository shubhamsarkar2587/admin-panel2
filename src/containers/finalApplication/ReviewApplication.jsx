import { svgAssets } from "../../assets/asset"
import BrokerageDetails from "../kyc/step5/BrokerageDetails"

const ReviewApplication = () => {

  return (
    <div className="w-full flex flex-col mb-10">
      <div className="flex items-center justify-between">
        <div className="mb-[22px] font-medium text-lg leading-[27px]">Review Application Details</div>
        <div>Client of</div>
      </div>
      <div className="px-7 py-8 mb-[35px] rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
        <div className="mb-5">Client Details</div>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8">
            <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
              <div className="text-[#90A5B5]">Name As On PAN</div>
              <div className="">Amit Singh</div>
            </div>
            <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
              <div className="text-[#90A5B5]">Name As On Aadhar</div>
              <div className="">Rajendra Singh</div>
            </div>
            <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
              <div className="text-[#90A5B5]">E-Signer Name</div>
              <div className=""></div>
            </div>
            <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
              <div className="text-[#90A5B5]">Name On Bank Account</div>
              <div className="">Amit Singh</div>
            </div>
            <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
              <div className="text-[#90A5B5]">Bank Verification Status</div>
              <div className="">Verified</div>
            </div>
            <div className="px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
              <div className="text-[#90A5B5]">KRA Status</div>
              <div className="">Done</div>
            </div>
          </div>
          <div className="col-span-4 grid grid-rows-6 gap-5">
            <div className="row-span-4 px-[70px] py-[40px] flex items-center justify-center rounded-[10px] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]">
              <img className="object-contain" alt="user_image" src={svgAssets.kyc.profile_user}></img>
            </div>
            <div className="row-span-2 py-4 flex items-center justify-center rounded-[10px] shadow-[0px_1px_12px_rgba(185,185,185,0.25)]">
              <img className="h-full object-contain" alt="user_image" src={svgAssets.kyc.signature}></img>
            </div>
          </div>
        </div>

      </div>

      <div className="px-7 py-8 rounded-[20px] bg-white shadow-[0px_4px_15px_rgba(171,171,171,0.25)]">
        <div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
          <div className="mb-5">Mobile Number & Email Id</div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On PAN</div>
                <div className="">Amit Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
          <div className="mb-5">PAN Details</div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <div className="mb-[15px] px-[18px] py-2.5 grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On PAN</div>
                <div className="">Amit Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-2.5 grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-2.5 grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On PAN</div>
                <div className="">Amit Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-2.5 grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>

              <div className="grid grid-cols-3 gap-5 items-center">
                <div className="">Documents Uploaded</div>
                <div className="w-[150px] py-2.5 flex items-center justify-center rounded-[10px] border border-solid border-[#E0E0E0]">
                  <img className="mr-2" alt="doc_view" src={svgAssets.kyc.doc_view}></img>
                  <span >Rajendra Singh</span>
                </div>
                <div className="w-[150px] py-2.5 flex items-center justify-center rounded-[10px] border border-solid border-[#E0E0E0]">
                  <img className="mr-2" alt="doc_view" src={svgAssets.kyc.doc_view}></img>
                  <span >Rajendra Singh</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
          <div className="mb-5">PAN Details</div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <div className="mb-[15px] px-[18px] py-2.5 grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On PAN</div>
                <div className="">Amit Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-2.5 grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-2.5 grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On PAN</div>
                <div className="">Amit Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-2.5 grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>

              <div className="mb-[15px] grid grid-cols-3 gap-5 items-center">
                <div className="">Documents Uploaded</div>
                <div className="w-[150px] py-2.5 flex items-center justify-center rounded-[10px] border border-solid border-[#E0E0E0]">
                  <img className="mr-2" alt="doc_view" src={svgAssets.kyc.doc_view}></img>
                  <span >Rajendra Singh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
          <div className="mb-5">Mobile Number & Email Id</div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On PAN</div>
                <div className="">Amit Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 pb-2.5 border-b border-solid border-[#D9D9D9]">
          <div className="mb-5">Mobile Number & Email Id</div>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On PAN</div>
                <div className="">Amit Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
              <div className="mb-[15px] px-[18px] py-[11px] grid grid-cols-3 gap-5 items-center rounded-[10px] border border-solid border-[#F7F7F7]">
                <div className="text-[#90A5B5]">Name As On Aadhar</div>
                <div className="">Rajendra Singh</div>
              </div>
            </div>
          </div>
        </div>

        <BrokerageDetails />

      </div>
    </div>
  )
}

export default ReviewApplication