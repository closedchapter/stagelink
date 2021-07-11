import React from 'react'
import Hero from './components/hero/hero'
import WhatSection from './components/s1-thewhat/s1-thewhat'
import TokenSection from './components/s2-tokenomics/s2-tokenomics'
import WhySection from './components/s3-thewhy/s3-thewhy'

const Landing = () => {
    return (
        <div>
            <Hero />
            <WhatSection />
            <TokenSection />
            <WhySection />
            <div className='p-10 bg-black opacity-90 h-screen'></div>
        </div>
    )
}

export default Landing
