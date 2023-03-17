import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import DogList from './DogList';
import { MdEmail, MdPhone } from 'react-icons/md';

const Adopt = () => {
  const setBarColor = useOutletContext();
  const [dogs, setDogs] = useState(DogList);

  useEffect(() => {
    setBarColor('Black');
  }, []);

  let dogsCopy = [...dogs];

  const showInfo = (dogId) => {
    let dogCopy = { ...dogsCopy[dogId] };
    dogCopy.open = !dogCopy.open;
    dogsCopy[dogId] = dogCopy;
    setDogs(dogsCopy);
  };

  return (
    <section className='adopt'>
      <div className='adoptTextCont'>
        <p className='adoptText'>
          If you're interested in adopting any of these dogs contact us via
          email or by calling the number below
        </p>
        <div className='contactInfo'>
          <a href='mailto:adoptdog@adoptdog.dog' className='contacts'>
            <MdEmail />
            adoptdog@adoptdog.dog
          </a>
          <a href='tel:777777777' className='contacts'>
            <MdPhone />
            777777777
          </a>
        </div>
      </div>
      <div className='dogsCont'>
        {dogsCopy.map((dog) => {
          const { id, name, gender, breed, image, open } = dog;
          return (
            <div className='dogCont' key={id} onClick={() => showInfo(id)}>
              <h3 className={`dogName ${open ? 'dogNameShow' : ''}`}>{name}</h3>
              <div className='dogPicCont'>
                <img className='dogPic' src={image} alt='' />
              </div>
              <div className={`dogInfo ${open ? 'dogInfoShow' : ''}`}>
                <p>Gender: {gender}</p>
                <p>Breed: {breed}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Adopt;
