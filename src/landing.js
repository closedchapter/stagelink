import React from 'react'
import Hero from './components/main-hero/main-hero'
import TheWhat from './components/s1-thewhat/s1-thewhat'
import Tokenomics from './components/s2-tokenomics/s2-tokenomics'
import TheWhy from './components/s3-thewhy/s3-thewhy'

const Landing = () => {
    return (
        <div>
            <Hero />
            <TheWhat />
            <Tokenomics />
            <TheWhy/>
        </div>
    )
}

export default Landing
