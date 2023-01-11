import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const errorObj= useRouteError()
  const{status,statusText}=errorObj;
  return (
   <div className='flex items-center justify-center py-60'>
     <div className='flex items-center justify-center text-center flex-col w-2/4 '>
      <h1 className='text-6xl font-bold'>OOppss..!!!</h1>
      <p className='text-xl font-medium'>An Error occured</p>

      {/* <p className='text-sm font-medium text-red-500'>{error.message}</p> */}
      <p className='text-[#028090] text-2xl font-bold'>{status}</p>
      <p>{statusText}</p>
      <Link to='/'><button className='border mb-52 px-5 py-2 text-xl font-medium rounded-xl bg-[#028090] text-[#EDF913] hover:bg-[#EDF913] hover:text-[#028090] hover:border-[#028090] hover:font-semibold ease-in transition'>Go to Homepage.</button></Link>

    </div>
   </div>
  )
};

export default ErrorPage;