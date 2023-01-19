import { Select } from 'antd';
import { svgAssets } from '../../assets/asset';

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
      suffixIcon={<img height={24} alt="dropdown_icon" src={svgAssets.dropdown_icon} />}
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
