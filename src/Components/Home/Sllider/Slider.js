import React from 'react';
import SliderItems from './SliderItems';

const Slider = () => {
  const sliderData =
    [
      {
        img: 'https://i.ibb.co/y0rGbmd/subara-brz.webp',
        id: 1,
        next: 2,
        previous: 5,
        title: <p className='uppercase text-4xl'>we don't sell cars. we sell a dream</p>,
        paragraph: <p className='uppercase text-xl'>here we provide the best facility for selling  & buying your car </p> ,
      },
      {
        img: 'https://i.ibb.co/2gphwLT/maza-mx-5-miata.webp',
        id: 2,
        next: 3,
        previous: 1,
        title: <p className='uppercase text-4xl'>we don't sell cars. we sell a dream</p>,
        paragraph: <p className='uppercase text-xl'>here we provide the best facility for selling  & buying your car </p> ,
      },
      {
        img: 'https://i.ibb.co/jvxvgdn/toyota-corolla.webp',
        id: 3,
        next: 4,
        previous: 2,
        title: <p className='uppercase text-4xl'>we don't sell cars. we sell a dream</p>,
        paragraph: <p className='uppercase text-xl'>here we provide the best facility for selling  & buying your car </p> ,
      },
      {
        img: 'https://i.ibb.co/ynm23zx/volkswagen.webp',
        id: 4,
        next: 5,
        previous: 3,
        title: <p className='uppercase text-4xl'>we don't sell cars. we sell a dream</p>,
        paragraph: <p className='uppercase text-xl'>here we provide the best facility for selling  & buying your car </p> ,
      },
      {
        img: 'https://i.ibb.co/hmG4nVc/toyota-gr86.webp',
        id: 5,
        next: 1,
        previous: 4,
        title: <p className='uppercase text-4xl'>we don't sell cars. we sell a dream</p>,
        paragraph: <p className='uppercase text-xl'>here we provide the best facility for selling  & buying your car </p> ,
      },


    ]

  return (
    <div className="carousel w-full">
      {
        sliderData.map(slider => <SliderItems
          key={slider.id}
          slider={slider}></SliderItems>)
      }
    </div>
  );
};

export default Slider;