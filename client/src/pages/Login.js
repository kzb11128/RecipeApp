import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
<>
<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
  <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
    <h1 className="text-3xl font-semibold text-center text-green-700 underline">
      Sign in
    </h1>
    <form className="mt-6" onSubmit={handleFormSubmit}>
    <div className="mb-2">
      <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email"
        className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
        value={formState.email}
        onChange={handleChange}
      />
    </div>
    <div className="mb-2">
      <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="******"
        className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
        value={formState.password}
        onChange={handleChange}
      />
    </div>
      <a href="#" className="text-xs text-green-600 hover:underline">
        Forget Password?
      </a>
    <div className="mt-6">
      <button className="btn btn-block btn-primary w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              style={{ cursor: 'pointer' }}
              type="submit"
      >
        Login
      </button>
    </div>
    </form>
    <p className="mt-8 text-xs font-light text-center text-gray-700">
      {" "}
      Don't have an account?{" "}
      <a href="#" className="font-medium text-green-600 hover:underline">
      Sign up
      </a>
    </p>
 </div>
</div>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
</>
  );
};

export default Login;