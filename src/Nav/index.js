import React from 'react'


const NavSVG = <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

const Bar = () => {
    return (
        <div className='fixed bg-gray-800 text-white z-20 flex items-center h-16 px-8 w-full'>
            <div className='flex-1'>
                <div className='text-white text-lg font-bold'>StageLink</div>
            </div>
            <div>{NavSVG}</div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container mx-auto p-12 flex flex-col'>
                <div className='flex h-10 space-x-10 mt-36'>
                    <a className='h-full filter invert' href={"https://telegram.org"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/telegram.png").default} alt="" />
                    </a>
                    <a className='h-full filter invert' href={"https://telegram.org"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/instagram.png").default} alt="" />
                    </a>
                    <a className='h-full filter invert' href={"https://telegram.org"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/discord.png").default} alt="" />
                    </a>
                </div>
                <div className='font-bold text-sm mt-10'>© 2021 STAGELINK. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export { Bar, Footer }
