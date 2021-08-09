import React from 'react'
// eslint-disable-next-line no-unused-vars
import data from './data.json'

const NavSVG = <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>

const Landing = () => {
    return (
        <div className='flex flex-col lg:flow-row bg-black text-center text-white overflow-hidden h-screen relative'>
            <div className='absolute w-full h-full z-0 transform scale-75'>
                <img className='absolute transform translate-y-48 h-full w-full filter grayscale object-cover' src={require("./images/bgimg.jpg").default} alt=''/>
                <div className='absolute bg-gradient-to-b from-transparent to-black h-full w-full'></div>
            </div>
            <div className='flex flex-col p-5 flex-1 relative z-10 h-full justify-start container mx-auto'>
                <div className='flex flex-col md:mt-16 lg:px-36'>
                    <img className="w-6 h-6 filter invert mx-auto opacity-40 mt-5" src={require("./images/boxing-gloves.png").default} alt="" /> 
                    <div className='text-5xl md:text-7xl font-bold mt-5'>Setting the stage for the revolution of sports.</div>
                    <div className='text-lg lg:text-base font-medium opacity-70 mt-21 hidden'>With the recent surge of pro/influencer pay-per-view exhibitions, entertaining millions of fans worldwide, Generating billions of revenue per year, we aim to utilise on this and be the first ever token to incorporate cryptocurrency into the ppv/sports industry by hosting our own exhibitions in which holders will be payed a percentage of revenue generated.</div>
                </div>
                <a className='shadow-btn flex mx-auto mt-48 items-center py-2 px-4 lg:px-5 select-none text-center max-w-max text-black text-base font-bold rounded-full bg-white hover:bg-gray-400 active:text-white active:bg-gray-800' href={"https://pancakeswap.finance"} target="_blank" rel="nofollow noopener noreferrer">
                    <div className='leading-0 mr-3'>Buy Now</div>
                    <div className='w-3.5'>{NavSVG}</div>
                </a>
                <button className='shadow-cta flex mx-auto mt-5 items-center py-2 px-4 lg:px-5 select-none text-center max-w-max text-black text-base font-bold rounded-full bg-gray-800 text-white active:text-white active:bg-black' href={"https://pancakeswap.finance"} target="_blank" rel="nofollow noopener noreferrer">
                    <div className='leading-0 mr-3'>View Upcoming</div>
                    <div className='w-3.5'>{NavSVG}</div>
                </button>
            </div>
        </div>
    )
}

const Purpose = () => {
    return (
        <div className='bg-black bg-opacity-95 text-white p-7 text-center relative overflow-hidden'>
            
            <div className='text-4xl font-extrabold mt-20 mb-10 lg:px-52 z-10 relative'>Together, we’re taking over a multi-billion dollar industry.</div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-20'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>The world's first, in real utility using blockchain technology.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'><b>STAGELINK</b> is the latest pioneering utility token built to disrupt the exploitative PPV industry, and replace it with the stagelink ecosystem that rewards its holders via different avenues.</div>
                </div>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Out with the old and in with the new.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>Our goal is to decentralise the sports entertainment industry by implementing the Pay-Per-View system and hosting professional & influencer boxing exhibition that can be enjoyed by fans from all over the world.</div>
                </div>
            </div>

            <div className='flex flex-col text-sm text-normal rounded-lg bg-white bg-opacity-20 p-5 text-left mb-20'>
            <div className='text-base font-extrabold'>OUR PURPOSE.</div>
                <div className='flex flex-col md:flex-row md:space-x-20'> 
                    <div className='flex-1 mt-8'>The old PPV can only be bought through fiat which will be made more redundant as crypto becomes more prominent, however StageLink offers the cryptocurrency option.</div>
                    <div className='flex-1 mt-8'>PPV is bought for entertainment purposes, however some the fighte can be underwhelming and leave a sour taste when matches are quickly concluded, however buying from stagelink will provide other benefits so the customer is always left happy.</div>
                </div>
                <div className='flex flex-col md:flex-row md:space-x-20'> 
                    <div className='flex-1 mt-8'>The current  PPV is over priced due the monopolisation of the industry, we will charge more fair prices so that the common working man afford to see fights as we understand many people aspire to be able to watch these fights live and in person.</div>
                    <div className='flex-1 mt-8'>Combat sports fighters sometimes get underpaid/taken advantage of as they are not many places that host fights etc due to monopolisation and not all fighters are prominent. Corporations receive a large amount of profits while fighters do a large amount of the work work. StageLink rewards the common people and in this scenario the fighters are comparable to common people as we aim to pay them fairly and shine light on lesser known fighters so they can improve their careers.</div>
                </div>
            </div>
        </div>
    )
}

const Ecosystem = () => {
    return (
        <div className='bg-white text-black p-7'>
            <div className='text-4xl font-extrabold mt-16'>Our ecosystem and benefits.</div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-20'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Joining us rewards you.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>All holders of our utility token are rewarded generously because we understand how important your support is. Becoming a holder means you lose nothing and gain everything.</div>
                    <div className='text-base text-normal mt-5 bg-gray-300 text-gray-800 rounded p-4 space-y-5'>
                        <div className='flex flex-col mb-2'><b className='text-2xl'>10%</b><div>towards <b>holders</b> from merch profit.</div></div>
                        <div className='flex flex-col mb-2'><b className='text-2xl'>10%</b><div>reinvested into token from merch profit.</div></div>
                        <div className='flex flex-col mb-2'><b className='text-2xl'>6%</b><div>towards <b>holders</b> from fight profit.</div></div>
                        <div className='flex flex-col mb-2'><b className='text-2xl'>6%</b><div>reinvested into token from fight profit.</div></div>
                    </div>
                </div>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>We provide loyalty rewards.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>We value our holders so to show our appreciation we are the first token to implement the loyalty rewards, holders that don't sell their token will get 25% of their purchasing fees weekly. 5% of the initial supply is allocated in a wallet to the loyalty rewards.</div>
                </div>
            </div>
        </div>
    )
}

const Tokenomics = () => {
    return (
        <div className='bg-gray-900 text-white p-7'>
            <div className='text-4xl font-extrabold mt-16'>Our Tokenomics.</div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-20'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Wallet Distribution</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'></div>
                    <div className='text-base text-normal ml-5 mt-5'>
                        <li><b>1 quadrillion</b> supply.</li>
                        <li>no <b>developer wallet</b>.</li>
                        <li><b>liquidity locked</b> for 1 year.</li>
                        <li><b>5%</b> distributed to <b>burn wallet</b>.</li>
                        <li><b>5%</b> distributed to <b>loyalty rewards wallet</b>.</li>
                        <li><b>10%</b> distributed to <b>marketing wallet</b>.</li>
                    </div>
                </div>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Transaction Fee (12%)</div>
                    <div className='text-base text-normal ml-5 mt-5'>
                    <li><b>3%</b> rewarded to <b>holders</b>.</li>
                        <li><b>3%</b> re-invested towards <b>liquidity</b>.</li>
                        <li><b>3%</b> invested into <b>marketing</b>.</li>
                        <li><b>3%</b> towards <b>brand development</b>.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <div className='container mx-auto pt-16'>
            <Landing />
            <Purpose />
            <Tokenomics />
            <Ecosystem />
        </div>
    )
}

export default Main
// <img className='' src={require("./images/bgimg.jpg").default} alt=''/>

/*
<div className='absolute w-full h-full z-0 transform scale-75'>
                <img className='absolute transform translate-y-48 h-full w-full filter grayscale object-cover' src={require("./images/hero.jpg").default} alt=''/>
                <div className='absolute bg-gradient-to-b from-transparent to-black h-full w-full'></div>
            </div>
*/