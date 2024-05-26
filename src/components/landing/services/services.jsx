import React from 'react'
import { dataServiceList } from "./data";

const Services = () => {
    return (
        <div className='w-full'>
            <div className='general-section-title'>
                <span className='general-section-title-text tracking-wider'>
                    <span className='general-section-title-border'>
                        Our <span className='border-bar'></span>
                    </span>
                    Services
                </span>
            </div>
            <div className="services-container max-w-7xl mx-auto mt-40">
                {dataServiceList.map((e) => (
                    <div data-aos={e.animation} className='service-inner-container'>
                        <div className="service-box" style={{ '--clr': e.color }}>
                            <div className="service-box-content">
                                <div className="service-box-content-icon">
                                    {e.icon}
                                </div>
                                <div className="service-box-content-text">
                                    <div className='title'>{e.title}</div>
                                    <p className='description'>
                                        {e.description}
                                    </p>
                                    <a href="#" className='button'>Book a Call</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services