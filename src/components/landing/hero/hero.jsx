import React from 'react'
import { Shapes } from '../../../3d/shapes/shapes';
import { FaArrowDown } from "react-icons/fa6";
import SPRING from "../../../assets/spring.svg";
import ROCKET from "../../../assets/rocket.svg"
import STAR from "../../../assets/start.svg";
import LETSGO from "../../../assets/lets-go.svg";
import Container from '../../container/container';

const Hero = () => {
    return (
        <Container>
            <div className='hero-container' id="hero">
                <div className='floating-obj-1'>
                    <Shapes />
                </div>
                <div className='floating-obj-2 bounceUpDown'>
                    <img src={SPRING} alt="" />
                </div>

                <div className='hero-content-container'>
                    <div data-aos="fade-right" data-aos-duration="1000" className='pre-title'>Revolutionizing the future with cutting-edge software solutions today</div>
                    <div data-aos="fade-down-right" data-aos-duration="1000" className='title'>Provide <span className='font-extrabold text-[#880DB4]'>Million-Dollar</span> Business Solutions <img src={ROCKET} alt="" /></div>
                    <div data-aos="fade-left" data-aos-duration="1000" className='description'>
                        Access 15+ passionate software engineers who collaborate with everyone from individuals and startups to SMEs and large enterprises. We're all about crafting innovative, simple, and artistically designed software solutions.
                    </div>
                    <div >
                        <div className="booking-button">
                            <a href="#">Schedule Call</a>
                        </div>
                    </div>
                </div>
                <div className='floating-obj-3 bounceUpDown'>
                    <img src={STAR} alt="" />
                </div>
                <div className='floating-obj-4 bounceUpDown'>
                    <a href="#" className='relative'>
                        <img src={LETSGO} alt="" className='rotate-animation' />
                        <FaArrowDown size={24} className='center-absokute' />
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Hero