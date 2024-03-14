import React from 'react'
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Services from '../components/Services';
import Slider from '../components/Slider';
import Team from '../components/Team';


function Home() {
    return (
        <>

            <Slider />
            <About />
            <Services />
            <Portfolio />
            <Pricing />
            <Team />

        </>
    )
}

export default Home
