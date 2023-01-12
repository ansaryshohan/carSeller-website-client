import React from 'react';
import HeadTitle from '../../../SharedComponent/HeadTitle/HeadTitle';
import ProductSection from '../ProductSection/ProductSection';
import Slider from '../Sllider/Slider';

const Home = () => {
  return (
    <div>
      <HeadTitle title='home'></HeadTitle>

      <Slider></Slider>
      <ProductSection></ProductSection>
      
    </div>
  );
};

export default Home;