import React from 'react'
import Manifest from './manifest.json'
import Imagery from './imagery.jpg'

const Section = (data) => {
    var i = data.data
    return (
    <div className='mb-3'>
        <div className='font-extrabold text-2xl leading-0 opacity-90 lg:text-lg'>{i.name}</div>
        <div className='font-medium text-xl  leading-0 opacity-60 lg:text-xl'>{i.information}</div>
    </div>
    )
}

const Tokenomics = () => { 
    return (
    <div className='text-white p-3 md:gap-x-10 bg-black lg:px-96 lg:py-20'>
        <div className='grid grid-flow-row mb-2 text-center'>
            <div className='font-extrabold text-sm opacity-30 mb-16'>{Manifest.heading}</div>
            <div className='mb-10 overflow-hidden'>
                <div className='font-extrabold text-3xl leading-snug mb-12 opacity-90 md:text-5xl md:mb-7'>{Manifest.title}</div>
                    <div className='font-normal text-sm leading-relaxed opacity-90 md:text-base'>{Manifest.description}</div>
                    <img src={Imagery} alt='boxing' className='filter contrast-125 brightness-70 transform scale-150 my-16'/>
                    <div className='font-extrabold text-3xl leading-snug opacity-90 md:text-5xl md:mb-7 text-left border-b border-white border-opacity-30'>Tokenomics</div>
                    <div className=''>
            <div></div>
            {Manifest.cards.map((i, key) => {
                return <Section key={key} data={i}/>;
                })}
        </div>
        <div className='mb-16'>
            <div className='font-medium text-sm leading-0 opacity-50 lg:text-lg'>{">"} 3% for marketing</div>
            <div className='font-medium text-sm leading-0 opacity-50 lg:text-lg'>{">"} 3% for business/brand development</div>
            <div className='font-medium text-sm leading-0 opacity-50 lg:text-lg'>{">"} 3% to liquidity</div>
            <div className='font-medium text-sm leading-0 opacity-50 lg:text-lg'>{">"} 3% to holders</div>
        </div>
                <div className='font-extrabold text-3xl leading-snug mb-12 opacity-90 md:text-5xl md:mb-7'>Joining us pays well</div>
                <div className='font-normal text-sm leading-relaxed opacity-90 md:text-base'>All holders of our utility token are rewarded generously because we understand how important your support is. Becoming a holder means you lose nothing and gain everything.</div>
                <div className='px-12 text-left space-y-12 my-12 mt-12 flex flex-col pt-12 border-t border-white border-opacity-20'>
                <div className='font-bold text-2xl text-center leading-snug opacity-60 md:text-3xl md:mb-7'>StageLink <div>Ecosystem</div></div>
                <div className='flex bg-gray-900 rounded-xl p-3'>
                    <div className='flex-col mx-auto'>
                        <div>To Holders</div>
                        <div className='font-medium text-sm leading-0 opacity- lg:text-lg'>5% is rewarded to you on all revenue generated from fights.</div>
                        <div className='font-medium text-sm leading-0 opacity- lg:text-lg'>3% of all transactions are rewarded to you in the form of reflections.</div>
                        <div className='font-medium text-sm leading-0 opacity- lg:text-lg'>10% of each and every sale on the merch store is rewarded to you.</div>
                    </div>
                    <div className='mx-auto border-l'></div>
                    <div className='flex-col mx-auto'>
                        <div>To Liquidity</div>
                        <div className='font-medium text-sm leading-0 opacity- lg:text-lg'>5% is rewarded to liquidity pool on all revenue generated from fights.</div>
                        <div className='font-medium text-sm leading-0 opacity- lg:text-lg'>3% of all transactions are rewarded to liquidity pool in the form of reflections.</div>
                        <div className='font-medium text-sm leading-0 opacity- lg:text-lg'>10% of each and every sale on the merch store is rewarded to liquidity pool.</div>
                    </div>
                </div>
                    <a href='https://t.me/StageLink' rel='nofollow noreferrer noopener' target='_blank' id="rewards" className='mx-auto py-3 px-6 lg:py-6 lg:px-12 scale-100 select-none text-center max-w-max text-bl text-base font-bold rounded-full px-5 bg-blue-700 active:bg-blue-800 transform transition active:scale-110 duration-300 ease-out'>Join community</a>
                </div>
            </div>
            <div className='font-extrabold text-3xl leading-snug opacity-90 md:text-5xl mb-7 text-center'>Our loyalty Rewards</div>
            <div className='font-normal text-lg leading-snug opacity-90 md:text-xl mb-14 text-center'>We value our holders so to show our appreciation we are the first token to implement the loyalty rewards, holders that don't sell their token will get 25% of their purchasing fees weekly. 5% of the initial supply is allocated in a wallet to the loyalty rewards.</div>
            
           
        </div>
        
        
    </div>
    )
}

export default Tokenomics
