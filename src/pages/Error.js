import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <section>
      <h2>Something went wrong.</h2>
      <Link to="/">Back Home</Link>
    </section>
  );
}

export default Error;
