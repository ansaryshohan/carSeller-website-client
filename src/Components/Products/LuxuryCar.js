import React, { useEffect, useState } from 'react';
import SingleCar from '../Home/ProductSection/SingleCar';
import ModalCard from './ModalCard';

const LuxuryCar = () => {
  const [luxuryCarData, setLuxuryCarData] = useState([])
  const[productInfo,setProductInfo]=useState({})


  useEffect(() => {
    fetch('https://car-seller-server-nine.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        setLuxuryCarData(data.data.luxuryCar)
      })
  }, [])

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-3xl py-16 font-bold'>Luxury Car</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mx-auto'>
        {
          luxuryCarData.map(car => <SingleCar
            key={car._id}
            car={car}
            setProductInfo={setProductInfo}>

          </SingleCar>)
        }
      </div>
      <ModalCard productInfo={productInfo}></ModalCard>
    </div>
  );
};

export default LuxuryCar;