import React from 'react';
// import Navigation from './Navigation';

export default function Header() {
    return(
        <>
            <header id='header' className='w-full p-5 bg-blue-500 h-full'>
                <h1>Foodium</h1>
                {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/> */}
            </header>
        </>
        
    );
}