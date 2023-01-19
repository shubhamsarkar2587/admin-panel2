
const CommonInput = ({ height, isDisable, placeholder }) => {
  return (
    <input
      className={`px-4 text-[#323232] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)]`}
      style={{
        height: height || '47px'
      }}
      placeholder={placeholder}
      disabled={isDisable}
    />
  )
}

export default CommonInput