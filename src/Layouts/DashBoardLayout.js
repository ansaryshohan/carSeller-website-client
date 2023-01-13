import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvide/AuthProvider';
import Sidebar from '../Components/DashBoard/SideBar';
import Spinner from '../SharedComponent/Spinner/Spinner';

const DashBoardLayout = () => {
  const { user,userRole } = useContext(AuthContext)

  return (
    <div className='md:flex relative min-h-screen'>
      {user && userRole ?(
        <>
          <Sidebar role={userRole} />
          <div className='flex-1 md:ml-64'>
            <div className='p-5'>
              <Outlet />
            </div>
          </div>
        </>
      ):
      (
        <Spinner />
      )}
    </div>
  )
};

export default DashBoardLayout;