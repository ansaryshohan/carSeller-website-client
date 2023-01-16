import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvide/AuthProvider';
import Sidebar from '../Components/DashBoard/SideBar';
import Spinner from '../SharedComponent/Spinner/Spinner';

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext)
  const [userRole, setUserRole] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://car-seller-server-nine.vercel.app/user/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setUserRole(data?.data?.role)
        setLoading(false)
      })

  }, [user])

  return (
    <div className='md:flex relative min-h-screen'>

      {!loading ?
          <>
            <Sidebar />
            <div className='flex-1 md:ml-64'>
              <div className='p-5'>
                <Outlet />
              </div>
            </div>
          </>
          :
          <>      
             <Spinner />
          </>

      }
    </div>
  )
};

export default DashBoardLayout;