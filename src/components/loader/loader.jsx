import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './loader.scss';
import { useGSAP } from "@gsap/react";
import VIDEO1 from "./../../assets/video1.mp4";
import VIDEO2 from "./../../assets/video2.mp4";

gsap.registerPlugin(useGSAP);

const Loader = () => {
    const mainScreenScope = useRef(null);
    const loadingScreen = useRef(null);
    const counter1Ref = useRef(null);
    const counter2Ref = useRef(null);
    const counter3Ref = useRef(null);
    const loaderRef = useRef(null);
    const loader1Ref = useRef(null);
    const loader2Ref = useRef(null);
    const loader3Ref = useRef(null);
    const loader4Ref = useRef(null);

    useGSAP(() => {
        presetCounter3();
        digitAnimation();
        initialLoaderAnimation();
        loaderChangingTextAnimation();
        loaderFinishingAnimation();
    }, { scope: mainScreenScope });

    const presetCounter3 = () => {
        const counter3 = counter3Ref.current;
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 10; j++) {
                const div = document.createElement("div");
                div.className = "num";
                div.textContent = j;
                counter3.appendChild(div)
            }
        }

        const finalDiv = document.createElement("div");
        finalDiv.className = "num";
        finalDiv.textContent = "0";
        counter3.appendChild(finalDiv);

        animateContainer(counter3, 5);
        animateContainer(document.querySelector(".counter-2"), 6);
        animateContainer(document.querySelector(".counter-1"), 2, 4);
    }
    const animateContainer = (counter, duration, delay = 0) => {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut"
        });
    }
    const digitAnimation = () => {
        gsap.to(".digit", { top: "-150px", stagger: { amount: 0.25, }, delay: 6, duration: 1, ease: "power4.inOut" })
    }
    const initialLoaderAnimation = () => {
        gsap.from(loader1Ref.current, { width: 0, duration: 6, ease: "power2.inOut" });
        gsap.from(loader2Ref.current, { width: 0, duration: 1.9, duration: 2, ease: "power2.inOut" });
        gsap.from(loader3Ref.current, { width: 0, duration: 1.9, duration: 2, ease: "power2.inOut" });
        gsap.from(loader4Ref.current, { width: 0, duration: 1.9, duration: 2, ease: "power2.inOut" });
        gsap.to(loaderRef.current, { background: "none", delay: 6, duration: 0.1, });
    }
    const loaderChangingTextAnimation = () => {
        gsap.to(loader1Ref.current, { rotate: 90, y: -50, x: 75, duration: 0.5, delay: 6 });
        gsap.to(loader1Ref.current, { duration: 0.5, borderRadius: "2px", ease: "power2.inOut", }, "<");

        gsap.to(loader2Ref.current, { x: -2, y: 25, duration: 0.5, }, "<");
        gsap.to(loader2Ref.current, { duration: 0.5, borderRadius: "2px", ease: "power2.inOut", }, "<");

        // gsap.to(loader3Ref.current, { x: -175, y: -125, duration: 0.5, }, "<");
        gsap.to(loader3Ref.current, { duration: 0.5, borderRadius: "2px", ease: "power2.inOut", }, "<");
        gsap.to(loader3Ref.current, { x: -102, y: -125, duration: 0.5, }, "<");

        gsap.to(loader4Ref.current, { duration: 0.5, borderRadius: "50%", ease: "power2.inOut", }, "<");
        gsap.to(loader4Ref.current, { x: -180, y: -50, duration: 0.5, }, "<");
    }
    const loaderFinishingAnimation = () => {
        gsap.to(loaderRef.current, { scale: 40, duration: 1, delay: 7, ease: "power2.inOut" })
        gsap.to(loaderRef.current, { rotate: 45, y: 500, x: 2000, duration: 1, delay: 7, ease: "power2.inOut" })
        gsap.to(loadingScreen.current, { display: 'none', duration: 0.5, delay: 7.5, ease: "power1.inOut" })
        gsap.to(mainScreenScope.current, { display: 'none', duration: 0.5, delay: 7.5, ease: "power1.inOut" })
    }

    return (
        <div ref={mainScreenScope} className='loader-container'>
            <video className="background-video" autoPlay loop muted>
                <source src={window.innerWidth > 680 ? VIDEO1 : VIDEO2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="header-revealer"></div>
            <div ref={loadingScreen} className="loading-screen">
                <div className="loader" ref={loaderRef}>
                    <div ref={loader1Ref} className="loader-1 bar"></div>
                    <div ref={loader2Ref} className="loader-2 bar"></div>
                    <div ref={loader3Ref} className="loader-3 bar"></div>
                    <div ref={loader4Ref} className="loader-4 bar"></div>
                </div>

                <div className="counter">
                    <div ref={counter1Ref} className="counter-1 digit">
                        <div className="num">0</div>
                        <div className="num num1offset1">1</div>
                    </div>
                    <div ref={counter2Ref} className="counter-2 digit">
                        <div className="num">0</div>
                        <div className="num num1offset2">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                        <div className="num">7</div>
                        <div className="num">8</div>
                        <div className="num">9</div>
                        <div className="num">0</div>
                    </div>
                    <div ref={counter3Ref} className="counter-3 digit">
                        <div className="num">0</div>
                        <div className="num">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                        <div className="num">7</div>
                        <div className="num">8</div>
                        <div className="num">9</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
