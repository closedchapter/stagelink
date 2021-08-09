import React from 'react'
// eslint-disable-next-line no-unused-vars
import data from './data.json'

const NavSVG = <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg>

const Landing = () => {
    return (
        <div className='bg-black text-white text-left relative overflow-hidden absolute inset-0 md:h-screen'>
            <img className='absolute obect-cover z-0 right-0 bottom-0' src={require("./images/bgimg.jpg").default} alt=''/>
            <div className='flex flex-col relative z-10 p-7 mb-48 md:mb-0'>
                <div className='flex flex-col md:w-1/2'>
                    <div className='text-3xl md:text-6xl font-bold mt-16'>Setting the stage for the revolution of sports</div>
                    <div className='text-base md:text-xl font-medium opacity-70 mt-8'>With the recent surge of pro/influencer pay-per-view exhibitions, entertaining millions of fans worldwide, Generating billions of revenue per year, we aim to utilise on this and be the first ever token to incorporate cryptocurrency into the ppv/sports industry by hosting our own exhibitions in which holders will be payed a percentage of revenue generated.</div>
                </div>
                <a className='flex mt-16 w-max items-center justify-center active:bg-gray-600 active:text-white bg-white rounded-full p-2 px-7 text-black mt-2 text-base md:text-lg font-semibold hover:bg-gray-200' href={"https://pancakeswap.finance"} target="_blank" rel="nofollow noopener noreferrer">
                    <div>Buy Now</div>
                    <div className='w-4'>{NavSVG}</div>
                </a>
            </div>
        </div>
    )
}

const Ecosystem = () => {
    return (
        <div className='bg-white text-black p-7'>
            <div className='text-4xl font-extrabold mt-16'>Our ecosystem and benefits.</div>
            <div className='flex flex-col md:flex-row md:space-x-20'>
                <div className='mt-16 flex-1'>
                    <div className='text-xl font-extrabold'>Joining us rewards you.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>All holders of our utility token are rewarded generously because we understand how important your support is. Becoming a holder means you lose nothing and gain everything.</div>
                    <div className='text-base text-normal ml-5 mt-5'>
                        <li><b>10%</b> towards <b>holders</b> from merch profit.</li>
                        <li><b>10%</b> reinvested into token from merch profit.</li>
                        <li><b>6%</b> towards <b>holders</b> from fight profit.</li>
                        <li><b>6%</b> reinvested into token from fight profit.</li>
                    </div>
                </div>
                <div className='mt-16 flex-1'>
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
            <div className='flex flex-col md:flex-row md:space-x-20'>
                <div className='mt-16 flex-1'>
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
                <div className='mt-16 flex-1'>
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
        <div className='container mx-auto'>
            <Landing />
            <Ecosystem />
            <Tokenomics />
        </div>
    )
}

export default Main
