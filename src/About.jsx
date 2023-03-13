import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const About = () => {
  const setBarColor = useOutletContext();

  useEffect(() => {
    setBarColor('Black');
  }, []);

  return <div>About</div>;
};

export default About;
