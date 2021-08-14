import React from 'react'
import { Link } from 'react-router-dom'


const NavSVG = <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 7l7 7-7 7"></path></svg>
const Landing = () => {
    return (
        <div id="home" className='animate__animated animate__fadeIn h-screen bg-black grid grid-rows-2 justify-items-center text-white text-center relative'>
            <div className='flex relative z-20 p-5'>
                <div className='my-auto sport-btn text-4xl md:text-5xl lg:text-7xl font-black bg-black bg-opacity-40 rounded-lg p-2'><div className='inline-block text-red-500'>404</div> There has been an error</div>
            </div>
            <div className='flex relative z-20'>
                <div className='mb-auto bg-black bg-opacity-40 rounded-xl p-5'>
                    <Link to='/' className='sport-btn flex justify-center align-center items-center py-3 px-6 select-none text-black text-lg font-semibold rounded-sm bg-white hover:bg-gray-400 active:text-white active:bg-gray-800'>
                        <div className='w-4 transform rotate-180'>{NavSVG}</div>
                        <div className='ml-5'>Back to home</div>
                    </Link>
                </div>
            </div>
            <img className='absolute h-full w-full object-cover z-0' src={require("./images/bgimg.jpg").default} alt=''/>
            <div className='absolute h-full w-full object-cover bg-gradient-to-b from-transparent to-black'/>
        </div>
    )
}

const Main = () => {
    return (
        <div className='pt-16'>
            <div className='bg-black'><Landing /></div>
        </div>
    )
}

export default Main

