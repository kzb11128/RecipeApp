import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { CREATE_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';


export default function Signup() {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [addProfile, { error, data }] = useMutation(CREATE_USER);
    
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
        const { data } = await addProfile({
            variables: { ...formState },
        });
    
        Auth.login(data.addProfile.token);
        } catch (e) {
            console.log(data)
            console.error(e);
        }
    };

    
  
    return (
        <>
            <Header/>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-green-700 underline">
                    Sign Up
                    </h1>
                    {data ? (
                        <p>
                            Success! You may now head{' '}
                            <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                        <form onSubmit={handleFormSubmit}>
                            <input
                            placeholder="Your username"
                            name="name"
                            type="text"
                            value={formState.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            <input
                            placeholder="Your email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            <input
                            placeholder="******"
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            <div className='py-2'>
                                <button
                                style={{ cursor: 'pointer' }}
                                type="submit"
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                                >
                                Submit
                                </button>
                            </div>
                        </form>
                    )}
                    {/* <form
                        onSubmit={handleFormSubmit}
                        className="mt-6">
                        <div className="mb-2">
                            <label
                                for="username"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                name="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="name"
                                className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                value="Submit" 
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                                Sign Up
                            </button>
                        </div>
                    </form> */}
                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already have an account?{" "}
                        <Link to="/login"
                        className="font-medium text-green-600 hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
}