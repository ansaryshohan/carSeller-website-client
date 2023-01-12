import React from 'react';
import './slideritems.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import FilledButton from '../../../SharedComponent/Buttons/FilledButton';

const SliderItems = ({ slider }) => {
  const { id, next, previous, title, paragraph, img } = slider
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-[70vh] lg:h-3/4">
      <div className='img-gradient w-full h-full '>
        <img src={img} alt='' className="w-full lg:h-3/4 h-full " />
      </div>

      {/* slider arrows */}
      <div className="absolute flex justify-between transform -translate-y-1/2 
        right-0 bottom-0 lg:right-10 lg:bottom-16  md:right-10 md:bottom-10">
        <a href={`#slide${previous}`} className="btn btn-circle mr-4 md:mr-6 lg:mr-9">
          <FaArrowLeft className='text-[#579BB1] lg:text-xl md:text-xl text-base' />
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          <FaArrowRight className='text-[#579BB1] lg:text-xl md:text-xl text-base' />
        </a>
      </div>

      {/* slider texts */}
      <div className="absolute flex flex-col justify-between items-center transform -translate-y-1/2 top-1/2 left-32">
        <div className='flex flex-col gap-4 md:gap-8 lg:gap-10'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white w-4/5 lg:full'>{title}</h1>
          <p className='text-xs md:text-xl lg:text-xl font-semibold text-white w-full'>{paragraph}</p>
          <div className='mt-5 md:mt-20 lg:mt-20 flex gap-5'>
            <FilledButton btnClassName={"btn btn-success  lg:w-40 font-medium lg:font-bold"}> Get Started</FilledButton>
            <button className="btn btn-outline font-medium w-32 md:w-40 md:font-bold lg:w-40 lg:font-bold text-[#579BB1] border-[#579] hover:bg-[#579]"> See Our Products</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SliderItems;