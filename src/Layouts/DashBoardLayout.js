import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvide/AuthProvider';
import Sidebar from '../Components/DashBoard/SideBar';
import Spinner from '../SharedComponent/Spinner/Spinner';

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/user/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.data.role)
      setRole(data.data.role)
      setLoading(false)
    })
  }, [user])
  return (
    <div className='md:flex relative min-h-screen'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Sidebar role={role} />
          <div className='flex-1 md:ml-64'>
            <div className='p-5'>
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  )
};

export default DashBoardLayout;