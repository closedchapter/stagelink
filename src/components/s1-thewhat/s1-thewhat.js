import React from 'react'
import Manifest from './manifest.json'
import Logo from './blockchain.png'
import Imagery from './imagery.jpg'

const SectionContent = () => {
    return (
        <div className='overflow-hidden'>
    <div className='text-black p-7 md:gap-x-10 lg:px-80 lg:py-20 bg-gradient-to-t from-white to-gray-100 mb-20'>
        <div className='grid grid-flow-row mb-20 text-center'>
            <div className='font-extrabold text-sm opacity-30 mb-9'>{Manifest.heading}</div>
            <div className=''>
                <img src={Logo} alt='blockchain' className='flex w-20 mx-auto my-7'/>
                <div className='font-extrabold text-3xl leading-snug mb-3 opacity-90 md:text-5xl md:mb-7'>{Manifest.title}</div>
                <div className='font-normal text-sm leading-relaxed opacity-90 md:text-base'><b>STAGELINK </b>{Manifest.description}</div>
            </div>
        </div>
        <div className='grid lg:grid-flow-col bg-white p-5 lg:p-10 lg:text-center blog-shadow-dreamy'>
            <div className='lg:px-10 mb-7 border-b lg:border-b-0 lg:border-r border-gray-100 pb-5'>
                <div className='lg:h-10 lg:mb-0 font-extrabold text-base leading-snug mb-2 opacity-90 md:text-lg'>THE OLD</div>
                <div className='lg:mt-auto font-normal text-sm leading-relaxed opacity-80'>{Manifest.main[0]['main']}</div>
            </div>
            <div className='lg:px-10'>
                <div className=' lg:h-10 font-extrabold text-base leading-snug mb-2 opacity-90 md:text-lg'>THE NEW</div>
                <div className='lg:mt-auto font-normal text-sm leading-relaxed opacity-80'>{Manifest.main[1]['main']}</div>
            </div>
        </div>
    </div>
    <img src={Imagery} alt='stadium' className='filter contrast-125 transform scale-150 lg:scale-100 grayscale lg:hidden'/>
    </div>
    )
}

export default SectionContent



