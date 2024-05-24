import React from "react";

const CheckboxInput = ({ label, checked, onChange, onBlur, name, error, ...rest }) => (
  <div className="mb-4 w-full flex items-center">
    <input
      id={name}
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
      className="mr-2 leading-tight"
    />
    <label htmlFor={name} className="text-gray-700 text-sm">
      {label}
    </label>
    {error && <p className="text-red-500 text-xs italic ml-2">{error}</p>}
  </div>
);

export default CheckboxInput;
