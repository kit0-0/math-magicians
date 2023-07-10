import React from 'react';

function Calculator() {
  const renderButton = (text, name, color, style) => (
    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <button
        type="button"
        className={`rounded-full h-12 w-20 flex items-center ${color} justify-center shadow-lg hover:border-gray-500 focus:outline-none ${style}`}
        name={name}
      >
        {text}
      </button>
    </div>
  );

  return (
    <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-[#a4a4a4] shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <div className="">
        <div className="p-5 text-white text-right text-3xl bg-[#515151]">
          <span className="text-white-500">
            0
          </span>
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20">
          {renderButton('AC', 'AC', 'bg-gray-800')}
          {renderButton('+/-', '+/-', 'bg-gray-800')}
          {renderButton('%', '%', 'bg-gray-800')}
          {renderButton('÷', '/', 'bg-orange-500')}
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20">
          {renderButton('7', '7', 'bg-gray-800')}
          {renderButton('8', '8', 'bg-gray-800')}
          {renderButton('9', '9', 'bg-gray-800')}
          {renderButton('×', '*', 'bg-orange-500')}
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20">
          {renderButton('4', '4', 'bg-gray-800')}
          {renderButton('5', '5', 'bg-gray-800')}
          {renderButton('6', '6', 'bg-gray-800')}
          {renderButton('-', '-', 'bg-orange-500')}
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20">
          {renderButton('1', '1', 'bg-gray-800')}
          {renderButton('2', '2', 'bg-gray-800')}
          {renderButton('3', '3', 'bg-gray-800')}
          {renderButton('+', '+', 'bg-orange-500')}
        </div>

        <div className="flex items-stretch bg-[#c8c8c8] h-20 mb-4">
          {renderButton('0', '0', 'bg-gray-800', 'w-52')}
          {renderButton('.', '.', 'bg-gray-800')}
          {renderButton('=', '=', 'bg-orange-500')}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
