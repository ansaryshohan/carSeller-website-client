import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import logo from '../../SharedComponent/car icon-16.png'

const DashBoard = () => {
  const { user } = useContext(AuthContext)
  return (
    <article className="max-w px-full 6 py-24 mx-auto space-y-12 grid place-items-center">
      <div className="w-full mx-auto space-y-4 text-center flex flex-col items-center justify-center mt-16">
        <p className="text-xs font-semibold tracking-wider uppercase">
          <img src={logo} alt="" className='w-44 h-32' />
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl max-w-2xl">WelCome to the dashboard of
          CarSeller. Dear <span className='text-orange-600'>{user.displayName}</span></h1>
        <p className="text-sm text-gray-400">by
          <Link to="#" target="_blank" className="underline dark:text-violet-400">
            <span >     CarSeller</span>
          </Link>  on
          <time>  Feb 12th 2023</time>
        </p>
      </div>
    </article>
  );
};

export default DashBoard;