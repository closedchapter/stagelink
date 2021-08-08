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
            <div className='lg:px-10 mb-7 border-b lg:border-b-0 lg:border-r border-gray-100 pb-5 space-y-3'>
                <div className='lg:mt-auto font-normal text-sm leading-relaxed opacity-80 mt-1'>The old PPV can only be bought through fiat which will be made more redundant as crypto becomes more prominent, however StageLink offers the cryptocurrency option.</div>
                <div className='lg:mt-auto font-normal text-sm leading-relaxed opacity-80 mt-1'>PPV is bought for entertainment purposes, however some the fighte can be underwhelming and leave a sour taste when matches are quickly concluded, however buying from stagelink will provide other benefits so the customer is always left happy.</div>
                <div className='lg:mt-auto font-normal text-sm leading-relaxed opacity-80 mt-1'>The current  PPV is over priced due the monopolisation of the industry, we will charge more fair prices so that the common working man afford to see fights as we understand many people aspire to be able to watch these fights live and in person.</div>
                <div className='lg:mt-auto font-normal text-sm leading-relaxed opacity-80 mt-1'>Combat sports fighters sometimes get underpaid/taken advantage of as they are not many places that host fights etc due to monopolisation and not all fighters are prominent. Corporations receive a large amount of profits while fighters do a large amount of the work work. StageLink rewards the common people and in this scenario the fighters are comparable to common people as we aim to pay them fairly and shine light on lesser known fighters so they can improve their careers.</div>
            </div>
        </div>
    </div>
    <img src={Imagery} alt='stadium' className='filter contrast-125 transform scale-150 lg:scale-100 grayscale lg:hidden'/>
    </div>
    )
}

export default SectionContent



