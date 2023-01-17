import React, { useState } from 'react';
import classNames from 'classnames';

const SearchBar = ({ searchbarWidth, border }) => {
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState(['Tony Stark', 'Option 1', 'Option 2', 'Option 3']);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className={`w-[350px] relative rounded-[10px] border-[#D6D3D3] shadow-[0px_2px_10px_rgba(201,201,201,0.25)] focus:outline-none focus:shadow-outline-blue focus:border-blue-500 bg-white
      ${border ? border : ''}
    `}>
      <div className="flex px-3.5 py-3 items-center justify-between">
        <input
          className="w-full pr-5 m-0 text-sm outline-none border-none"
          type="text"
          placeholder="Search by Name, Mobile Number, LD code"
          value={searchText}
          onChange={handleSearch}
        />
        <div className="absolute inset-y-0 right-2.5 flex items-center pl-3">
          <svg className="h-4 w-4 fill-current text-[#A3A3A3]" viewBox="0 0 20 20">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </div>

      </div>
      <div
        className={classNames(
          'absolute z-50 w-full left-0 top-14 rounded-b-lg border-b-lg shadow-md bg-white',
          { hidden: searchText === "" }
        )}
      >
        <ul className="list-reset">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;