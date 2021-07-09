import React from 'react'
import Manifest from './main-hero.json'

import Boxing from '../boxing-ring.jpeg'

const CTA = () => {
    return (
        <div className='text-center max-w-max text-black text-base font-bold p-3 rounded-full px-5 bg-white'>Invest Now</div>
    )
}

const Hero = () => {
    return (
    <div className='flex flex-col h-screen justify-center items-center text-center text-white bg-black overflow-hidden'>
        <div className='flex flex-col my-auto mb-20 items-center'>
            <div className='font-extrabold text-3xl p-10'>{Manifest.motto}</div>
            <div className=''><CTA /></div>
        </div>
        <img src={Boxing} alt='boxing' className='mb-20 transform scale-150 mb-10 filter contrast-125 mix-blend-hard- object-cover bg-black'/>
    </div>
    )
}

export default Hero


/* 
<img src={Stadium} alt='lights' className='mix-blend-lighten object-cover mb-10'/>
import Stadium from './main-hero.jpg'
*/