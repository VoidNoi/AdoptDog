import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import DogList from './DogList';

const Adopt = () => {
  const setBarColor = useOutletContext();

  useEffect(() => {
    setBarColor('Black');
  }, []);

  return (
    <section className='adopt'>
      {DogList.map((dog) => {
        return (
          <div className='dogPicCont' key={dog.id}>
            <h3>{dog.name}</h3>
            <img className='dogPic' src={dog.image} alt='' />
          </div>
        );
      })}
    </section>
  );
};

export default Adopt;
