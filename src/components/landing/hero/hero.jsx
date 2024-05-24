import React from 'react'
import { Shapes } from '../../../3d/shapes/shapes';
import { FaArrowDown } from "react-icons/fa6";
import SPRING from "../../../assets/spring.svg";
import ROCKET from "../../../assets/rocket.svg"
import STAR from "../../../assets/start.svg";
import LETSGO from "../../../assets/lets-go.svg";

const Hero = () => {
    return (
        <div className='relative max-w-7xl mx-auto px-2' id='hero'>
            <div className='absolute right-20 top-20 bounceUpDown'>
                <img src={SPRING} alt="" />
            </div>

            <div className='absolute top-0 left-0'>
                <Shapes />
            </div>
            <div className='flex flex-col items-center justify-center hero-height'>
                <div className='font-bold text-xl mb-4'>Revolutionizing the future with cutting-edge software solutions today</div>
                <div className='text-5xl font-extrabold flex items-center gap-2'>Provide <span className='font-extrabold text-[#880DB4]'>Million-Dollar</span> Business Solutions <img src={ROCKET} alt="" /></div>
                <div className='text-center mt-6 font-bold text-xl w-[800px]'>
                    Access 15+ passionate software engineers who collaborate with everyone from individuals and startups to SMEs and large enterprises. We're all about crafting innovative, simple, and artistically designed software solutions.
                </div>
                <div >
                    <div class="booking-button">
                        <a href="#">Schedule Call</a>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-20 right-20 bounceUpDown'>
                <a href="#" className='relative'>
                    <img src={LETSGO} alt="" className='rotate-animation' />
                    <FaArrowDown size={24} className='center-absokute' />
                </a>
            </div>

            <div className='absolute left-20 bottom-20 bounceUpDown'>
                <img src={STAR} alt="" />
            </div>
        </div>
    )
}

export default Hero