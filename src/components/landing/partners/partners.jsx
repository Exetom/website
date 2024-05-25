import React, { useEffect, useState } from 'react';
import MAP from "../../../assets/map.png";
import { FaCheck } from "react-icons/fa";


const Partners = () => {
    const [shaded, setShaded] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollColor);
    }, []);

    const scrollColor = () => {
        const heroSection = document.getElementById('hero').getBoundingClientRect().height - 300;
        const partnersSection = (document.getElementById('partners').getBoundingClientRect().height * 2) / 2;
        const offset = window.pageYOffset;
        if (offset >= heroSection && offset < partnersSection) {
            setShaded(true);
        } else {
            setShaded(false);
        }
    }

    return (
        <div className={`${shaded ? 'bg-[#1a0b1a] ' : ''}w-full min-h-screen background-animation pt-[7.5rem]`} id='partners'>
            <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                    <div className='mt-10 flex flex-col justify-start'>
                        <div data-aos="fade-up-right">
                            <div className={`${shaded ? 'text-[#FFA12B]' : 'text-[#77089E]'} font-bold text-2xl tracking-widest`}>We are Exetom</div>
                        </div>
                        <div data-aos="fade-up-right">
                            <div className={`${shaded ? 'text-white' : 'text-black'} mt-5 text-xl`}>
                                We create custom software that fosters innovation and generates social impact. Whether you're a Fortune 500 company or a startup in stealth mode, we provide our partners with the creative, technical, and business expertise needed to thrive.
                            </div>
                        </div>
                        <div data-aos="fade-up-right">
                            <div className={`${shaded ? 'text-white' : 'text-black'} mt-5 text-xl`}>
                                We empower our clients to achieve their business goals with innovative software solutions. Partner with us to transform your vision into reality and drive success.
                            </div>
                        </div>
                        <div data-aos="fade-up-right">
                            <div className={`${shaded ? 'text-white' : 'text-black'} mt-5 text-xl`}>
                                Our expert team combines industry-leading technology with strategic insights to deliver results that drive success and growth.
                            </div>
                        </div>

                        <div className='mt-6 flex flex-col justify-start gap-5'>
                            <div data-aos="fade-up-right" className='flex items-center gap-4'>
                                <span className={`rounded-full h-6 w-6 flex items-center justify-center ${shaded ? 'bg-white' : 'bg-[#880DB4]'}`}>
                                    <FaCheck className={`${shaded ? 'text-[#1a0b1a]' : 'text-white'}`} />
                                </span>
                                <span className={`text-md font-bold ${shaded ? "text-white" : "text-black"}`}>Gauaranteed Customer Success</span>
                            </div>
                            <div data-aos="fade-up-right" className='flex items-center gap-4'>
                                <span className={`rounded-full h-6 w-6 flex items-center justify-center ${shaded ? 'bg-white' : 'bg-[#880DB4]'}`}>
                                    <FaCheck className={`${shaded ? 'text-[#1a0b1a]' : 'text-white'}`} />
                                </span>
                                <span className={`text-md font-bold ${shaded ? "text-white" : "text-black"}`}>Regular Service Improvement</span>
                            </div>
                            <div data-aos="fade-up-right" className='flex items-center gap-4'>
                                <span className={`rounded-full h-6 w-6 flex items-center justify-center ${shaded ? 'bg-white' : 'bg-[#880DB4]'}`}>
                                    <FaCheck className={`${shaded ? 'text-[#1a0b1a]' : 'text-white'}`} />
                                </span>
                                <span className={`text-md font-bold ${shaded ? "text-white" : "text-black"}`}>On-Demand Service</span>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img data-aos="fade-up-left" src={MAP} alt="" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto h-full mt-60 pb-16">
                <div data-aos="fade-up-right" className='w-full'>
                    <div className={`${shaded ? 'text-[#FFA12B]' : 'text-[#880DB4]'} font-bold text-2xl tracking-widest`}>Who We Serve</div>
                </div>
                <div data-aos="fade-up-right" className='w-full'>
                    <div className={`${shaded ? "text-white" : "text-black"} mt-2 text-xl font-bold`}>We empower businesses to achieve comprehensive value through technology at every stage of their growth.</div>
                </div>
                <div className='mt-20'>
                    <div className={`serve-partners ${shaded ? "text-white" : "text-black"}`}>
                        <div data-aos="fade-up-right" className="serve-partners-left">01/</div>
                        <div className="serve-partners-right">
                            <div className='w-full flex flex-col gap-2'>
                                <span data-aos="fade-up-left" className='text-xl font-extrabold'>Enterprise</span>
                                <span data-aos="fade-up-left" className='font-bold'>Build custom solutions and adopt advanced technologies for your organization to:</span>
                                <ul className='serve-ul mt-3'>
                                    <li data-aos="fade-up-right" className='serve-li'>Idea &amp; Persona Validation</li>
                                    <li data-aos="fade-up-left" className='serve-li'>UI &amp; UX Design</li>
                                    <li data-aos="fade-up-right" className='serve-li'>Lo-Fi &amp; Hi-Fi Prototypes</li>
                                    <li data-aos="fade-up-left" className='serve-li'>User Acceptance Testing</li>
                                    <li data-aos="fade-up-right" className='serve-li'>Development &amp; Launch</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`serve-partners ${shaded ? "text-white" : "text-black"}`}>
                        <div className="serve-partners-left"></div>
                        <div className="serve-partners-right">
                            <div className='w-full flex flex-col gap-2'>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className={`serve-partners ${shaded ? "text-white" : "text-black"}`}>
                        <div data-aos="fade-up-right" className="serve-partners-left">01/</div>
                        <div className="serve-partners-right">
                            <div className='w-full flex flex-col gap-2'>
                                <span data-aos="fade-up-left" className='text-xl font-extrabold'>Enterprise</span>
                                <span data-aos="fade-up-left" className='font-bold'>Build custom solutions and adopt advanced technologies for your organization to:</span>
                                <ul className='serve-ul mt-3'>
                                    <li data-aos="fade-up-right" className='serve-li'>Idea &amp; Persona Validation</li>
                                    <li data-aos="fade-up-left" className='serve-li'>UI &amp; UX Design</li>
                                    <li data-aos="fade-up-right" className='serve-li'>Lo-Fi &amp; Hi-Fi Prototypes</li>
                                    <li data-aos="fade-up-left" className='serve-li'>User Acceptance Testing</li>
                                    <li data-aos="fade-up-right" className='serve-li'>Development &amp; Launch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners