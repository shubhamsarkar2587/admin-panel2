
const Checkbox = ({ labelText, labelWidth, className }) => {

  return (
    <label className="mb-6 inline-flex items-start">
      <input type="checkbox" className="min-w-[20px] h-5 mt-[3px] rounded-full bg-white focus:ring-0"  />
      <span
        className={`ml-2 inline-block w-[${labelWidth || '100%'} text-[#323232]`}
      >
        {labelText}
      </span>
    </label>
  )
}

export default Checkbox;