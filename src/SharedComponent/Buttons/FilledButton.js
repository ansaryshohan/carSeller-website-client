import React from 'react';

const FilledButton = ({ children, btnType, btnClassName }) => {
  return (
    <button
      type={btnType? btnType:''}
      className={`${btnClassName}btn btn-success text-white  lg:w-40 font-medium lg:font-bold bg-gradient-to-r from-[#4776E6] to-[#8E54E9]  hover:text-[#] border-[#4776E6] hover:border-[#4776E6]`}>
      {children}
    </button>
  );
};

export default FilledButton;