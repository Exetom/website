import React from 'react';
import Container from '../../components/container/container';
import { TbWorld } from "react-icons/tb";
import { FaHandPointRight } from "react-icons/fa";
import { InlineWidget } from "react-calendly";

const Booking = () => {
  return (
    <div className='w-full mt-20'>
      <Container>
        <div className='w-full flex flex-col gap-4 text-center justify-center items-center'>
          <span className='flex items-center gap-3 sm:text-sm md:text-xl xl:text-2xl'><TbWorld />Trusted by 100+ clients worldwide</span>
          <span className='sm:text-2xl md:text-4xl xl:text-6xl font-bold'>Book a call with Haamztech Today</span>
          <div className='flex items-center gap-4 sm:text-xl md:text-2xl xl:text-4xl'>
            <span><FaHandPointRight /></span>
            <span>
              Put your project in my capable hands, and I'll ensure it receives the attention and expertise it deserves!
            </span>
          </div>
        </div>
        <div className='relative w-full hidden lg:flex justify-center py-10'>
          <div class="marvel-device macbook">
            <div class="top-bar"></div>
            <div class="camera"></div>
            <div class="screen">
              <CalendlyHtml />
            </div>
            <div class="bottom-bar"></div>
          </div>
        </div>
        <div className='relative w-full hidden sm:flex lg:hidden justify-center py-10'>
          <div class="marvel-device ipad silver">
            <div class="camera"></div>
            <div class="screen">
              <CalendlyHtml />
            </div>
            <div class="home"></div>
          </div>
        </div>
        <div className='relative w-full flex sm:hidden justify-center py-10'>
          <div class="marvel-device iphone-x">
            <div class="notch">
              <div class="camera"></div>
              <div class="speaker"></div>
            </div>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="bottom-bar"></div>
            <div class="volume"></div>
            <div class="overflow">
              <div class="shadow shadow--tr"></div>
              <div class="shadow shadow--tl"></div>
              <div class="shadow shadow--br"></div>
              <div class="shadow shadow--bl"></div>
            </div>
            <div class="inner-shadow"></div>
            <div class="screen">
              <CalendlyHtml />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Booking;


const CalendlyHtml = () => {
  return (
    <InlineWidget url="https://calendly.com/exetom2024/consultation-call" styles={{ height: '100%' }} />
  );
}