import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import LOGO from "../../assets/logo-dark-tranparent.png";
import LOGOLIGHT from "../../assets/logo-light-tranparent.png";
import PHONE_SVG from "../../assets/phone.svg";
import PHONE_SVG_WHITE from "../../assets/phone-white.svg";
import Container from '../container/container';

const BaseComponent = () => {
    const navigate = useNavigate();
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

    const navigateToBooking = (link) => {
        navigate(link);
    }

    const scrollToNextSection = (id) => {
        setActive(false);
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return (
        <div className={`w-full base-container overflow-x-hidden ${active ? 'overflow-hidden' : ''}`}>
            <Container>
                <nav className="base-navbar">
                    <div className="base-inner-container">
                        {active ? (
                            <img src={LOGOLIGHT} alt="logo-image" className="nav-logo" onClick={() => { navigateToBooking('/'); setActive(false); }} />
                        ) : (
                            <img src={LOGO} alt="logo-image" className="nav-logo" onClick={() => navigateToBooking('/')} />
                        )}
                        <div className="nav-right-items">
                            <div className="lets-connect">
                                <img src={PHONE_SVG} alt="phone-svg" className="w-12" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">Let's connect</span>
                                    <span className="text-[#3B054E] font-semibold">+ (966) 57 431 6855</span>
                                </div>
                            </div>
                            <button className="nav-book-button animation xl:text-base text-sm whitespace-nowrap font-bold text-white py-3 px-6 rounded-full" onClick={() => navigateToBooking('/booking')}>Book a meeting</button>
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
                            <span className="nav-menu-item left-anim" onClick={() => scrollToNextSection('partners')}><span>Who</span> we are?</span>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1600" className="nav-menu-item">
                            <span className="nav-menu-item right-anim" onClick={() => scrollToNextSection('our-service-section')}><span>Our</span> Services</span>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1700" className="nav-menu-item">
                            <span className="nav-menu-item left-anim" onClick={() => scrollToNextSection('what-we-do')}><span>What</span> we do?</span>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1800" className="nav-menu-item">
                            <span className="nav-menu-item right-anim" onClick={() => scrollToNextSection('tech-sec-card')}><span>Tech</span>nologies</span>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1900" className="nav-menu-item">
                            <span className="nav-menu-item left-anim" onClick={() => scrollToNextSection('contact-sec')}><span>Contact</span> Us</span>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1900" className="nav-menu-item">
                            <div className="flex justify-center items-center gap-5 mt-3">
                                <img src={PHONE_SVG_WHITE} alt="phone-svg" className="w-10 fill-slate-50" />
                                <div className="flex flex-col justify-center">
                                    <span className="text-sm font-bold text-[#eee]">Let's connect</span>
                                    <span className="text-[#ffffff] font-semibold">+ (966) 57 431 6855</span>
                                </div>
                            </div>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1900" className="nav-menu-item">
                            <button className="nav-book-button animation xl:text-base text-sm whitespace-nowrap font-bold text-white py-3 px-6 rounded-full mt-5" onClick={() => { navigateToBooking('/booking'); setActive(false); }}>Book a meeting</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default BaseComponent