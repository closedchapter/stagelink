// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [modal, setModal] = useState(false);

    const Modal = () => {
        const Close = <svg className="w-6 h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        console.log(modal)
        return (
            <div className='animate-modal-fade-in-down text-white fixed flex flex-col inset-0 h-1/2 bg-gray-800 m-3 rounded-md p-3'>
                    <button onClick={() => setModal(!modal)} className='text-white text-opacity-50 ml-auto p-3 mt-4 mx-1'>{Close}</button>
                    <div className='flex flex-col p-2'>
                        <div className='text-white text-opacity-50 font-medium text-base'>{"Rewards & Benefits"}</div>
                    </div>
                </div>
        )
    }

    // useEffect(() => console.log("re-render because x changed:", modal), [modal])

    return (
        <div className='fixed flex p-4 px-7 w-full items-center justify-center z-40 bg-gray-900'>
            <div className='flex-1'>
                <Link to={'/'} className='flex font-bold text-xl text-white z-0 relative'>
                    <div>
                        <img className='w-5 h-full' alt='' src={require('./logo.svg').default}/>
                    </div>
                    <div>Stage</div>
                    <div className=''>link</div>
                    </Link>
            </div>
            <button onClick={() => setModal(!modal)} className='appearance-none text-white rounded-2xl p-1.5 px-4'>
                <svg className="w-4 h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2 6h20M2 12h20M2 18h20"></path></svg>
            </button>
            <div>
            {
                !modal ?
                null
                :
                <div><Modal /></div>
            }
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