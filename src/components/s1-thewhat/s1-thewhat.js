import React from 'react'
import Manifest from './manifest.json'

const SectionContent = () => {
    return (
    <div className='text-black p-7 md:gap-x-10 bg-white lg:px-80 lg:py-20'>
        <div className='grid grid-flow-row mb-7'>
            <div className='font-extrabold text-sm opacity-30 mb-9'>{Manifest.heading}</div>
            <div className=''>
                <div className='font-extrabold text-3xl leading-snug mb-3 opacity-90 md:text-5xl md:mb-7'>{Manifest.title}</div>
                <div className='font-normal text-base leading-relaxed opacity-90 md:text-base'><b>STAGELINK </b>{Manifest.description}</div>
            </div>
        </div>
        <div className='bg-white ring-1 ring-gray-300 rounded-xl shadow p-5 lg:p-10'>
            <div className='mb-7 border-b border-gray-200 pb-5'>
                <div className='font-extrabold text-base leading-snug mb-2 opacity-90 md:text-lg'>THE PROBLEM</div>
                <div className='font-normal text-base leading-relaxed opacity-80'>{Manifest.main[0]['main']}</div>
            </div>
            <div>
                <div className='font-extrabold text-base leading-snug mb-2 opacity-90 md:text-lg'>THE SOLUTION</div>
                <div className='font-normal text-base leading-relaxed opacity-80'>{Manifest.main[1]['main']}</div>
            </div>
        </div>
    </div>
    )
}

export default SectionContent



