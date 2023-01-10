const InitMobileEmail = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-[22px] font-medium text-lg leading-[27px]">Mobile and Email Verification</div>
      <div className="grid grid-cols-2 gap-7">
        <div>
          <div className="flex flex-col mb-8">
            <span className="mb-3">Mobile Number *</span>
            <input className="p-4 text-[#989898] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]" placeholder="Please enter email id" />
          </div>
          <div className="flex flex-col mb-8">
            <span className="mb-3">Email Id *</span>
            <input className="p-4 text-[#989898] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]" placeholder="Please enter email id" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitMobileEmail;