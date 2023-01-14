import React from 'react';
import { FaFileAlt, FaFileExport } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SellerDashBoard = () => {
  return (
    <div>
      <NavLink
        to='/dashboard/addaproduct'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform ${
            isActive ? 'active' : 'text-[#6D67E4]'
          }`
        }
      >
        <FaFileExport className='w-5 h-5' />

        <span className='mx-4 font-medium'>Add A Product</span>
      </NavLink>

      <NavLink
       to='/dashboard/myproduct'
       className={({ isActive }) =>
         `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform ${
           isActive ? 'active' : 'text-[#6D67E4]'
         }`
       }
      >
        <FaFileAlt className='w-5 h-5' />

        <span className='mx-4 font-medium'>My Products</span>
      </NavLink>
    </div>
  );
};

export default SellerDashBoard;