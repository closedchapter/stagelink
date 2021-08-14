import React from 'react'


const PopSVG = <svg className="w-full h-full" fill="green" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>


const Pop = () => {

    return  (
        <div id="popup" className={"text-white fixed shadow-lg flex text-left items-center bottom-10 transform -translate-x-1/2 inset-x-1/2 w-2/3 py-3 px-3 rounded bg-gray-900 ring-2 ring-white z-50"}>
            <div className='mr-2'><div className='w-8'>{PopSVG}</div></div>
            <div className='text-sm font-medium'>Contract successfully copied!</div>
        </div>
    )
}

export default Pop