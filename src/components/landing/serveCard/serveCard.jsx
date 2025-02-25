import React from 'react'
import { data } from "./data";
import Container from '../../container/container'

const ServeCard = () => {
    const colors = [
        { bg: '#ffc8bd', text: '#ff7759' },
        { bg: '#a4e6ff', text: '#0cbfff' },
        { bg: '#daadda', text: '#a52fa4' },
        { bg: '#b7bbc9', text: '#112149' },
        { bg: '#ffc8bd', text: '#ff7759' },
        { bg: '#a4e6ff', text: '#0cbfff' }
    ];
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
                        <div className='roz-card'>
                            <div key={idx} className="flex gap-4 justify-start items-start flex-col m-10">
                                <span style={{ backgroundColor: colors[idx].bg }} className="p-3 rounded-full icon-box">{item.icon(20, colors[idx].text)}</span>
                                <div>
                                    <h3 className="font-semibold text-xl text-left mb-2 inner-title">{item.title}</h3>
                                    <p className="mt-1 text-[#b5c1cc] text-left inner-description"> {item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default ServeCard