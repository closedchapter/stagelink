import React from 'react'
import Reddit from './footer/reddit.png'
import Instagram from './footer/instagram.png'
import Twitter from './footer/twitter.png'
import Telegram from './footer/telegram.png'

const Footer = () => {
    return (
        <div className='p-10 pt-20 bg-black bg-opacity-90 text-white space-y-7'>
            <div className='flex w-full'>
                <img src={Reddit} alt='' className='w-full filter brightness- bg-white'/>
            </div>
            <div className='opacity-60 text-xs font-medium'>© STAGELINK 2021. All rights reserved</div>
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