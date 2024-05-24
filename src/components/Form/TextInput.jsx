import React from "react";

const TextInput = ({ label, value, onChange, onBlur, placeholder, name, type = "text", error, ...rest }) => (
  <div className="mb-4 w-full">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      name={name}
      type={type}
      {...rest}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        error ? "border-red-500" : ""
      }`}
    />
    {error && <p className="text-red-500 text-xs italic">{error}</p>}
  </div>
);

export default TextInput;
