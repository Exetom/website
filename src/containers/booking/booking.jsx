import React from 'react'
import Container from '../../components/container/container'
import Laptop from '../../3d/laptop/laptop';
import { TbWorld } from "react-icons/tb";
import { FaHandPointRight } from "react-icons/fa";
import { CalendlyHtml } from '../../3d/laptop/utils';

const Booking = () => {
  return (
    <div className='w-full mt-20'>
      <Container>
        <div className='w-full flex flex-col gap-4 text-center justify-center items-center'>
          <span className='flex items-center gap-3 sm:text-sm md:text-xl xl:text-2xl'><TbWorld />Trusted by 100+ clients worldwide</span>
          <span className='sm:text-2xl md:text-4xl xl:text-6xl font-bold'>Book a call with Exetom Today</span>
          <div className='flex items-center gap-4 sm:text-xl md:text-2xl xl:text-4xl'>
            <span><FaHandPointRight /></span>
            <span>
              Put your project in my capable hands, and I'll ensure it receives the attention and expertise it deserves!
            </span>
          </div>
        </div>
        <div className='relative w-full hidden md:block  h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh] xl:h-[120vh]'>
          <Laptop />
        </div>
        <div className='relative w-full flex md:hidden justify-center'>
          <div className="iphone my-6">
            <div className="screen">
              <CalendlyHtml />
            </div>
            <div className="notch">
              <div className="camera"></div>
              <div className="speaker"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Booking