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
            <div>
                <FaBars></FaBars>
                </div></div>
    )
}

export default Header