import React, { useRef } from 'react';
import { SingleProject } from "./utils";
import { dataList } from "./data";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {
    const mainRef = useRef(null);
    const workContainerRef = useRef(null);

    useGSAP(() => {
        const container = workContainerRef.current;
        const projects = container.querySelectorAll('.single-work-container');

        const projectWidthValue = window.innerWidth;

        container.style.width = `${projectWidthValue * projects.length}px`;

        gsap.to(projects, {
            xPercent: -100 * (projects.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: () => `+=${container.offsetWidth}`,
            },
        });
    }, { scope: mainRef });

    return (
        <div className='w-full'>
            <div className='general-section-title'>
                <span className='general-section-title-text tracking-wider'>
                    <span className='general-section-title-border'>
                        Thing's we <span className='border-bar'></span>
                    </span>
                    Worked on
                </span>
            </div>
            <div ref={mainRef} className='our-works'>
                <div ref={workContainerRef} className='our-works-container'>
                    {(dataList || []).map((project, i) => (
                        <SingleProject
                            key={i}
                            index={i}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work