import React from 'react';
// import Navigation from './Navigation';

export default function Header() {
    return(
        <>
            <header id='header' className='w-full p-5 bg-emerald-600 h-full'>
                <h1 className='text-white text-2xl font-bold'>Foodium</h1>
                {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/> */}
            </header>
        </>
        
    );
}