import React from 'react';

function Checkbox({ options }) {
  return (
    <div>
      {options.map((option, index) => (
        <div >
          <label>
            <input
              type="checkbox"
              value={option}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Checkbox;