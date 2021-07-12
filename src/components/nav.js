import React from 'react'

const Nav = () => {
    return (
        <div className='fixed inset-0 bg-black opacity-95 h-16 z-50 text-white'>
            <div className='flex justify-center items-center h-full'>
                <div className='text- font-extrabold mx-auto'>STAGELINK</div>
            </div>
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