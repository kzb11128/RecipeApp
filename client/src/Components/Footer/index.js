import React from 'react';

export default function Footer() {
    return (
        <div id='contact-me' className='flex flex-col w-full p-10 bg-slate-900 items-center'>
            <ul className='p-3 flex flex-col items-center'>
                <li className=" text-emerald-500 inline-block"> Email: <a href="mailto:foodium@example.com">foodium@example.com</a></li>
                <li className=" text-emerald-500 inline-block"><a href="https://github.com/kzb11128/RecipeApp">GitHub</a></li>
            </ul>
        </div>
    )
}

