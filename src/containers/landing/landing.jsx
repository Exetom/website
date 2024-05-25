
import React, { useEffect, useRef } from "react";
import Hero from '../../components/landing/hero/hero'
import Partners from '../../components/landing/partners/partners'
import OurProjects from "../../components/landing/projects/projects";
import Team from "../../components/landing/team/team";

const Landing = () => {
    return (
        <div className='w-full'>
            <Hero />
            <Partners />
            {/* <OurProjects /> */}
            <Team />
            <div className="h-screen"></div>
        </div>
    )
}

export default Landing

