import React, { useState } from 'react';

function Checkbox({ options }) {
  const [selectedOptions, setSelectedOptions] = useState(
    options.reduce((acc, option) => ({ ...acc, [option]: false }), {})
  );

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleSelectAll = () => {
    const allSelected = Object.values(selectedOptions).every((value) => value);
    const newSelectedOptions = Object.keys(selectedOptions).reduce(
      (acc, option) => ({ ...acc, [option]: !allSelected }),
      {}
    );
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSelectAll}
      >
        Select All
      </button>
      <div>
        {options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions[option]}
                onChange={() => handleCheckboxChange(option)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{option}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">Selected Options:</h3>
        <ul>
          {Object.entries(selectedOptions).map(([key, value]) => (
            <li key={key} className="text-sm">
              {key}: {value.toString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Checkbox;
