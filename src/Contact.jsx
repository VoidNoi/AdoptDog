import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Contact = () => {
  const setBarColor = useOutletContext();

  useEffect(() => {
    setBarColor('Black');
  }, []);

  return <div>Contact</div>;
};

export default Contact;
