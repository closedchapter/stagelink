import React from 'react'
import { Link } from 'react-router-dom'


const NavSVG = <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

const Bar = () => {
    return (
        <div className='fixed bg-gray-800 text-white z-30 flex items-center h-16 px-5 w-full'>
            <div className='flex flex-1 items-center'>
                <Link to='/' className='flex items-center'>
                    <div className='text-white text-lg font-bold'>Stage</div>
                    <img className="w-4 h-full filter invert" src={require("./images/link.png").default} alt="" />
                    <div className='text-white text-lg font-bold'>Link</div>
                </Link>
            </div>
            <div>{NavSVG}</div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container mx-auto p-12 flex flex-col'>
                <div className='flex h-7 space-x-10 mt-36'>
                    <a className='h-full filter invert' href={"https://t.me/StageLink"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/telegram.png").default} alt="" />
                    </a>
                    <a className='h-full filter invert' href={"https://twitter.com/StageLinkToken"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/twitter.png").default} alt="" />
                    </a>
                    <a className='h-full filter invert' href={"https://www.instagram.com/stagelinkofficial/"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/instagram.png").default} alt="" />
                    </a>
                </div>
                <div className='font-bold text-sm mt-10'>© 2021 STAGELINK. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export { Bar, Footer }
