
import React, { useEffect, useRef } from "react";
import Hero from '../../components/landing/hero/hero'
import Partners from '../../components/landing/partners/partners'
import OurProjects from "../../components/landing/projects/projects";
import Insights from "../../components/landing/insights/insights";
import Reviews from "../../components/landing/reviews/reviews";
import Services from "../../components/landing/services/services";

const Landing = () => {
    return (
        <div className='w-full'>
            <Hero />
            <Partners />
            {/* <OurProjects /> */}
            <Insights />
            <Reviews />
            <Services />
            <div className="h-screen"></div>
        </div>
    )
}

export default Landing

