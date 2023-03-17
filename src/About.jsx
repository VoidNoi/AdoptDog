import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Teammates from './Teammates';

const About = () => {
  const setBarColor = useOutletContext();
  const [teammates, setTeammates] = useState([]);

  useEffect(() => {
    setBarColor('Black');
  }, []);

  console.log(teammates);
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
        {Teammates.map((teammate) => {
          const { id, image, name } = teammate;
          return (
            <div key={id}>
              <img className='teammateImg' src={image} alt='' />
              <p className='teammateName'>{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
