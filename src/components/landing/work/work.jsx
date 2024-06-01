import React, { useEffect, useRef } from 'react';
import { SingleProject } from "./utils";
import { dataList } from "./data";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const useResponsiveGSAP = (callback, dependencies) => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                callback();
            } else {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, dependencies);
};

const Work = () => {
    const workContainerRef = useRef(null);

    useResponsiveGSAP(() => {
        const container = workContainerRef.current;
        if (!container) return;
        const projects = container.querySelectorAll('.single-work-container');

        gsap.to(projects, {
            xPercent: -100 * (projects.length - 1) + (projects.length - 1) * 5,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: () => `+=${container.offsetWidth * (projects.length - 1)}`,
            },
        });
    }, [workContainerRef]);

    return (
        <div className='w-full'>
            <div className='general-section-title'>
                <span className='general-section-title-text tracking-wider'>
                    <span className='general-section-title-border'>
                        Our <span className='border-bar'></span>
                    </span>
                    Work
                </span>
            </div>
            <div className='our-works'>
                <div ref={workContainerRef} className='our-works-container'>
                    {(dataList || []).map((project, i) => (
                        <div key={i}>
                            <SingleProject
                                index={i}
                                {...project}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
