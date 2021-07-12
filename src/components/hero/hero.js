import React from 'react'
import Manifest from './manifest.json'
import Image from './image.jpeg'

const CTA = () => {
    return (
        <div className='flex space-x-5'>
            <button className='py-3 px-6 lg:py-6 lg:px-12 scale-100 select-none text-center max-w-max text-black text-base font-bold rounded-full px-5 bg-white active:bg-gray-400 transform transition active:scale-110 duration-300 ease-out'>Join presale</button>
            <button className='py-3 px-6 lg:py-6 lg:px-12 scale-100 select-none text-center max-w-max text-black text-base font-bold rounded-full px-5 bg-white bg-opacity-20 text-white active:bg-opacity-5 transform transition-transform active:scale-110 duration-300 ease-out'>Watch live</button>
        </div>
    )
}

const LandingContent = () => {
    return (
    <div className='bg-black'>
        <div className='grid grid-flow-row bg-black text-white md:grid-flow-col h-screen animate-fade-in-down'>
            <div className='flex flex-col justify-center p-3 mt-9 pl-7 lg:pl-44 lg:mt-40 lg:p-0 lg:self-start'>
            <div className='leading-snug font-bold text-xl lg:text-2xl opacity-50'>{Manifest.subtitle}</div>
                <div className='leading-snug mb-5 lg:mb-12 font-extrabold text-4xl lg:text-7xl'>{Manifest.motto}</div>
                <div className='mb-3'><CTA/></div>
            </div>
            <div className='select-none flex flex-col justify-start overflow-hidden md:justify-center md:p-10 md:col-span-4'>
                <img src={Image} alt='boxing' className='transform scale-150 filter contrast-125 brightness-110'/>
            </div>
        </div>
    </div>
    )
}

export default LandingContent

/*
const Landing = () => {
    return (
    <div className='grid grid-flow-row md:grid-flow-col h-screen text-white bg-black p-10 overflow-hidden'>
        <div><LandingParagraph /></div>
        <div className='leading-none font-light text-xs opacity-40'>{Manifest.warn}</div>
        <div className='col-span-3 overflow-hidden -m-10 md:m-10 self-start md:scale-100 md:self-center transform scale-150'><LandingImage /></div>
    </div>
    )
}

export default Landing



<img src={Stadium} alt='lights' className='mix-blend-lighten object-cover mb-10'/>
import Stadium from './main-hero.jpg'
*/