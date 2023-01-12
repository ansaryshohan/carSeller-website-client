import React from 'react';
import { FaBookmark, FaFingerprint } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AdminDashBoard = () => {
  return (
    <>
      <NavLink
        to='/allusers'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform ${
            isActive ? 'active' : 'text-[#6D67E4]'
          }`
        }
      >
        <FaFingerprint className='w-5 h-5' />

        <span className='mx-4 font-medium'>All Users</span>
      </NavLink>

      <NavLink
        to='/allsellers'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform ${
            isActive ? 'active' : 'text-[#6D67E4]'
          }`
        }
      >
        <FaFingerprint className='w-5 h-5' />

        <span className='mx-4 font-medium'>All Sellers</span>
      </NavLink>

      <NavLink
        to='/allbookings'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform ${
            isActive ? 'active' : 'text-[#6D67E4]'
          }`
        }
      >
        <FaBookmark className='w-5 h-5' />

        <span className='mx-4 font-medium'>All Bookings</span>
      </NavLink>
    </>
  );
};

export default AdminDashBoard;