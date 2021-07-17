import React from 'react'

const Nav = () => {
    return (
        <div className='fixed bg-gray-800 bg-opacity-80 text-white rounded-2xl right-0 p-1 px-2.5 m-5'>
            <svg class="w-6 h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 6h18M3 12h18M3 18h18"></path></svg>
        </div>
    )
}

export default Nav


/*
function scrollToTestDiv(){
    console.log('clicked')
    const divElement = document.getElementById('learn-more');
    divElement.scrollIntoView({ behavior: 'smooth' });
  }
*/