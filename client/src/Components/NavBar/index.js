import React from 'react';
import { Link } from 'react-router-dom'
// import loggedIn from utils
import Auth from '../../utils/auth';

// make page container to conditionally render and change state of page
export default function Navigation() {

    return (
        <div className=' lg:flex-row sm:flex-col flex-col md:text-2xl text-lg font-bold float-right md:my-4 text-white '>
            <div className='px-3 hover:text-gray-300'>
                <Link to='/'>
                    Home
                </Link>
            </div>
            
            {/* if logged in render logout else show login */}
            {Auth.loggedIn() ?
                <>
                     <div className='px-3 hover:text-gray-300'>
                        <Link to='/profile'>
                            Profile
                        </Link>
                    </div>
                    <div className='px-3 hover:text-gray-300' onClick={Auth.logout()}>
                        Log-out
                    </div>
                </>
            :
                
                
                <div className='px-3 hover:text-gray-300'>
                    <Link to='/login'>
                        Log-in
                    </Link>
                </div>
            }

        </div>
    );
}
