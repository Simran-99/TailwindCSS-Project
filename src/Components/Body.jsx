import React from 'react';

const Body = () => {
    return (
        <div className='space-y-4 lg:flex'>
            <div className='relative flex items-center justify-center lg:flex-1'>
                <img src='./assets/Blue-Shape.svg' alt="lst" className='-rotate-[45deg] h-64 md:h-72' />
                <img src='./assets/Pink-Shape.svg' alt="lst" className='absolute -rotate-[30deg] h-64 md:h-72' />
                <img src='./assets/Purple-Shape.svg' alt="lst" className='absolute -rotate-[15deg] h-64 md:h-72' />
                <img src='./assets/Hero-Model.png' alt="lst" className='absolute h-64 md:h-72' />
            </div>
            <div className='lg:flex-1'>
                <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes</h1>
                <p className='font-lato text-gray-400'>With Hoster, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
                <form className='flex flex-col gap-4 md:flex-row'>
                    <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type='email' placeholder='Enter email address' />
                    <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join waitlist</button>
                </form>
                <div className='flex gap-2'>
                    <img src='./assets/Checkmark.svg' alt='check' />
                    <p className='font-lato text-gray-400'>No spam, Unsubscribe anytime</p>
                </div>
            </div>
        </div>
    );
}

export default Body;
