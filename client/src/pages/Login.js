import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';




export default function Login() {

  const [formState, setFormState] = useState({ username: '', password: ''});
  const [loginUser] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: '',
      password: '',
    });
  };
 

  return (
    <>
      <Header/>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-green-700 underline">
          Log in
        </h1>
        <form className="mt-6" onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-800">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
            />
          </div>
          {/* <a href="#" className="text-xs text-green-600 hover:underline">
            Forget Password?
          </a> */}
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Login
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?
          <Link to='/signup' className="text-blue-500 text-center underline">
            Sign up
          </Link>
        </p>
        
      </div>
    </div>
      <Footer/>
    </>
    
  );
};
