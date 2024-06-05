import React from 'react';
import { Projects } from '../../../3d/projects/projects';
import BannerText from "../../bannerText/bannerText";

const OurProjects = () => {
    return (
        <div className='w-full'>
            <BannerText title="Our" subTitle="Designs" />

            <div className='projects-container-view'>
                <Projects />
            </div>
        </div>
    )
}

export default OurProjects;