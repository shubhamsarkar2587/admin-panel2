import { Select } from 'antd';

const selectOption = [
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'Yiminghe',
    label: 'yiminghe',
  },
]

const SelectItem = ({ height, placeholder }) => {
  return (
    <Select
      placeholder={placeholder}
      style={{
        width: '100%',
        height: height || '44px'
      }}
      options={selectOption}
      bordered={false}
      className={`flex items-center text-[#323232] border border-solid border-[#DFDFDF] rounded-[10px] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] bg-white`}
    />
  )
}

export default SelectItem;
