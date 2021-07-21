import React from 'react'
import Reddit from './footer/reddit.png'
import Instagram from './footer/instagram.png'
import Twitter from './footer/twitter.png'
import Telegram from './footer/telegram.png'

const Footer = () => {
    return (
        <div className='p-10 bg-black bg-opacity-90 text-white'>
            <div className='flex items-start justify-between w-full mb-10 bg-white p-2 rounded-xl bg-opacity-20'>
                <img src={Reddit} alt='' className='w-8 h-full'/>
                <img src={Instagram} alt='' className='w-8 h-full'/>
                <img src={Twitter} alt='' className='w-8 h-full'/>
                <img src={Telegram} alt='' className='w-8 h-full'/>
            </div>
            <div className='opacity-30 text-xs font-medium'>© STAGELINK 2021. All rights reserved</div>
        </div>
    )
}

export default Footer
/*
function scrollToTestDiv(){
    console.log('clicked')
    const divElement = document.getElementById('learn-more');
    divElement.scrollIntoView({ behavior: 'smooth' });
  }
*/