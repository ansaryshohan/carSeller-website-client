import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvide/AuthProvider';

const ModalCard = ({ productInfo }) => {
  const { product_name, selling_price } = productInfo;
  const { user,userRole } = useContext(AuthContext);
  const todayDate  = new Date();
  const userName= user?.displayName;
  const userEmail= user?.email;

  const handleOnSubmit=(event)=>{
    event.preventDefault();
    const phone= event.target.phone.value;
    const location= event.target.location.value;
    const bookingData={
      product_name,
      selling_price,
      userName:user?.displayName,
      email:user?.email,
      phone,
      location,
      todayDate,
    }
   if(userRole==='buyer'){
    fetch('http://localhost:5000/booking',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bookingData),
    })
    .then(res=>res.json())
    .then(data=>{
      if(data?.data?.acknowledged){
        toast.success('your product is successfully booked')
      }
    })
  }
  else{
    toast.error('You need a buyer account to book Product')
  }
}
  

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <h3 className="text-lg font-bold mb-5 text-center">{product_name}</h3>

          {/* modal form starts here */}
          <form onSubmit={handleOnSubmit} className='grid gap-2'>
           <input type="text"  value={userName} className="input input-bordered w-full" disabled />
          <input type="text" value={ userEmail} className="input input-bordered w-full " disabled  />
          <input type="text" value={product_name} className="input input-bordered w-full " disabled  />
          <input type="text" value={selling_price} className="input input-bordered w-full " disabled  /> 

          <input type="number" placeholder="Phone Number" className="input input-bordered  w-full " name='phone' />

          <input type="text" placeholder="Preferred Meeting Location" className="input  input-bordered w-full " name='location' />
          <input 
          type="submit"
           value=" Book Your Car" 
           className="btn py-2 px-2 rounded-xl mt-6 btn-success text-white  lg:w-full font-medium lg:font-bold bg-gradient-to-r from-[#4776E6] to-[#8E54E9]  hover:text-[#] border-[#4776E6] hover:border-[#4776E6]" 
           />
          </form>
          
        </div>
      </div>
    </>
  );
};

export default ModalCard;