import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import * as Scroll from 'react-scroll';

let Go = Scroll.Link;

const NavSVG = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16"></path></svg>
const CloseSVG = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>

const Bar = () => {
    let history = useHistory()

  function handleClick() {
    history.push('./')
    window.scrollTo(0, 0);
  }
    const [modal, setModal] = useState(false);
    
    function NavListItems() {
        const NavArray = [{name:"Purpose", link:"purpose"},{name:"Tokenomics", link:"tokenomics"},{name:"Ecosystem and Benefits", link:"ecosystem-and-benefits"},{name:"How to buy", link:"how-to-buy"},{name:"Roadmap", link:"roadmap"}];
    
        return NavArray.map((item, index) => <Go onClick={() => setModal(false)} to={item.link} spy={true} smooth={true} key={index} className='uppercase cursor-pointer select-none appearance-none font-bold transition duration-150 ease-in-out opacity-30 hover:opacity-100'>{item.name}</Go>);
      }
    
    const Modal = () => {
        return (
            <div className='animate__animated animate__fadeIn animate__faster bg-black fixed inset-0 z-30 flex flex-col items-start h-full overflow-hidden'>
                <div className='flex w-full'>
                    <div className='flex-1 title'>
                        <button onClick={() => handleClick()} className='p-5 flex w-max items-center'>
                            <div className='text-white text-lg font-bold'>STAGE</div>
                            <img className="w-4 h-full filter invert" src={require("./images/link.png").default} alt="" />
                            <div className='text-white text-lg font-bold'>LINK</div>
                        </button>
                    </div>
                    <button className='p-5 text-white mr-4' onClick={() => setModal(!modal)}>{CloseSVG}</button>
                </div>
                <div className='p-5 flex flex-col h-full w-full justify-center text-white text-3xl space-y-8'><NavListItems/></div>
                <div className='hidden flex mb-12 w-full justify-around items-center'>
                    <a className='cursor-pointer flex text-base bg-white bg-opacity-60 hover:bg-opacity-100 active:bg-green-500 rounded-lg p-3 px-4 text-black font-semibold w-max' href={"https://pancakeswap.finance"} target="_blank" rel="nofollow noopener noreferrer">
                        <code>Buy Now</code>
                    </a>
                    <code className='text-white '>or</code>
                    <a href={process.env.PUBLIC_URL + './static/StageLink_Whitepaper-1.pdf'} className='cursor-pointer flex text-base bg-white bg-opacity-60 hover:bg-opacity-100 active:bg-green-500 rounded-lg p-3 px-4 text-black font-semibold w-max'><code>Download Whitepaper</code></a>
                </div>
                <div className='flex h-10 w-full justify-around mb-10 border-opacity-20'>
                    <a className='h-full  opacity-20 hover:opacity-100' href={"https://t.me/StageLink"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/telegram.png").default} alt="" />
                    </a>
                    <a className='h-full  opacity-20 hover:opacity-100' href={"https://twitter.com/StageLinkToken"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/twitter.png").default} alt="" />
                    </a>
                    <a className='h-full  opacity-20 hover:opacity-100' href={"https://youtube.com/channel/UCkOd1E_ldWkIq2xdpbtVWsA"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/youtube.png").default} alt="" />
                    </a>
                    <a className='h-full  opacity-20 hover:opacity-100' href={"https://www.instagram.com/stagelinkofficial/"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/instagram.png").default} alt="" />
                    </a>
                    <a className='h-full  opacity-20 hover:opacity-100' href={"https://www.reddit.com/r/StageLink/"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/reddit.png").default} alt="" />
                    </a>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className='select-none fixed bg-gray-900 text-white z-30 flex items-center h-16 px-5 w-full'>
                <div className='flex flex-1 items-center'>
                    <button onClick={() => handleClick()} className='flex items-center title'>
                        <div className='text-white text-lg font-bold'>STAGE</div>
                        <img className="w-4 h-full filter invert mx-0.5 transform -translate-y-0.5" src={require("./images/link.png").default} alt="" />
                        <div className='text-white text-lg font-bold'>LINK</div>
                    </button>
                </div>
                <button className='lg:hidden'>
                    {
                    !modal ?
                    <button className='p-4' onClick={() => setModal(!modal)}>{NavSVG}</button>
                    :
                    <button className='p-4' onClick={() => setModal(!modal)}>{CloseSVG}</button>
                    }
                </button>
                <div className='hidden lg:flex pr-12 space-x-5 text-base'><NavListItems/></div>
            </div>
            {
                !modal ?
                null
                :
                <Modal />
            }   
        </div>
    )
}

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container mx-auto p-12 flex flex-col opacity-70'>
                <div className='flex h-7 space-x-10 mt-5'>
                    <a className='h-full' href={"https://t.me/StageLink"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/telegram.png").default} alt="" />
                    </a>
                    <a className='h-full' href={"https://twitter.com/StageLinkToken"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/twitter.png").default} alt="" />
                    </a>
                    <a className='h-full' href={"https://youtube.com/channel/UCkOd1E_ldWkIq2xdpbtVWsA"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/youtube.png").default} alt="" />
                    </a>
                    <a className='h-full ' href={"https://www.instagram.com/stagelinkofficial/"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/instagram.png").default} alt="" />
                    </a>
                    <a className='h-full ' href={"https://www.reddit.com/r/StageLink/"} target="_blank" rel="nofollow noopener noreferrer">
                        <img className="h-full" src={require("./images/reddit.png").default} alt="" />
                    </a>
                </div>
                <div className='font-bold text-sm mt-10 text-center'>© 2021 STAGELINK. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export { Bar, Footer }
