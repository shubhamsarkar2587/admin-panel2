import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Searchbar = () => {
  return (
    <div className="w-[360px]">
      <Select options={options} />
    </div>
  )
}

export default Searchbar;
