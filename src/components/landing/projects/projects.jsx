import React from 'react'
import { Projects } from '../../../3d/projects/projects';

const OurProjects = () => {
    return (
        <div className='w-full mt-20'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-[#880DB4] text-2xl font-extrabold'>Our Exclusive Deliveries</div>
                <div className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum repellat omnis exercitationem vero magni asperiores! Vero dolores nesciunt eaque perspiciatis accusamus consequuntur possimus! Quos ex quisquam nostrum rerum id?</div>
            </div>
            <div className='relative w-full h-[calc(100vh-80px)]'>
                <Projects />
            </div>
        </div>
    )
}

export default OurProjects;