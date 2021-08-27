import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pop from './PopUp'
import data from './data.json'
import Slideshow from './carousel.js'


const NavSVG = <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 3l7 7-7 7"></path></svg>
const Landing = () => {
    return (
        <div id="home" className='filter brightness-125 contrast-125 animate__animated animate__fadeIn h-screen bg-black grid grid-rows-2 justify-items-center text-white text-center relative overflow-hidden'>
            <div className='flex relative z-20 p-5'>
                <div className='title my-auto text-3xl md:text-5xl lg:text-7xl font-semibold bg-black bg-opacity-40 rounded-lg p-2 uppercase'>Setting the <div className='inline-block text-red-500'>stage</div> for the revolution of <div className='inline-block text-red-500'>sports</div></div>
            </div>
            <div className='flex relative z-20'>
                <div className='mb-auto bg-black bg-opacity-40 rounded-3xl p-5'>
                    <a className='w-max bg-white p-4 px-6 flex items-end mx-auto text-black font-bold rounded-2xl active:bg-gray-800 active:text-white' href={"https://sweepwidget.com/view/30206-tfd8lqcu"} target="_blank" rel="nofollow noopener noreferrer">
                        <div className='flex-1'>Join Whitesale</div>
                        <div className='w-3.5 ml-2 pb-1'>{NavSVG}</div>
                    </a>
                    <a className='my-3  w-max bg-white p-4 px-6 flex items-end mx-auto text-black font-bold rounded-2xl active:bg-gray-800 active:text-white' href={"https://t.me/StageLink"} target="_blank" rel="nofollow noopener noreferrer">
                        <div className='flex-1'>Join Community</div>
                        <div className='w-3.5 ml-2 pb-1'>{NavSVG}</div>
                    </a>
                    <Link to='/live' className='w-max border-2 border-white p-4 px-6 flex items-end mx-auto text-white font-bold rounded-2xl active:bg-white active:text-black'>
                        <div className='mr-7'>View Upcoming</div>
                        <div className='w-4'>{NavSVG}</div>
                    </Link>
                </div>
            </div>
            <div className='absolute h-full w-full bkg-y transform translate-y-16'>
                <div className='transform -translate-y-8'><Slideshow/></div>
            </div>
            <div className='absolute h-full w-full object-cover bg-gradient-to-b from-transparent to-black'/>
        </div>
    )
}


const Purpose = () => {
    return (
        <div id="purpose" className='bg-black text-white p-7 pt-0 text-center relative z-20'>
            <div className='bg-black bg-opacity-30 rounded-xl z-10 text-4xl font-extrabold container mx-auto md:px-52 p-5'>Together, we’re taking over a <div className='text-red-600 inline-block'>multi-billion</div> dollar industry</div>
            <div className='flex flex-col mb-20 container mx-auto md:w-1/2 text-white text-opacity-90 font-normal'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>The world's first sports token, with real-life utility, using blockchain technology.</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'><b>STAGELINK</b> is the latest pioneering utility token built to disrupt the pay-per-view industry while replacing it with the stagelink ecosystem that rewards its holders via different avenues.</div>
                </div>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>...</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>Our goal is to decentralise the sports entertainment industry by implementing cryptocurrency into the pay-per-view system. StageLink will also be hosting professional & influencer exhibition matches that can be enjoyed by fans from all over the world.</div>
                </div>
            </div>
            <div className='h-72 md:h-96 relative z-0 mx-auto'>
                <div className='transform scale-150 absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent z-10' />
                <img className='transform scale-125 filter contrast-125 absolute left-0 h-full object-cover z-0' src={require("./images/Anthony.png").default} alt=''/>
                <img className='transform scale-150 origin-left filter contrast-125 absolute right-0 h-full object-cover z-0' src={require("./images/Tyson.png").default} alt=''/>
            </div>
            <div className='flex flex-col text-sm text-white text-opacity-90 font-normal rounded-2xl bg-gray-900 p-10 text-left mb-20 overflow-hidden relative z-10'>
            <div className='text-lg font-extrabold text-center md:text-left'>Out with the <div className='inline-block text-blue-500'>OLD</div> and in with the <div className='inline-block text-blue-500'>NEW</div></div>
                <div className='flex flex-col md:flex-row md:space-x-20'> 
                    <div className='box flex-1 mt-8 bg-black bg-opacity-40 p-5 rounded-lg'>Currently, PPV events can only be purchased through fiat which will be made increasingly redundant as crypto becomes more prominent, however StageLink offers the cryptocurrency payment option, in addition to fiat.</div>
                    <div className='box flex-1 mt-8 bg-black bg-opacity-40 p-5 rounded-lg'>PPV events are purchased for entertainment purposes, however, often the fights can be underwhelming and leave a sour taste such as when matches are quickly concluded. At StageLink we provide many other benefits so the customer is always left happy.</div>
                    <div className='box flex-1 mt-8 bg-black bg-opacity-40 p-5 rounded-lg hidden'>The PPV (Pay per view) system has become a redundant service in the 21st century. The emergence of cryptocurrencies, in particular StageLink, has provided a new alternative to this outdated system.</div>
                    <div className='box flex-1 mt-8 bg-black bg-opacity-40 p-5 rounded-lg hidden'>PPV’s sole utility as a payment service is a disadvantageous feature that StageLink seeks to improve upon. Buying from StageLink is rewarding and provides many benefits unlike standard PPV.</div>
                </div>
                <div className='flex flex-col md:flex-row md:space-x-20'> 
                    <div className='box flex-1 mt-8 bg-black bg-opacity-40 p-5 rounded-lg'> As it stands, PPV events are over-priced due to the monopolisation of the industry, we will charge fairer prices so that the average person can afford to see these fights as we understand many people aspire to be able to watch their favourite athletes fight live at least once in their life.</div>
                    <div className='box flex-1 mt-8 bg-black bg-opacity-40 p-5 rounded-lg'>Athletes in the combat sports sector can often get taken advantage of due to the aforementioned monopolisation, lesser known fighters cannot advocate for themselves to receive a fair pay. StageLink wishes to see equal pay and opportunities in this industry.</div>
                    <div className='box flex-1 mt-8 bg-black bg-opacity-40 p-5 rounded-lg hidden'>PPV at its current state is over-priced, exploitive and incompatible with the modern sports culture. StageLink aims to be a fairer model that is built on the foundations of billions of sports fans from all corners of the world.</div>
                    <div className='box flex-1 mt-8 bg-black bg-opacity-40 p-5 rounded-lg hidden'>Fighters within combat sports are routinely exploited for the purposes of making a profit. StageLink is not about profit or increasing revenue. Our ethical and moral values are such that we are looking to introduce equal pay and opportunities across the entire industry.</div>
                </div>
            </div>
        </div>
    )
}


const Ecosystem = () => {
    return (
        <div id="ecosystem-and-benefits" className='bg-black text-white p-7 text-white text-opacity-90 font-normal overflow-hidden'>
            <div className='text-5xl font-extrabold mt-4 h-max relative overflow-hidden flex items-center py-16'>
                <img className='absolute' src={require("./images/arena.jpg").default} alt=''/>
                    <div className='absolute bg-gradient-to-b from-black via-transparent to-transparent h-full w-full'/>
                    <div className='absolute bg-gradient-to-t from-black via-transparent to-transparent h-full w-full'/>
                <div className='relative text-center mx-auto md:text-7xl text-opacity-100'>Ecosystem and Benefits</div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Joining us rewards you</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>All holders of our utility token are rewarded generously because we understand how important your support is. Becoming a holder means you lose nothing and gain everything.</div>
                    <div className='text-base text-normal mt-5 bg-white bg-opacity-0 text-gray-100 rounded space-y-5 shadow-xl'>
                        <div className='flex flex-col mb-2'><b className='text-xl'>10%</b><div>towards holders from merch profit.</div></div>
                        <div className='flex flex-col mb-2'><b className='text-xl'>10%</b><div>reinvested into token from merch profit.</div></div>
                        <div className='flex flex-col mb-2'><b className='text-xl'>5%</b><div>towards holders from event profit.</div></div>
                        <div className='flex flex-col mb-2'><b className='text-xl'>5%</b><div>reinvested into token from event profit.</div></div>
                    </div>
                </div>
                <div className='mt-12 flex-1 overflow-visible'>
                    <div className='text-xl font-extrabold'>Loyalty rewards</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>We value our holders, so to show our appreciation we are the first token to implement the loyalty rewards, holders that don't sell their tokens will recieve 25% of their purchasing fees back every week.</div>
                    <div className='h-80 overflow-hidden relative'>
                        <div className='bg-gradient-to-r from-black via-transparent to-transparent absolute w-full h-full z-10'/>
                        <div className='bg-gradient-to-l from-black via-transparent to-transparent absolute w-full h-full z-10'/>
                        <img className='filter contrast-125 mx-auto' src={require('./images/animation.gif').default} alt="loading..." />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Tokenomics = () => {
    return (
        <div id="tokenomics" className='overflow-hidden md:rounded-xl bg-gray-900 bg-opacity-95 p-7 text-white text-opacity-90 font-normal'>
            <div className='text-4xl font-extrabold mt-16'>Tokenomics</div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-20'>
                <div className='box-a mt-12 flex-1 bg-black bg-opacity-40 p-5 rounded-lg'>
                    <div className='text-xl font-extrabold'>Wallet Distribution</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'></div>
                    <ul className='list-outside list-disc text-base text-normal ml-5 mt-5 h-full flex-col justify-between'>
                        <li className='list-outside'><b>1 quadrillion</b> supply.</li>
                        <li className='list-outside'><b>5%</b> towards <b>burn address</b>.</li>
                        <li className='list-outside'><b>5%</b> towards <b>loyalty rewards wallet</b>.</li>
                        <li className='list-outside'><b>5%</b> towards <b>marketing wallet</b>.</li>
                        <li className='list-outside'>No<b> developer wallet</b>.</li>
                        <li className='list-outside'><b>Liquidity locked</b> for 1 year.</li>
                    </ul>
                </div>
                <div className='box-a mt-12 flex-1 bg-black bg-opacity-40 p-5 rounded-lg'>
                    <div className='text-xl font-extrabold'>Transaction Fee (12%)</div>
                    <ul className='list-outside list-disc text-base text-normal ml-5 mt-5 h-full flex-col justify-between'>
                        <li className='list-outside'><b>3%</b> <b>BNB</b> rewards to <b>holders</b>.</li>
                        <li className='list-outside'><b>3%</b> towards <b>liquidity</b>.</li>
                        <li className='list-outside'><b>3%</b> towards <b>marketing</b>.</li>
                        <li className='list-outside'><b>3%</b> towards <b>brand/business development</b>.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


const HowTo = () => {
    // return a promise
function copyToClipboard(textToCopy) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // here the magic happens
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}
    const [disabled, disableButton] = useState(false);
    const [animation, setAnimation] = useState('hidden');

    const handleClick = (event) => {
        copyToClipboard(event);
        if (disabled === false) {
            disableButton(true)
            triggerAnimation()
        }
     }



    const triggerAnimation = () => {
        setAnimation('animate__animated animate__fadeInUp animate__fast')
        const ExitRules = () => {
            setAnimation('animate__animated animate__bounceOutDown animate_slow')
            disableButton(false)
        }
        let timer1 = setTimeout(() => ExitRules(), 2000)
        return timer1
    }

    return (
        <div id="how-to-buy" className='overflow-hidden md:rounded-xl bg-gray-900 text-gray-200 p-7 text-white text-opacity-95 font-normal'>
            <div className={animation + ' fixed inset-x-0 container mx-auto px-10 md:px-32 bottom-16 z-50'}><Pop/></div>
            <div className='text-4xl font-extrabold mt-16'>How to buy STAGELINK now</div>
            <div className='flex flex-col md:flex-row md:space-x-20 mb-20'>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Setup your digital wallet</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>Set up your <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://metamask.io/"} target="_blank" rel="nofollow noopener noreferrer">MetaMask currency wallet</a> and configure it to the Binance Smart Chain Network. If you're not sure on how to do this, <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://www.bsc.news/post/connecting-metamask-wallet-to-the-binance-smart-chain"} target="_blank" rel="nofollow noopener noreferrer">here's a handy guide.</a></div><div className='text-base text-normal mt-5 leading-relaxed'><b>You’ll need to purchase STAGELINK coins with BNB (Smart Chain).</b> Make sure you have enough BNB coins. If not, you can buy BNB on cryptocurrency exchanges like <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://www.binance.com/"} target="_blank" rel="nofollow noopener noreferrer">Binance</a> and then send it over to your MetaMask wallet. <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://crypto-explained.com/services/send-bnb-coin-to-binance-smart-chain-on-metamask/"} target="_blank" rel="nofollow noopener noreferrer">Here’s a guide on how you can do so quickly and safely</a>.</div>
                    <div className='box-a flex flex-col min-h mt-10  text-black rounded-3xl bg-black bg-opacity-20 p-5'>
                        <code className='text-base text-normal text-opacity-40 font-semibold leading-relaxed text-gray-200'>Contract address</code>
                        <code className='hidden flex flex-col break-all text-xl font-bold mt-3 text-white rounded-xl select-all'>0x586BE86a231162F4bB81396c8a71380Eb6d6F891</code>
                        <code className='hidden flex flex-col break-all text-xl font-bold mt-3 text-white rounded-xl select-all'>Coming Soon!</code>
                        <code onClick={(e) => handleClick(e.target.id)} id="Coming Soon!" className='mt-5 cursor-pointer flex text-base bg-blue-500 bg-opacity-60 hover:bg-opacity-100 active:bg-red-500 rounded-lg p-2 px-4 text-white font-semibold w-max mt-5 '>Copy Address</code>
                    </div>
                </div>
                <div className='mt-12 flex-1'>
                    <div className='text-xl font-extrabold'>Make your first purchase</div>
                    <div className='text-base text-normal mt-5 leading-relaxed'>After setting up your digital wallet and topping it up with enough BNB (Smart Chain), connect your wallet to <a className='text-blue-600 hover:underline active:text-indigo-800' href={"https://pancakeswap.finance/swap"} target="_blank" rel="nofollow noopener noreferrer">PancakeSwap</a>. Connect your wallet by <b>using the connect button.</b> (If you're on mobile - you may <b>need to use WalletConnect).</b></div><div className='text-base text-normal mt-5 leading-relaxed'>From here, <b>paste in the STAGELINK contract address</b> and add it to PancakeSwap. Put in the amount you wish to swap (ensure that slippage is set to 12%-13%) and <b>tap on “Swap”.</b> After the swap, MetaMask will ask you to confirm the transaction.</div>
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
    return data.map((section) => <div className='p-5 box rounded-xl bg-black bg-opacity-50 flex flex-col' key={section}><div className='text-lg font-bold underline-bitch pb-2'>{section.name}</div><ul className='list-outside list-disc'><ContentListItems info={section.section}/></ul></div>);
  }


const Roadmap = () => {
    return (
        <div id="roadmap" className='bg-black text-white p-7 text-white text-opacity-95 font-normal'>
            <div className='text-4xl font-extrabold mt-16'>Roadmap</div>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mt-16 mb-10'>
                <SectionListItems/>
            </div>
            <div className='container mx-auto px-10'>
                <div className='bg-black p-5 rounded-xl bg-opacity-50 px-5 text-center justify-center w-max mx-auto'>
                    <a href={process.env.PUBLIC_URL + './static/StageLink_Whitepaper-1.pdf'} className='cursor-pointer flex text-base bg-blue-500 bg-opacity-60 hover:bg-opacity-100 active:bg-red-500 rounded-lg p-2 px-4 text-center text-white font-semibold w-full md:w-max mt-5 mx-auto'><code>View Whitepaper</code></a>
                </div>
            </div>
        </div>
    )
}


const Main = () => {
    return (
        <div className='pt-16 overflow-hidden'>
            <div className='bg-black'><Landing /></div>
            <div className='container mx-auto'>
                <Purpose/>
                <Tokenomics/>
                <Ecosystem/>
                <HowTo/>
                <Roadmap/>
            </div>
        </div>
    )
}

export default Main
