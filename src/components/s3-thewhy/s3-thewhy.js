import React from 'react'
import Manifest from './s3-thewhy.json'
import CTA from '../cta'

const ModalSVG = () => {
    return (
        <svg className="w-7 h-7 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
    )
}

const Section = (data) => {
    const [open, setOpen] = React.useState(false);
    var i = data.data
    return (
    <div onClick={() => setOpen(!open)} className='flex flex-col ring-1 ring-gray-200 p-4 bg-white rounded-md relative'>
        <div className='font-bold text-base leading-snug pr-5 my-3'>{i.heading}</div>
        <div className='absolute right-0 top-0 p-2'>
            <div className={ !open ? 'ml-auto text-gray-400 self-start transform rotate-0 duration-300 ease-in-out' : "ml-auto text-gray-500 self-start bg-gray-100 rounded-full transform rotate-180 duration-300 ease-in-out"}><ModalSVG /></div>
        </div>
        { 
        open ?
        <div className='space-y-4'>
            <div className='font-normal text-base leading-snug text-gray-500'>{i.paragraph}</div>
            <CTA text={'Invest now'}/>
        </div>
        : 
        null 
        }
    </div>
    )
}

const TheWhy = () => {
    return (
    <div id='learn-more' className='flex flex-col text-black p-10 pr-5 space-y-4 realtive'>
        <div className='font-extrabold text-2xl'>{Manifest.title}</div>
        <div className='font-normal text-base leading-snug my-2'>Below are five reasons as to why <b>STAGELINK</b> should be your next investment choice.</div>
        <div className='flex flex-col space-y-3'>
            {Manifest.content.map((i, key) => {
                return <Section key={key} data={i}/>;
                })}
        </div>
    </div>
    )
}

export default TheWhy
