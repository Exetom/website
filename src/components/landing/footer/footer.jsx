import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import LOGO from "../../../assets/logo-light-tranparent.png"
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
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div class="flex justify-center sm:justify-start">
                                <img src={LOGO} alt="" />
                            </div>

                            <p class="mt-6 max-w-md text-center leading-relaxed text-[#eeeeee] sm:max-w-xs sm:text-left">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                                cum itaque neque.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                            <div class="text-center sm:text-left">
                                <p class="text-lg font-medium text-[#77089E]">About Us</p>

                                <ul class="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a class="text-[#eeeeee] transition hover:text-[#eeeeee]/75" href="#">
                                            Company History
                                        </a>
                                    </li>

                                    <li>
                                        <a class="text-[#eeeeee] transition hover:text-[#eeeeee]/75" href="#">
                                            Meet the Team
                                        </a>
                                    </li>

                                    <li>
                                        <a class="text-[#eeeeee] transition hover:text-[#eeeeee]/75" href="#">
                                            Employee Handbook
                                        </a>
                                    </li>

                                    <li>
                                        <a class="text-[#eeeeee] transition hover:text-[#eeeeee]/75" href="#"> Careers </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="text-center sm:text-left">
                                <p class="text-lg font-medium text-[#77089E]">Our Services</p>

                                <ul class="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a class="text-[#eeeeee] transition hover:text-[#eeeeee]/75" href="#">
                                            Web Development
                                        </a>
                                    </li>

                                    <li>
                                        <a class="text-[#eeeeee] transition hover:text-[#eeeeee]/75" href="#"> Web Design </a>
                                    </li>

                                    <li>
                                        <a class="text-[#eeeeee] transition hover:text-[#eeeeee]/75" href="#"> Marketing </a>
                                    </li>

                                    <li>
                                        <a class="text-[#eeeeee] transition hover:text-[#eeeeee]/75" href="#"> Google Ads </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="text-center sm:text-left">
                                <p class="text-lg font-medium text-[#77089E]">Contact Us</p>

                                <ul class="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a
                                            class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="size-5 shrink-0 text-[#77089E]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>

                                            <span class="flex-1 text-[#eeeeee]">info@exetom.com</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="size-5 shrink-0 text-[#77089E]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>

                                            <span class="flex-1 text-[#eeeeee]">+ (966) 57 431 6855</span>
                                        </a>
                                    </li>

                                    <li
                                        class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="size-5 shrink-0 text-[#77089E]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>

                                        <address class="-mt-0.5 flex-1 not-italic text-[#eeeeee]">
                                            17a Shrubland Rd, Banstead, England
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
                            <a href="#" className='social-icon fb'>
                                <FaFacebookF />
                            </a>
                            <a href="#" className='social-icon ins'>
                                <FaInstagram />
                            </a>
                            <a href="#" className='social-icon dri'>
                                <FaDribbble />
                            </a>
                            <a href="#" className='social-icon lin'>
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className='social-icon twi'>
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer