import React from 'react'
import Manifest from './manifest.json'

const Section = (data) => {
    var i = data.data
    return (
    <div className='flex flex-col mx-5 p-7 border border-black border-opacity-20 rounded-xl text-center w-72'>
        <div className='mt-10 h-20 font-bold text-lg leading-0 opacity-90 lg:text-xl'>{i.heading}</div>
        <div className='mb-auto font-medium text-base leading-0 opacity-90 lg:text-base'>{i.paragraph}</div>
    </div>
    )
}

const TheWhy = () => {
    return (
    <div className='lg:flex flex-col bg-white mb-20 md:text-center'>
        <div className='font-extrabold text-2xl opacity-90 mb-12 p-10 pb-0'>{Manifest.title}</div>
        <div className='mx-auto overflow-y-scroll'>
            <div className='grid grid-flow-col grid-cols-3 w-max h-50'>
            {Manifest.content.map((i, key) => {
                    return <Section key={key} data={i}/>;
                    })}
            </div>
        </div>
    </div>
    )
}

export default TheWhy
