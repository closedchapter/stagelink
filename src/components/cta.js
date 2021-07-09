import React from 'react'

const ArrowSVG = () => {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
    )
}

function scrollToTestDiv(){
    console.log('clicked')
    const divElement = document.getElementById('learn-more');
    divElement.scrollIntoView({ behavior: 'smooth' });
  }

const CTA = (text) => {
    return (
    <div onClick={scrollToTestDiv} className='cursor-pointer hover:underline hover:text-indigo-600 p-2 -m-2 flex items-center font-medium text-base leading-snug text-blue-600'>
        <div className='self-start'>{text.text}</div>
        <div><ArrowSVG /></div>
    </div>
    )
}

export default CTA
