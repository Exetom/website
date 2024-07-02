import React from 'react'
import { FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter, FaBehance } from "react-icons/fa";
import LOGO from "@assets/footer-logo.png"
import Container from '../../container/container';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <div className="footer-content">
                <Container>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center sm:justify-start">
                                <img src={LOGO} alt="" className='w-60' />
                            </div>

                            <p className="mt-6 max-w-md text-center leading-relaxed text-[#eeeeee] sm:max-w-xs sm:text-left">
                                At Exetom, we deliver innovative IT solutions that empower businesses to achieve operational excellence and drive digital transformation. Our expertise in technology integration and customized support ensures seamless and secure IT operations tailored to your unique needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-[#336396]">Reach Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <span className="text-[#eeeeee] transition hover:text-[#eeeeee]/75">
                                            Phone Call
                                        </span>
                                    </li>

                                    <li>
                                        <span className="text-[#eeeeee] transition hover:text-[#eeeeee]/75">
                                            Whatsapp
                                        </span>
                                    </li>

                                    <li>
                                        <span className="text-[#eeeeee] transition hover:text-[#eeeeee]/75">
                                            Email
                                        </span>
                                    </li>

                                    <li>
                                        <span className="text-[#eeeeee] transition hover:text-[#eeeeee]/75"> Google Meet </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-[#336396]">More Services</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <span className="text-[#eeeeee] transition hover:text-[#eeeeee]/75">
                                            Web Development
                                        </span>
                                    </li>

                                    <li>
                                        <span className="text-[#eeeeee] transition hover:text-[#eeeeee]/75"> Designing </span>
                                    </li>

                                    <li>
                                        <span className="text-[#eeeeee] transition hover:text-[#eeeeee]/75"> Marketing </span>
                                    </li>

                                    <li>
                                        <span className="text-[#eeeeee] transition hover:text-[#eeeeee]/75"> Google Ads </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-[#336396]">Contact Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <span
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-5 shrink-0 text-[#336396]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>

                                            <span className="flex-1 text-[#eeeeee]">info@exetom.com</span>
                                        </span>
                                    </li>

                                    <li>
                                        <span
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-5 shrink-0 text-[#336396]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>

                                            <span className="flex-1 text-[#eeeeee]">+ (447) 84 215-3349</span>
                                        </span>
                                    </li>

                                    <li
                                        className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5 shrink-0 text-[#336396]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>

                                        <address className="-mt-0.5 flex-1 not-italic text-[#eeeeee]">
                                            17a Shrubland Road, Banstead England, SM7 2ES
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <div className='footer-bottom-title'>@2024 Exetom. All Rights Reserved</div>
                        <div className="socials">
                            <a href="https://www.facebook.com/profile.php?id=61560426016099" className='social-icon fb'>
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/exetom_inc/" className='social-icon ins'>
                                <FaInstagram />
                            </a>
                            <a href="https://dribbble.com/exetom" className='social-icon dri'>
                                <FaDribbble />
                            </a>
                            <a href="https://www.behance.net/exetom" className='social-icon beh'>
                                <FaBehance />
                            </a>
                            <a href="https://www.linkedin.com/company/exetom" className='social-icon lin'>
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer