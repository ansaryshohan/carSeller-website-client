import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../SharedComponent/car icon-16.png'
import { FaArrowRight, FaBars } from 'react-icons/fa'
import { AuthContext } from '../../AuthProvide/AuthProvider'
import FilledButton from '../../SharedComponent/Buttons/FilledButton'
import AdminDashBoard from './AdminDashBoard'
import SellerDashBoard from './SellerDashBoard'
import BuyerDashBoard from './BuyerDashBoard'


const Sidebar = ({ role}) => {
  const { user, logOut } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState('false')
  const navigate= useNavigate()
 
  // Sidebar responsiveness handling
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLogOut=()=>{
     logOut()
    navigate('/home')
  }

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-[#EEF1FF] text-[#6D67E4] flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img src={logo} alt="" className=' w-2/6 ' />
              <span className="ml-2 text-2xl font-bold tracking-wide text-[#6D67E4] uppercase">
                car<span className='text-[#8E54E9]'>seller</span>
              </span>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
        >
          <FaBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isOpen && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* User Profile Info */}
          <div>
            <h2 className='text-3xl cursor-pointer font-semibold text-center text-gray-800 '>
              <Link to='/'
              className='flex items-center justify-center'>
                <img src={logo} alt="" className=' w-2/6 ' />
                <span className="ml-2 text-2xl font-bold tracking-wide text-[#6D67E4] uppercase">
                  car<span className='text-[#8E54E9]'>seller</span>
                </span>
              </Link>
            </h2>
            <div className='flex flex-col items-center mt-6 -mx-2'>
              <Link to='/dashboard'>
                <img
                  className='object-cover w-24 h-24 mx-2 rounded-full'
                  src={user?.photoURL}
                  alt='avatar'
                  referrerPolicy='no-referrer'
                />
              </Link>
              <Link to='/dashboard'>
                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                  {user?.displayName}
                </h4>
              </Link>
              <Link to='/dashboard'>
                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* NavBar Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              {
                role === 'admin' ? <AdminDashBoard />
                  :
                  role === 'Seller' ? <SellerDashBoard />
                    :
                    <BuyerDashBoard />
              }
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <Link 
          onClick={handleLogOut}>
          <FilledButton
            btnClassName={"flex block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform"}>

            <span className='mx-4 font-medium'>Logout</span>
            <FaArrowRight className='w-5 h-5' />
          </FilledButton>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar