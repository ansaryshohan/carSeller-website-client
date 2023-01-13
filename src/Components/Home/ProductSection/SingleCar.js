import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvide/AuthProvider';



const SingleCar = ({ car, setProductInfo }) => {
  const { userRole } = useContext(AuthContext)
  const { product_name, img, description, original_price, selling_price, location, years_of_use, seller_name, status, posting_time, sellerImage } = car;


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>

      <div className="card-body items-center text-center flex flex-col gap-4">
        <h2 className="card-title text-3xl ">{product_name}</h2>
        <p className='text-[#B1B2FF]'>{description.slice(0, 60)}...</p>

        <div className='flex flex-col justify-between gap-5 text-xl'>
          <div className='flex flex-col gap-1 text-left'>
            <h1 className='text-[#B1B2FF] text-lg'>location: <span className='text-xl text-[#8E54E9]' >{location}</span></h1>
            <p className='text-[#B1B2FF] text-lg'>status : <span className='text-xl text-[#8E54E9]'> {status}</span></p>
          </div>
          <div className='text-left'>
            <h1 className='text-[#B1B2FF] text-lg'>Buying Price: <span className='line-through'>{original_price}</span></h1>
            <h1 className='text-[#B1B2FF]'>Reselling Price: <span className='text-xl text-[#8E54E9]'>{selling_price}</span></h1>
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <div className=" w-12 h-12 rounded-full shadow dark:bg-gray-500 items-center justify-center flex">
            {
              sellerImage ?
                <>  {/* <img alt="" src={ <FaUser/>} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" /> */}</> :
                <FaUser className='text-center' size={25} />

            }
          </div>
          <div className="flex flex-col text-left align-text-top leading-none">
            <h1 className='text-[#B1B2FF] text-base'>seller: <span className='text-lg text-[#8E54E9]'>
              {seller_name}</span> </h1>
            <p className='text-[#B1B2FF] text-base'>year of use: <span className='text-lg text-[#8E54E9]'>
              {years_of_use}</span> </p>
            <p className='text-[#B1B2FF] text-base'>Date of posting: <span className='text-lg text-[#8E54E9]'>
              {posting_time}</span> </p>
          </div>
        </div>

        <div className="card-actions">
          {userRole && userRole=== 'Buyer' ?
            <label
              htmlFor="booking-modal"
              className="btn py-2 px-2 rounded-xl mt-6 btn-success text-white  lg:w-40 font-medium lg:font-bold bg-gradient-to-r from-[#4776E6] to-[#8E54E9]  hover:text-[#] border-[#4776E6] hover:border-[#4776E6]"
              onClick={() => setProductInfo({ product_name, selling_price })}>
              Buy Now
            </label>
            :
            <button
            className="btn py-2 px-2 rounded-xl mt-6 btn-success text-white  lg:w-80 font-medium lg:font-bold bg-gradient-to-r from-[#4776E6] to-[#8E54E9]  hover:text-[#] border-[#4776E6] hover:border-[#4776E6] cursor-not-allowed"> need a buyer account</button>
          }
        </div>
      </div>
    </div>
  );
};

export default SingleCar;