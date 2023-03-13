import { useState, useEffect } from 'react';

import dog1 from './assets/dogpics/dog1.jpg';
import dog2 from './assets/dogpics/dog2.jpg';
import dog3 from './assets/dogpics/dog3.jpg';
import dog4 from './assets/dogpics/dog4.jpg';
import dog5 from './assets/dogpics/dog5.jpg';
import dog6 from './assets/dogpics/dog6.jpg';
import dog7 from './assets/dogpics/dog7.jpg';

const ImageSlide = () => {
  const dogPics = [dog1, dog2, dog3, dog4, dog5, dog6, dog7];
  const [currentDog, setCurrentDog] = useState(0);
  const [nextDog, setNextDog] = useState(1);
  const [firstImg, setFirstImg] = useState({
    position: 0,
    img: dogPics[0],
    slide: '',
  });
  const [secondImg, setSecondImg] = useState({
    position: window.innerWidth,
    img: dogPics[1],
    slide: '',
  });

  const moveImages = () => {
    setCurrentDog((currentDog) => currentDog + 1);
    setNextDog((nextDog) => nextDog + 1);

    if (firstImg.position === 0) {
      setSecondImg({
        position: 0,
        img: dogPics[nextDog],
        slide: 'slidein',
      });
      setFirstImg({
        position: -window.innerWidth,
        img: dogPics[currentDog],
        slide: 'slideout',
      });
      setTimeout(() => {
        setFirstImg({
          position: window.innerWidth,
          img: dogPics[nextDog],
          slide: '',
        });
      }, 2000);
    } else {
      setSecondImg({
        position: -window.innerWidth,
        img: dogPics[currentDog],
        slide: 'slideout',
      });
      setFirstImg({
        position: 0,
        img: dogPics[nextDog],
        slide: 'slidein',
      });
      setTimeout(() => {
        setSecondImg({
          position: window.innerWidth,
          img: dogPics[nextDog],
          slide: '',
        });
      }, 2000);
    }
  };

  if (currentDog >= dogPics.length) {
    setCurrentDog(0);
  }
  if (nextDog >= dogPics.length) {
    setNextDog(0);
  }
  useEffect(() => {
    const id = setInterval(() => {
      moveImages();
    }, 2500);

    return () => {
      clearInterval(id);
    };
  });
  return (
    <div className='mainImageCont'>
      <div
        style={{
          backgroundImage: `url(${firstImg.img})`,
          transform: `translate(${firstImg.position}px, 0)`,
        }}
        className={`bgImg ${firstImg.slide}`}
      ></div>
      <div
        style={{
          backgroundImage: `url(${secondImg.img})`,
          transform: `translate(${secondImg.position}px, 0)`,
        }}
        className={`bgImg ${secondImg.slide}`}
      ></div>
    </div>
  );
};

export default ImageSlide;
