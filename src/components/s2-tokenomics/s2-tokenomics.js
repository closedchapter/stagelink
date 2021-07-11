import React from 'react'
import Manifest from './manifest.json'

const Section = (data) => {
    var i = data.data
    return (
    <div className='mb-3 border-b py-3 border-white border-opacity-10'>
        <div className='font-medium text-sm leading-0 opacity-50 lg:text-lg'>{i.name}</div>
        <div className='font-medium text-base leading-0 opacity-90 lg:text-xl'>{i.information}</div>
    </div>
    )
}

const Tokenomics = () => { 
    return (
    <div className='text-white p-7 md:gap-x-10 bg-black lg:px-96 lg:py-20'>
        <div className='grid grid-flow-row mb-7'>
            <div className='font-extrabold text-sm opacity-50 mb-9'>{Manifest.heading}</div>
        </div>
        <div className='bg-white bg-opacity-10 rounded-xl pl-5'>
            {Manifest.cards.map((i, key) => {
                return <Section key={key} data={i}/>;
                })}
        </div>
    </div>
    )
}

export default Tokenomics
