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
          <a href='mailto:adoptdog@adoptdog.dog'>
            <MdEmail />
            adoptdog@adoptdog.dog
          </a>
          <a href='tel:777777777'>
            <MdPhone />
            777777777
          </a>
        </div>
      </div>
      <div className='dogsCont'>
        {dogsCopy.map((dog) => {
          return (
            <div
              className='dogCont'
              key={dog.id}
              onClick={() => showInfo(dog.id)}
            >
              <h3 className={`dogName ${dog.open ? 'dogNameShow' : ''}`}>
                {dog.name}
              </h3>
              <div className='dogPicCont'>
                <img className='dogPic' src={dog.image} alt='' />
              </div>
              <div className={`dogInfo ${dog.open ? 'dogInfoShow' : ''}`}>
                <p>Gender: {dog.gender}</p>
                <p>Breed: {dog.breed}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Adopt;
