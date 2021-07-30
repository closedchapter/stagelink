import React from 'react'

const ComingSoon = () => {
    return (
    <div className='bg-white flex flex-col h-screen relative'>
        <img className='absolute h-screen w-full object-cover z-40 filter contrast-125 brightness-125' alt='' src={require('./boxing-gloves.jpg').default} />
        <div className='relative z-50 text-center my-auto text-white font-bold text-5xl font-MyFont'>COMING SOON</div>
    </div>
    )
}

export default ComingSoon