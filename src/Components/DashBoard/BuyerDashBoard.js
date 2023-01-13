import React from 'react';
import { FaFingerprint } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const BuyerDashBoard = () => {
  return (
    <div>
      <NavLink
        to='/dashboard/myorders'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform ${isActive ? 'active' : 'text-[#6D67E4]'
          }`
        }
      >
        <FaFingerprint className='w-5 h-5' />

        <span className='mx-4 font-medium'>My Orders</span>
      </NavLink>

    </div>
  );
};

export default BuyerDashBoard;