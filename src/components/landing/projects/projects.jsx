import React from 'react'
import { Projects } from '../../../3d/projects/projects';

const OurProjects = () => {
    return (
        <div className='w-full'>
            <div className='general-section-title'>
                <span className='general-section-title-text tracking-wider'>
                    <span className='general-section-title-border'>
                        Our <span className='border-bar'></span>
                    </span>
                    Projects
                </span>
            </div>
            <div className='relative w-full h-[calc(100vh-80px)]'>
                <Projects />
            </div>
        </div>
    )
}

export default OurProjects;