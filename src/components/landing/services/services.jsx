import React from 'react'
import { dataServiceList } from "./data";
import Container from '../../container/container';
import BannerText from '../../bannerText/bannerText';

const Services = () => {
    return (
        <div className='w-full' id="our-service-section">
            <BannerText title="Our" subTitle="Services" />
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 flex-wrap mt-20">
                    {dataServiceList.map((item, idx) => (
                        <div key={idx} data-aos={item.animation} data-aos-duration={item.animationDuration} className="service-card cursor-pointer">
                            <div className="shadow"></div>
                            <div className="flex gap-4 justify-center items-center sm:items-start flex-col shadow-lg p-10 rounded bg-[#1a395b] h-full">
                                <span className="text-blue-600 bg-violet-500/10 p-3 rounded-full">{item.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-xl text-center sm:text-left text-white">{item.title}</h3>
                                    <p className="mt-1 text-gray-400 text-center sm:text-left"> {item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Services