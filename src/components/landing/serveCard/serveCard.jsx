import React from 'react'
import { data } from "./data";
import Container from '../../container/container'

const ServeCard = () => {
    return (
        <div className="w-full" id="what-we-do">
            <Container>
                <div className="w-full">
                    <div className="text-2xl uppercase tracking-widest font-bold text-center mb-10 text-[#880DB4]">
                        We Provide
                    </div>
                    <div className="xs:text-xl text-center mb-10  md:mb-20 lg:mb-40 lg:mx-20">
                        Partner with Exetom. Inc today and take your business to new heights. With our comprehensive services, unwavering support, and commitment to excellence, we're here to help you succeed in the digital era.
                    </div>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 flex-wrap">
                    {(data || []).map((item) => (
                        <div data-aos={item.animation} data-aos-duration={item.animationDuration} class="flex gap-4 justify-center items-start sm:items-center flex-col shadow-lg p-10">
                            <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">{item.icon}</span>
                            <div>
                                <h3 class="font-semibold text-xl text-left sm:text-center">{item.title}</h3>
                                <p class="mt-1 text-gray-500 text-left sm:text-center"> {item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default ServeCard