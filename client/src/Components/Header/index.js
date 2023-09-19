import React from 'react';
import logo from '../../foodium-logo.png' 
// import Navigation from './Navigation';

export default function Header() {
    return(
        <>
            <header id='header' className='w-full p-5 bg-emerald-600 h-full'>
            <img src={logo} alt='logo' className="nav-logo" />
                <h1 className='text-white text-2xl font-bold'>Foodium</h1>
                {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/> */}
            </header>
        </>
        
    );
}