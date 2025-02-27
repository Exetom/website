import React from 'react';
import Container from "../../../components/container/container";
import useServicesData from "./data";
import ServiceCard from '../serviceCard/serviceCard';

const AllServices = () => {

    const data = useServicesData();

    return (
        <div className='w-full mb-60'>
            <Container>
                <div className="w-full mb-5  md:mb-10 lg:mb-20">
                    <div className="text-2xl uppercase tracking-widest font-bold text-center mb-10 text-[#0b3f78]">
                        We Provide Services
                    </div>
                    <div className="xs:text-xl text-center lg:mx-20">
                        Partner with Haamztech. Inc today and take your business to new heights. With our comprehensive services, unwavering support, and commitment to excellence, we're here to help you succeed in the digital era.
                    </div>
                </div>
                <div className='flex flex-wrap gap-8 md:gap-4 sm:-mx-4'>
                    {(data || []).map((data, idx) => (
                        <div key={idx} data-aos={data.animation} data-aos-duration={data.animationDuration} className='w-full p-4 md:w-[46%] lg:w-[49%] xl:w-[32%] rounded-lg shadow-xl bg-slate-50 all-servcies-card cursor-pointer z-[1]'>
                            <ServiceCard data={data} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllServices