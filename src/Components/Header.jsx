import React from 'react'
import { FaBars } from "react-icons/fa6";
const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
            <img src="./assets/Logo.svg" alt="logo"></img>
            {/* On the button provided in the template, the button is a gradient */}
            {/* The size of the text in the button is changed to small and padding is provided as needed */}
            <button className='bg-gradient-to-r from-orange-400 to-red-500 text-xs text-white px-2.5 py-1.5 rounded-2xl'>Hoster is hiring</button>
            </div>
            <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
                <li><a href='#'>Plans</a></li>
                <li><a href='#'>Find Domains</a></li>
                <li><a href='#'>Why hoster?</a></li>
            </ul>
            <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
                <a className='text-gray-400' href='#'> Sign In</a>
                <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'> Join waitlist</button>
            </div>
            <div className='lg:hidden'>
                <FaBars></FaBars>
                </div></div>
    )
}

export default Header