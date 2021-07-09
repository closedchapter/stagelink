import React from 'react'
import Manifest from './s1-thewhat.json'
import CTA from '../cta'

const SectionParagraph = () => {
    var text = Manifest.main
    return(
    <div className='space-y-5'>
        {text.split('/n').map((i,key) => {
            return <div key={key}>{i}</div>;
            })}
        </div>
    )
}

const TheWhat = () => { 
    return (
    <div className='flex flex-col text-black p-10 space-y-4'>
        <div className='font-extrabold text-2xl'>{Manifest.title}</div>
        <div className='font-normal text-base leading-snug'>
            <SectionParagraph />
        </div>
        <CTA text={'Learn more'}/>
    </div>
    )
}

export default TheWhat



