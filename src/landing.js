import React from 'react'
import Stadium from './stadium.jpg'

const CTA = () => {
    return (
        <div className='text-center max-w-max text-black text-base font-bold p-3 rounded-full px-5 bg-white'>Invest Now</div>
    )
}

const Hero = () => {
    return (
    <div className='flex flex-col h-screen justify-center items-center text-center text-white bg-black p-10 bg-gradient-to-br from-black via-black to-gray-900'>
        <img src={Stadium} alt='lights' className='mix-blend-lighten object-cover mb-10'/>
        <div className='font-extrabold text-3xl flex-1'>FOR THE NEW GENERATION OF SPORTS.</div>
        <div className='flex-1'><CTA /></div>
    </div>
    )
}

const Tokenomics = () => { 
    return (
    <div className='flex flex-col text-black p-10 space-y-8'>
        <div className='font-extrabold text-2xl'>Our purpose.</div>
        <div className='font-normal text-base leading-snug space-y-6'>
            <div>The way we watch sports is changing and <b>STAGELINK</b> is designed to handle this.</div>
            <div>Built using the robust and secure BSC network, <b>STAGELINK</b> aims to disrupt the authoritative and bureaucratic PPV model and replace it with a decentralised and fairly priced alternative.</div>
        </div>
        <div className='font-extrabold text-2xl'>Why you should invest in STAGELINK.</div>
        <div className='flex flex-col ring-1 ring-gray-800 p-10 bg-white rounded space-y-4'>
            <div className='font-bold text-xl'>We reward our investors.</div>
            <div className='font-normal text-base leading-snug'>
                <div>In mutual respect of continued involvement and interest in our goals, <b>STAGELINK</b> rewards investors with dividends in correlation to their share size.</div>
            </div>
        </div>
        <div className='flex flex-col ring-1 ring-gray-800 p-10 bg-white rounded space-y-4'>
            <div className='font-bold text-xl'>We are for the future.</div>
            <div className='font-normal text-base leading-snug'>
                <div>The emergence of influencer exhibiton fights is a new trend that is here to stay. <b>STAGELINK</b> aims to utilize the growing popularity of this type of new sport as a quickly growing form of revenue.</div>
            </div>
        </div>
    </div>
    )
}


const Home = () => {
    return (
        <div>
            <Hero />
            <Tokenomics />
        </div>
    )
}

export default Home
