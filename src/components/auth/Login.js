import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const { formData, updateFormData } = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  //onChange handler configured to handle change for all fields
  const onChange = (e) =>
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('awesome');
  };
  return (
    <div>
      <h1>Login</h1>
      <p>Log in to your account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => (onChange = e)}
            required
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => (onChange = e)}
            minLength='4'
          />
        </div>
        <input type='submit' value='Login' />
        <p>
          Not registered yet? <Link to='/register'>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
