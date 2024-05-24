import React from "react";

const SelectInput = ({ label, value, onChange, onBlur, name, options, error, ...rest }) => (
  <div className="mb-4 w-full">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
      className={`block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${
        error ? "border-red-500" : ""
      }`}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs italic">{error}</p>}
  </div>
);

export default SelectInput;
