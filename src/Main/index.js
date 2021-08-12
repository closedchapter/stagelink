import React from 'react'
import { Link } from 'react-router-dom'
import data from './data.json'

const NavSVG = <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 3l7 7-7 7"></path></svg>

const Landing = () => {
    return (
        <div className='animate__animated animate__fadeIn flex flex-col lg:flow-row bg-black text-center text-white overflow-hidden h-screen relative'>
            <div className='bg-white bg-opacity-20 fixed left-28 rounded-xl p-2 m-5 px-3 z-50'>
                <div className='text-white text-xs font-medium'>Version: GAYNINJA</div>
            </div>
            <div className='absolute w-full h-full z-0 transform'>
                <img className='absolute transform translate-y-48 h-full w-full object-cover scale-90' src={require("./images/bgimg.jpg").default} alt=''/>
                <div className='transform translate-y-52 absolute bg-gradient-to-b from-transparent via-transparent to-black h-full w-full'></div>
            </div>
            <div className='flex flex-col p-5 flex-1 relative z-10 h-full justify-start container mx-auto'>
                <div className='flex flex-col md:mt-16 lg:px-36'>
                    <img className="w-6 h-6 filter invert mx-auto opacity-40 mt-5 hidden" src={require("./images/boxing-gloves.png").default} alt="" /> 
                    <div className='sport-btn text-5xl md:text-7xl font-black mt-24 md:mt-16'>Setting the <div className='inline-block text-red-700'>stage</div> for the revolution of <div className='inline-block text-red-700'>sports.</div></div>
                    <div className='text-lg lg:text-base font-medium opacity-70 mt-21 hidden'>With the recent surge of pro/influencer pay-per-view exhibitions, entertaining millions of fans worldwide, Generating billions of revenue per year, we aim to utilise on this and be the first ever token to incorporate cryptocurrency into the ppv/sports industry by hosting our own exhibitions in which holders will be payed a percentage of revenue generated.</div>
                </div>
                <a className='sport-btn flex mx-auto mt-64 justify-center align-center items-center py-3 px-6 select-none text-black text-lg font-semibold rounded-sm bg-white hover:bg-gray-400 active:text-white active:bg-gray-800' href={"https://pancakeswap.finance"} target="_blank" rel="nofollow noopener noreferrer">
                    <div className='mr-7'>Buy Now</div>
                    <div className='w-4'>{NavSVG}</div>
                </a>
                <Link to='/live' className='sport-btn flex mx-auto mt-5 justify-center align-center items-center py-3 px-6 select-none text-white text-lg font-semibold rounded-sm ring-2 ring-white hover:bg-gray-400 active:text-white active:bg-gray-800'>
                    <div className='mr-7'>View Upcoming</div>
                    <div className='w-4'>{NavSVG}</div>
                </Link>
            </div>
        </div>
    )
}

const Purpose = () => {
    return (
        <div className='bg-black text-white p-7 text-center relative overflow-hidden'>
            
            <div className='text-4xl font-extrabold mt-20 mb-10 lg:px-52 z-10 relative'>Together, we’re taking over a multi-billion dollar industry.</div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-20'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>The world's first token, with real-life utility, using blockchain technology.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'><b>STAGELINK</b> is the latest pioneering utility token built to disrupt the exploitative PPV industry, and replace it with the stagelink ecosystem that rewards its holders via different avenues.</div>
                </div>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Our Purpose.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>Our goal is to decentralise the sports entertainment industry by implementing the Pay-Per-View system and hosting professional & influencer boxing exhibition that can be enjoyed by fans from all over the world.</div>
                </div>
            </div>

            <div className='flex flex-col text-sm text-normal rounded-2xl bg-white bg-opacity-10 p-10 text-left mb-20'>
            <div className='text-base font-extrabold'>Out with the old and in with the new.</div>
                <div className='flex flex-col md:flex-row md:space-x-20'> 
                    <div className='flex-1 mt-8'>The old Pay-Per-View can only be bought through fiat which will be made more redundant as crypto becomes more prominent, however StageLink offers the cryptocurrency option.</div>
                    <div className='flex-1 mt-8'>Pay-Per-View is bought for entertainment purposes, however, often the fights can be underwhelming and leave a sour taste when matches are quickly concluded. Buying from StageLink will provide other benefits so the customer is always left happy.</div>
                </div>
                <div className='flex flex-col md:flex-row md:space-x-20'> 
                    <div className='flex-1 mt-8'>The current Pay-Per-View is over-priced due the monopolisation of the industry, we will charge fairer prices so that the common working man can afford to see these fights as we understand many people aspire to be able to watch these fights live and in person at least once in their life.</div>
                    <div className='flex-1 mt-8'>Combat sports fighters often get taken advantage of due to the aforementioned monopolisation, lesser known fighters cannot advocate for themselves to receive a fair pay. StageLink wishes to see equal pay and opportunities in this industry.</div>
                </div>
            </div>
        </div>
    )
}

const Ecosystem = () => {
    return (
        <div className='bg-gradient-to-b from-black via-black to-gray-900 text-white p-7'>
            <div className='text-4xl font-extrabold mt-16'>Our ecosystem and benefits.</div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-20'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Joining us rewards you.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>All holders of our utility token are rewarded generously because we understand how important your support is. Becoming a holder means you lose nothing and gain everything.</div>
                    <div className='text-base text-normal mt-5 bg-white bg-opacity-10 text-gray-100 rounded p-4 space-y-5 shadow-xl'>
                        <div className='flex flex-col mb-2'><b className='text-2xl'>10%</b><div>towards <b>holders</b> from merch profit.</div></div>
                        <div className='flex flex-col mb-2'><b className='text-2xl'>10%</b><div>reinvested into token from merch profit.</div></div>
                        <div className='flex flex-col mb-2'><b className='text-2xl'>5%</b><div>towards <b>holders</b> from event profit.</div></div>
                        <div className='flex flex-col mb-2'><b className='text-2xl'>5%</b><div>reinvested into token from event profit.</div></div>
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
        <div className='bg-black bg-opacity-95 text-white p-7'>
            <div className='text-4xl font-extrabold mt-16'>Our Tokenomics.</div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-20'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Wallet Distribution</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'></div>
                    <div className='text-base text-normal ml-5 mt-5'>
                        <li><b>1 quadrillion</b> supply.</li>
                        <li>no<b>developer wallet</b>.</li>
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

const HowTo = () => {
    return (
        <div className='bg-gray-900 text-gray-200 p-7'>
            <div className='text-4xl font-extrabold mt-16'>How to buy STAGELINK now.</div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-20'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Setup your digital wallet.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>Set up your <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://metamask.io/"} target="_blank" rel="nofollow noopener noreferrer">MetaMask currency wallet</a> and configure it to the Binance Smart Chain Network. If you're not sure on how to do this, <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://www.bsc.news/post/connecting-metamask-wallet-to-the-binance-smart-chain"} target="_blank" rel="nofollow noopener noreferrer">here's a handy guide.</a></div><div className='text-base text-normal mt-5 leading-relaxed'><b>You’ll need to purchase STAGELINK coins with BNB.</b> Make sure you have enough BNB coins. If not, you can buy BNB on cryptocurrency exchanges like <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://www.binance.com/"} target="_blank" rel="nofollow noopener noreferrer">Binance</a> or <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://www.coinbase.com/"} target="_blank" rel="nofollow noopener noreferrer">Coinbase</a> and then send it over to your MetaMask wallet. <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://crypto-explained.com/services/send-bnb-coin-to-binance-smart-chain-on-metamask/"} target="_blank" rel="nofollow noopener noreferrer">Here’s a guide on how you can do so quickly and safely</a>.</div>
                    <div className='flex flex-col min-h mt-10  text-black rounded-3xl'>
                        <div className='text-base text-normal font-semibold leading-relaxed text-gray-200'>Contract address</div>
                        <div className='flex flex-col break-all text-xl font-bold mt-1 bg-gray-400 p-1 px-2 rounded-xl select-all'>0x2A9718defF471f3Bb91FA0ECEAB14154F150a385</div>
                        <button onClick={(e) => {navigator.clipboard.writeText(e.target.id)}} id="0x2A9718defF471f3Bb91FA0ECEAB14154F150a385" className='flex text-base bg-blue-600 rounded-full p-2 px-4 text-white font-semibold w-max mt-5'>Copy Address</button>
                    </div>
                </div>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Make your first purchase.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>After setting up your digital wallet and topping it up with enough BNB, connect your wallet to <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://pancakeswap.finance/swap"} target="_blank" rel="nofollow noopener noreferrer">PancakeSwap</a>. Connect your wallet by <b>using the connect button.</b> (If you're on mobile - you may <b>need to use WalletConnect).</b></div><div className='text-base text-normal mt-5 leading-relaxed'>From here, <b>paste in the STAGELINK contract address</b> and add it to PancakeSwap. Put in the amount you wish to swap and <b>tap on “Swap”.</b> After the swap, MetaMask will ask you to confirm the transaction.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'><b>Congratulations!</b> You are now a holder of <b>STAGELINK</b> and a <b>certified</b> member of the community!</div>
                </div>
            </div>
        </div>
    )
}

function ContentListItems(info) {
    console.log(info)
    let content = info.info
    console.log(content)
    return content.map((content) => <li className='mt-5 text-base font-normal ml-5'>{content.objective}</li>)
  }

function SectionListItems() {
    return data.map((section) => <div className='p-5 rounded-xl bg-black bg-opacity-50 flex flex-col' key={section}><div className='text-lg font-bold'>{section.name}</div><div className=''><ContentListItems info={section.section}/></div></div>);
  }

const Roadmap = () => {
    return (
        <div className='bg-gray-900 text-white p-7'>
            <div className='text-4xl font-extrabold mt-16'>Our roadmap.</div>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mt-16 mb-10'>
                <SectionListItems/>
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <div className=''>
            <div className='bg-black'><Landing /></div>
            <div className='container mx-auto'>
                <Purpose />
                <Tokenomics />
                <Ecosystem />
                <HowTo />
                <Roadmap />
            </div>
        </div>
    )
}

export default Main

// <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://www.bsc.news/post/connecting-metamask-wallet-to-the-binance-smart-chain"} target="_blank" rel="nofollow noopener noreferrer">Here's a handy guide</a>