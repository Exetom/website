import React from 'react'
import { data } from "./data";
import Container from '../../container/container'

const ServeCard = () => {
    return (
        <div className="w-full" id="what-we-do">
            <Container>
                <div className="w-full">
                    <div className="text-2xl uppercase tracking-widest font-bold text-center mb-10 text-[#0b3f78]">
                        We Provide
                    </div>
                    <div className="xs:text-xl text-center mb-10  md:mb-20 lg:mb-40 lg:mx-20">
                        Partner with Exetom. Inc today and take your business to new heights. With our comprehensive services, unwavering support, and commitment to excellence, we're here to help you succeed in the digital era.
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 flex-wrap">
                    {(data || []).map((item, idx) => (
                        <div key={idx} data-aos={item.animation} data-aos-duration={item.animationDuration} className="flex gap-4 justify-center items-start sm:items-center flex-col shadow-lg p-10 rounded">
                            <span className="text-[#0b3f78] bg-[#0b3f78]/10 p-3 rounded-full">{item.icon}</span>
                            <div>
                                <h3 className="font-semibold text-xl text-left sm:text-center">{item.title}</h3>
                                <p className="mt-1 text-gray-500 text-left sm:text-center"> {item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default ServeCard