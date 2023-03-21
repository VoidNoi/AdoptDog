import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <section className='errorPage'>
      <Link className='errorBtn' to={'/AdoptDog'}>
        Go back to home page
      </Link>
      <h1>Sorry, an unexpected error has occurred</h1>
      <h1>o(╥﹏╥)o</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
};

export default Error;
