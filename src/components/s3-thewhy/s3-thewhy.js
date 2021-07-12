import React from 'react'
import Manifest from './manifest.json'

const Section = (data) => {
    var i = data.data
    return (
    <div className='flex flex-col mx-5 p-7 border border-black border-opacity-20 rounded-xl text-center w-72'>
        <img src={require('./'+i.image+'.png').default} alt='word' className='w-28 mx-auto mt-5'/>
        <div className='font-extrabold text-2xl leading-snug my-7 opacity-90 md:text-4xl md:mb-7'>{i.heading}</div>
        <div className='font-normal text-sm leading-relaxed opacity-90 md:text-base'>{i.paragraph}</div>
    </div>
    )
}

const TheWhy = () => {
    return (
    <div className='lg:flex flex-col bg-white mb-12 text-center'>
        <div className='font-extrabold text-2xl opacity-80 p-10 pb-0'>{Manifest.title}</div>
        <div className='mx-auto overflow-y-scroll py-20'>
            <div className='grid grid-flow-col grid-cols-3 w-max h-max'>
            {Manifest.content.map((i, key) => {
                    return <Section key={key} data={i}/>;
                    })}
            </div>
        </div>
    </div>
    )
}

export default TheWhy
