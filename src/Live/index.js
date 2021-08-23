import React from 'react'

const Landing = () => {
    return (
        <div className='bg-black flex h-screen'>
            <div className='animate__animated animate__fadeIn animate__slower animate__delay-5s my-auto mx-auto text-white text-3xl text-center font-black z-20 leading-tight filter brightness-105 opacity-80 neonText'>COMING SOON</div>
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black mt-16 animate__animated animate__fadeIn animate__slower animate__delay-5s'/>
            <video className='animate__animated animate__fadeIn animate__slower animate__delay-1s absolute h-full object-cover z-0' autoPlay loop playsInline muted={true}>
                <source src={require("./videos/boxer-sparring.mp4").default} type="video/mp4"/>
                Your broswer does not support the video tag.
            </video> 
        </div>
    )
}

const Main = () => {
    return (
        <div className=''>
            <Landing />
        </div>
    )
}

export default Main