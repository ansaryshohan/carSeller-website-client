import React, { useEffect, useState } from 'react';
import SingleCar from '../Home/ProductSection/SingleCar';

const LuxuryCar = () => {
  const [luxuryCarData,setLuxuryCarData] = useState([])

 
  useEffect(()=>{
    fetch('http://localhost:5000/products')
  .then(res=>res.json())
  .then(data=>{
    setLuxuryCarData(data.data.luxuryCar)
  })
  },[])

  return (
    <div>
       <h1 className='text-center'>Luxury Car</h1>
      {
        luxuryCarData.map(car=><SingleCar
        key={car._id}
        car={car}>

        </SingleCar>)
      }
    </div>
  );
};

export default LuxuryCar;