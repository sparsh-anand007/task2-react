import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="w-auto h-screen mt-0 bg-cyan-300 md:bg-cyan-400">
      <div className="w-auto h-screen mt-0">
        <p className="text-center text-4xl text-green-300 md:text-green-200 font-serif font-bold">
          Count on me
        </p>
        <div className="m-auto mb-3 w-45 mt-32 grid h-auto  sm:w-2/3 3xl bg-blue-500 sm:h-auto md:w-2/3 lg:w-1/2 sm:bg-blue-500 hover:shadow-lime-200 drop-shadow-lg shadow-xl">
          <input
            id="I2"
            type="text"
            placeholder="0"
            className="m-auto sm:h-16 mt-3 w-2/3 border shadow-md rounded-lg bg-yellow-100 h-11 pl-2 pd-2 text-gray-600  hover:shadow-yellow-200 text-3xl font-extrabold"
            value={input}
            readOnly
          />
          <div className="m-auto">
            {['7', '8', '9', '+'].map((value) => (
              <button
                key={value}
                className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-green-200 font-semibold text-blue-900 shadow-lg"
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="m-auto">
            {['4', '5', '6', '-'].map((value) => (
              <button
                key={value}
                className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-green-200 font-semibold text-blue-900 shadow-lg"
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="m-auto">
            {['1', '2', '3', '*'].map((value) => (
              <button
                key={value}
                className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-green-200 font-semibold text-blue-900 shadow-lg"
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="m-auto mb-4">
            {['C', '0', '=', '/'].map((value) => (
              <button
                key={value}
                className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-red-400 font-semibold text-blue-900 shadow-lg"
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
      <h2>Made By Sparsh Anand</h2>
    </div>
  );
}

export default Calculator;
