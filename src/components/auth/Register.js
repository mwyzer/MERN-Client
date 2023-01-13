import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, updateFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = formData;

  //onChange handler configuration
  const onChange = (e) =>
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  //onSubmit handler
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Password must match');
    } else {
      console.log(formData);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <p>Specify your account info</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <div>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <input type='submit' value='Register' />
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
