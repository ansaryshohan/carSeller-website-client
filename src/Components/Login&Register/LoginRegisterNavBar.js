import React from 'react';
import { Link } from 'react-router-dom';

const LoginRegisterNavBar = () => {
  return (
    <div className='flex w-3/5 bg-[#D2DAFF] mx-auto '>
      <Link to='/login'
      className='flex-1'>
      <div className='flex-1 text-center border-4 border-r-[#8E54E9] cursor-pointer p-4 text-2xl font-bold'>
        <h1>Login</h1>
      </div>
      </Link>
      <Link to='/login/register'
      className='flex-1'>
      <div className=' text-center cursor-pointer border-4 border-l-[#8E54E9] p-4 text-2xl font-bold'>
        <h1>Register</h1>
      </div>
      </Link>
    </div>
  );
};

export default LoginRegisterNavBar;