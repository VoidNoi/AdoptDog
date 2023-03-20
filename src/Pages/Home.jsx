import React, { useEffect } from 'react';
import ImageSlide from '../Components/ImageSlide';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const setBarColor = useOutletContext();

  useEffect(() => {
    setBarColor('White');
  }, []);

  return (
    <div>
      <div className='mainCont'>
        <h1 className='title'>Adopt a dog!</h1>
        <p className='mainText'>
          Every year, 6.5 million animals enter shelters. But only 3.2 million
          are adopted
        </p>
        <p className='mainText'>
          Become a dog owner and save the life of your future best friend!
        </p>
      </div>
      <div className='shade'></div>
      <ImageSlide />
    </div>
  );
};

export default Home;
