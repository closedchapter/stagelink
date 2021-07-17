import React from 'react'
import Manifest from './manifest.json'
import Image from './image.jpeg'

const Arrow = () => {
    return (
        <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7"></path></svg>
    )
}

const CTA = () => {
    return (
        <div className='flex space-x-5'>
            <button className='flex items-center py-2 px-4 lg:py-6 lg:px-12 scale-100 select-none text-center max-w-max text-black text-sm font-bold rounded-full bg-white active:bg-gray-400 transform transition active:scale-110 duration-300 ease-out'>
                <div className='mr-3'>Join presale</div>
                <div className='w-3.5'><Arrow /></div>
            </button>
            <button className='flex items-center py-2 px-4 lg:py-6 lg:px-12 scale-100 select-none text-center max-w-max text-black text-sm font-bold rounded-full bg-white bg-opacity-20 text-white active:bg-opacity-5 transform transition-transform active:scale-110 duration-300 ease-out'>
                <div className='mr-3'>Watch live</div>
                <div className='w-3.5'><Arrow /></div>
            </button>
        </div>
    )
}

const LandingContent = () => {
    return (
    <div className='bg-black'>
        <div className='grid grid-flow-row bg-black text-white md:grid-flow-col h-screen animate-fade-in-down'>
            <div className='flex flex-col justify-center p-3 mt-9 px-10 md:mx-0 lg:pl-44 lg:mt-40 lg:p-0 lg:self-start'>
                <div className='leading-tight lg:mb-12 font-extrabold text-5xl lg:text-7xl mb-5'>{Manifest.motto}</div>
                <div className='leading-normal font-normal text-base lg:text-2xl opacity-70 mb-7'>{Manifest.subtitle}<div className='font-bold'>- so we decided to do it.</div></div>
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