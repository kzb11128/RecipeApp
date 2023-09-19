import React from 'react';
import logo from '../../foodium-logo.png' 
import { Link } from 'react-router-dom'
// import Navigation from './Navigation';

export default function Header() {
    return(
        <>
         <header id='header' className='w-full p-5 bg-emerald-600 h-auto flex flex-wrap items-center justify-between mx-auto'>
            <div className="flex items-center">
                <img src={logo} alt='logo' className="h-20 mr-3" />
                <span className="self-center text-white text-4xl font-bold">Foodium</span>
            </div>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-emerald-600 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className='lg:flex-row sm:flex-col flex-col md:text-2xl text-lg font-bold float-right md:my-4 text-white'>
                    <div className='px-3 hover:text-gray-300'>
                        <Link to='/'>
                            Home
                        </Link>
                    </div>
                </li>
                <li className='lg:flex-row sm:flex-col flex-col md:text-2xl text-lg font-bold float-right md:my-4 text-white'>
                    <div className='px-3 hover:text-gray-300'>
                        <Link to='/newrecipe'>
                            Create
                        </Link>
                    </div>
                </li>
                <li className='lg:flex-row sm:flex-col flex-col md:text-2xl text-lg font-bold float-right md:my-4 text-white'>
                    <div className='px-3 hover:text-gray-300'>
                        <Link to='/signup'>
                            Signup
                        </Link>
                    </div>
                </li>
                <li className='lg:flex-row sm:flex-col flex-col md:text-2xl text-lg font-bold float-right md:my-4 text-white'>
                    <div className='px-3 hover:text-gray-300'>
                        <Link to='/login'>
                            Login
                        </Link>
                    </div>
                </li>
            </ul>
         </header>
        </>
);}