
import React, { useEffect, useRef } from "react";
import Hero from '../../components/landing/hero/hero'
import Partners from '../../components/landing/partners/partners'
import { Projects } from "../../3d/projects/projects";

const Landing = () => {
    return (
        <div className='w-full'>
            <Hero />
            <Partners />
            <Projects />
            <div className="h-screen"></div>
        </div>
    )
}

export default Landing

