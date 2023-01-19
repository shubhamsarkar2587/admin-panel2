
const CommonInput = ({ height, isDisable, placeholder }) => {
  return (
    <input
      className={`h-[${height || '47px'}] px-4 text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]`}
      placeholder={placeholder}
      disabled={isDisable}
    />
  )
}

export default CommonInput