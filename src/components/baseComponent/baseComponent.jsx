import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import LOGO from "../../assets/logo-dark-tranparent.png";
import PHONE_SVG from "../../assets/phone.svg";

const BaseComponent = () => {
    return (
        <div className='w-full'>
            <div className="max-w-7xl mx-auto">
                <nav className="min-h-28 pt-5">
                    <div className="flex items-center justify-between min-h-20 ">
                        <div className='flex items-center justify-center gap-10'>
                            <img src={LOGO} alt="logo-image" className='w-44 cursor-pointer' />
                            <div className="flex items-center gap-4 text-gray-900">
                                <a href="#" className='font-semibold hover:text-[#3B054E]'>About us</a>
                                <a href="#" className='font-semibold hover:text-[#3B054E]'>what we serve?</a>
                                <a href="#" className='font-semibold hover:text-[#3B054E]'>what we do?</a>
                                <a href="#" className='font-semibold hover:text-[#3B054E]'>Contact</a>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-5'>
                            <div className='flex gap-2'>
                                <img src={PHONE_SVG} alt="logo-image" className='w-12' />
                                <div className='flex flex-col'>
                                    <span className='text-sm font-bold'>Let's connect</span>
                                    <span className='text-[#3B054E] font-semibold'>+ (966) 57 431 6855</span>
                                </div>
                            </div>
                            <button className='animation xl:text-base text-sm whitespace-nowrap font-bold text-white py-3 px-6 rounded-full'>Book a meeting</button>
                        </div>

                    </div>
                </nav>
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default BaseComponent