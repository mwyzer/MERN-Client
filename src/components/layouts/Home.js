import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <div>
        <div>
          <h1>Professional Development</h1>
          <p>Learn more, earn more!</p>
          <div>
            <Link to='/register'>Register</Link>
          </div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
