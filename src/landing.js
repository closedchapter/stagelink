import React, { useState } from 'react';
import {Link} from 'react-scroll'
import Hero from './components/hero/hero'
import WhatSection from './components/s1-thewhat/s1-thewhat'
import TokenSection from './components/s2-tokenomics/s2-tokenomics'
import WhySection from './components/s3-thewhy/s3-thewhy'

const Landing = () => {
const Nav = () => {
    const [modal, setModal] = useState(false);

    const Modal = () => {
        const Close = <svg className="w-6 h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        console.log(modal)
        return (
            <div className='animate-modal-fade-in-down text-white fixed flex flex-col inset-0 h-1/2 bg-gray-800 m-3 rounded-md p-3'>
                    <button onClick={() => setModal(!modal)} className='text-white text-opacity-50 ml-auto p-3 mt-4 mx-1'>{Close}</button>
                    <div className='flex flex-col p-2 space-y-4'>
                        <Link onClick={() => setModal(false)} activeClass="active" to="we-are" spy={true} smooth={true} className='text-white text-opacity-50 font-bold text-base hover:text-opacity-100'>{"Who we are"}</Link>
                        <Link onClick={() => setModal(false)} activeClass="active" to="our-purpose" spy={true} smooth={true} className='text-white text-opacity-50 font-bold text-base hover:text-opacity-100'>{"Our purpose"}</Link>
                        <Link onClick={() => setModal(false)} activeClass="active" to="rewards" spy={true} smooth={true} className='text-white text-opacity-50 font-bold text-base hover:text-opacity-100'>{"Rewards & Benefits"}</Link>
                        <Link onClick={() => setModal(false)} activeClass="active" to="why" spy={true} smooth={true} className='text-white text-opacity-50 font-bold text-base hover:text-opacity-100'>{"Why STAGELINK"}</Link>
                    </div>
                </div>
        )
    }

    // useEffect(() => console.log("re-render because x changed:", modal), [modal])

    return (
        <div className='fixed flex p-4 px-7 w-full items-center justify-center z-40 bg-gray-900'>
            <div className='flex-1'>
                <button className='flex font-bold text-xl text-white z-0 relative'>
                    <div>Stage</div>
                    <div>
                        <img className='w-5 h-full' alt='' src={require('./logo.svg').default}/>
                    </div>
                    <div className=''>link</div>
                    </button>
            </div>
            <div className='hidden md:block space-x-10 flex-1'>
                <Link activeClass="active" to="we-are" spy={true} smooth={true} className='cursor-pointer text-white text-opacity-50 font-bold text-base hover:text-opacity-100'>{"Who we are"}</Link>
                <Link activeClass="active" to="our-purpose" spy={true} smooth={true} className='cursor-pointer text-white text-opacity-50 font-bold text-base hover:text-opacity-100'>{"Our purpose"}</Link>
                <Link activeClass="active" to="rewards" spy={true} smooth={true} className='cursor-pointer text-white text-opacity-50 font-bold text-base hover:text-opacity-100'>{"Rewards & Benefits"}</Link>
                <Link activeClass="active" to="why" spy={true} smooth={true} className='cursor-pointer text-white text-opacity-50 font-bold text-base hover:text-opacity-100'>{"Why STAGELINK"}</Link>
            </div>
            <button onClick={() => setModal(!modal)} className='md:hidden appearance-none text-white rounded-2xl p-1.5 px-4'>
                <svg className="w-4 h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2 6h20M2 12h20M2 18h20"></path></svg>
            </button>
            <div>
            {
                !modal ?
                null
                :
                <div><Modal /></div>
            }
            </div>
        </div>
    )
}


    return (
        <div>
            <Nav/>
            <div id="" ><Hero /></div>
            <div className='bg-gradient-to-b from-black to-gray-800 p-12'></div>
            <div id="we-are" ><WhatSection /></div>
            <div id="our-purpose"><TokenSection /></div>
            <div id="why" ><WhySection /></div>
        </div>
    )
}

export default Landing
