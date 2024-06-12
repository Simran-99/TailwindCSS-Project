import React from 'react'
import { FaBars } from "react-icons/fa6";
const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
            <img src="./assets/Logo.svg" alt="logo"></img>
            <button>Hoster is hiring</button>
            </div>
            <div>
                <FaBars></FaBars>
                </div></div>
    )
}

export default Header