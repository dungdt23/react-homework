import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">{count}</h2>
      <div>
        <button
          onClick={decrement}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          -
        </button>
        <button
          onClick={increment}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
