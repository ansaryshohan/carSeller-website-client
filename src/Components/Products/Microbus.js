import React, { useEffect, useState } from 'react';
import SingleCar from '../Home/ProductSection/SingleCar';

const Microbus = () => {
  const [microBusData, setMicroBusData] = useState([])
 
 useEffect(()=>{
  fetch('http://localhost:5000/products')
  .then(res=>res.json())
  .then(data=>{
    setMicroBusData(data.data.microBus)
  })
 },[])

  return (
    <div>
      
      <h1 className='text-center'>Micro Bus</h1>
      {
        microBusData.map(car=><SingleCar
        key={car._id}
        car={car}>

        </SingleCar>)
      }
    </div>
  );
};

export default Microbus;