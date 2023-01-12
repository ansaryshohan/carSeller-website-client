import React, { useEffect, useState } from 'react';
import FilledButton from '../../../SharedComponent/Buttons/FilledButton';
import SingleCar from './SingleCar';

const ProductSection = () => {
  const [luxuryCarData,setLuxuryCarData] = useState([])
 
  useEffect(()=>{
    fetch('http://localhost:5000/products')
  .then(res=>res.json())
  .then(data=>{
    setLuxuryCarData(data.data.luxuryCar)
  })
  },[])

  return (
    <div className='container mx-auto'>
      <h1>Our Products</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mx-auto'>
      {
        luxuryCarData.map(car=><SingleCar
        key={car._id}
        car={car}>

        </SingleCar>)
      }
      
      </div>

      <FilledButton btnClassName={"mt-16 py-6"}> see all</FilledButton>
    </div>
  );
};

export default ProductSection;