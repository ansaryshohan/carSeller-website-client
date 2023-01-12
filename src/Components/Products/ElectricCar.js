import React, { useEffect, useState } from 'react';
import SingleCar from '../Home/ProductSection/SingleCar';

const ElectricCar = () => {
  const [electricCarData,setElectricCarData] = useState([])

 
 useEffect(()=>{
  fetch('http://localhost:5000/products')
  .then(res=>res.json())
  .then(data=>{
    setElectricCarData(data.data.electricCar)
  })
 },[])

  return (
    <div>
       <h1 className='text-center'>electricCar Car</h1>
      {
        electricCarData.map(car=><SingleCar
        key={car._id}
        car={car}>

        </SingleCar>)
      }
    </div>
  );
};

export default ElectricCar;