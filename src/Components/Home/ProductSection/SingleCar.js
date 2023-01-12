import React from 'react';
import { FaUser } from 'react-icons/fa';
import FilledButton from '../../../SharedComponent/Buttons/FilledButton';

const SingleCar = ({ car }) => {
  const { product_name, img, description, original_price, selling_price, location, years_of_use, seller_name, status, posting_time,sellerImage } = car;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>

      <div className="card-body items-center text-center flex flex-col gap-4">
        <h2 className="card-title">{product_name}</h2>
        <p>{description.slice(0, 60)}...</p>

        <div className='flex justify-between gap-3'>
          <div className='flex flex-col gap-1 text-left'>
          <h1>{location}</h1>
          <p>status : {status}</p>
          </div>
          <div className='text-left'>
            <h1>Buying Price: <span className='line-through'>{original_price}</span></h1>
            <h1>Reselling Price: {selling_price}</h1>
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <div  className=" w-12 h-12 rounded-full shadow dark:bg-gray-500 items-center justify-center flex">
            <FaUser className='text-center' size={25}/>
          {/* <img alt="" src={ <FaUser/>} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" /> */}
          </div>
          <div className="flex flex-col space-y-1 text-left">
            <h1>seller:{seller_name}</h1>
            <p>year of use: {years_of_use}</p>
            <p>Date of posting:{posting_time}</p>
          </div>
        </div>

        <div className="card-actions">
          {/* <button className="btn btn-primary">Book Now</button> */}
          <FilledButton btnClassName={"py-4 mt-6"}>Buy Now</FilledButton>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;