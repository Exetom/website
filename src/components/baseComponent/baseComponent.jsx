import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import LOGO from "../../assets/logo-dark-tranparent.png";
import LOGOLIGHT from "../../assets/logo-light-tranparent.png";
import PHONE_SVG from "../../assets/phone.svg";
import Container from '../container/container';

const BaseComponent = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            document.body.classList.add('prevent-scroll');
        } else {
            document.body.classList.remove('prevent-scroll');
        }
        return () => {
            document.body.classList.remove('prevent-scroll');
        };
    }, [active]);

    return (
        <div className={`w-full base-container ${active ? 'overflow-hidden' : ''}`}>
            <Container>
                <nav className="min-h-28 pt-5">
                    <div className="flex items-center justify-between min-h-20">
                        {active ? (
                            <img src={LOGOLIGHT} alt="logo-image" className="w-36 cursor-pointer z-[9999]" />
                        ) : (
                            <img src={LOGO} alt="logo-image" className="w-36 cursor-pointer z-[9999]" />
                        )}
                        <div className="flex items-center justify-center gap-5">
                            <div className="flex gap-2">
                                <img src={PHONE_SVG} alt="phone-svg" className="w-12" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">Let's connect</span>
                                    <span className="text-[#3B054E] font-semibold">+ (966) 57 431 6855</span>
                                </div>
                            </div>
                            <button className="animation xl:text-base text-sm whitespace-nowrap font-bold text-white py-3 px-6 rounded-full">Book a meeting</button>
                            <div className="ml-10">
                                <div className="nav-menu-container">
                                    <div className={`nav-menu-btn ${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
                                        <div className="circles">
                                            <div className="circle-1"></div>
                                            <div className="circle-2"></div>
                                        </div>
                                        <div className="menu-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </Container>
            <div className="w-full">
                <Outlet />
            </div>
            {active && (
                <div className="menu-overlay">
                    <ul className="nav-menu-list">
                        <li data-aos="fade-right" data-aos-duration="1500" className="nav-menu-item">
                            <a className="nav-menu-item left-anim" href=""><span>Who</span> we are?</a>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1600" className="nav-menu-item">
                            <a className="nav-menu-item right-anim" href=""><span>Our</span> Services</a>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1700" className="nav-menu-item">
                            <a className="nav-menu-item left-anim" href=""><span>What</span> we do?</a>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1800" className="nav-menu-item">
                            <a className="nav-menu-item right-anim" href=""><span>Tech</span>nologies</a>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1900" className="nav-menu-item">
                            <a className="nav-menu-item left-anim" href=""><span>Contact</span> Us</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default BaseComponent