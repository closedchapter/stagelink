import React from 'react'

const Tokenomics = () => { 
    return (
    <div className='flex flex-col text-white p-10 space-y-8 bg-black'>
        <div className='font-extrabold text-2xl'>The technicals.</div>
        <div className='flex flex-col border border-gray-200 p-10 bg-white rounded-md space-y-6 shadow-md'>
            <div className='font-bold text-xl text-black'>12% transaction charge.</div>
            <div className='font-medium text-base space-y-2 text-gray-400'>
                <div>4% to liquidity pool</div>
                <div>3% to marketing</div>
                <div>2% to business dev</div>
                <div>3% back to holders</div>
            </div>
        </div>
    </div>
    )
}

export default Tokenomics
