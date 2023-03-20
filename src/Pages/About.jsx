import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Teammates from '../Data/Teammates';

const About = () => {
  const setBarColor = useOutletContext();

  useEffect(() => {
    setBarColor('Black');
  }, []);

  return (
    <section className='about'>
      <h1 className='aboutTitle'>Who are we?</h1>
      <p className='aboutDescription'>
        We are Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
        commodi, alias ex voluptatum velit officia veniam reprehenderit iusto,
        quam perspiciatis porro, iste perferendis. Deleniti maxime quod error
        ipsam eius. Ratione!
      </p>
      <p className='aboutDescription'>
        We have been Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque, exercitationem dicta. Voluptate totam labore deserunt
        excepturi sequi, deleniti quam, vero possimus, sed dignissimos tempora
        atque? Doloribus sit tenetur perspiciatis natus.
      </p>
      <div className='teamCont'>
        {Teammates.map((teammate, index) => {
          const { id, image, name } = teammate;
          return (
            <div key={id}>
              <img className='teammateImg' src={image} alt='' />
              <p className='teammateName'>{name}</p>
            </div>
          );
        })}
      </div>
      <div className='curve'></div>
    </section>
  );
};

export default About;
