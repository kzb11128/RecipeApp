import React from 'react';
import logo from '../../foodium-logo.png' 
import NavBar from '../NavBar'

export default function Header() {
    return(
        <>
            <header id='header' className='w-full p-5 bg-emerald-600'>
            {/* <img src={logo} alt='logo' className="nav-logo" /> */}
                <h1 className='text-white text-4xl font-bold inline border-white rounded-xl p-2 border-4'>Foodium</h1>
                {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/> */}
                <NavBar/>
            </header>
        </>
        
    );
}