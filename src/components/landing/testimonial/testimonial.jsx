import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import { dataList } from './data';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { TiStarFullOutline, TiStarOutline, TiStarHalfOutline } from "react-icons/ti";
import 'keen-slider/keen-slider.min.css';

const Testimonial = () => {
    const sliderRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const prevDesktopRef = useRef(null);
    const nextDesktopRef = useRef(null);

    useEffect(() => {
        let keenSliderInstance;

        if (sliderRef.current) {
            keenSliderInstance = new KeenSlider(sliderRef.current, {
                loop: true,
                slides: {
                    origin: 'center',
                    perView: 1.25,
                    spacing: 16,
                },
                breakpoints: {
                    '(min-width: 1024px)': {
                        slides: {
                            origin: 'auto',
                            perView: 1.5,
                            spacing: 32,
                        },
                    },
                },
            });

            const prevElem = prevRef.current;
            const nextElem = nextRef.current;
            const prevDesktopElem = prevDesktopRef.current;
            const nextDesktopElem = nextDesktopRef.current;

            if (prevElem) prevElem.addEventListener('click', () => keenSliderInstance.prev());
            if (nextElem) nextElem.addEventListener('click', () => keenSliderInstance.next());
            if (prevDesktopElem) prevDesktopElem.addEventListener('click', () => keenSliderInstance.prev());
            if (nextDesktopElem) nextDesktopElem.addEventListener('click', () => keenSliderInstance.next());
        }

        return () => {
            if (keenSliderInstance) {
                keenSliderInstance.destroy();
            }
        };
    }, []);

    return (
        <section className="bg-gradient-to-br from-blue-500 to-red-500">
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Don't just take our word for it...
                        </h2>

                        <p className="mt-4 text-white">
                            See what our clients have to say about our exceptional IT services.
                        </p>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4 justify-center">
                            <button
                                aria-label="Previous slide"
                                ref={prevDesktopRef}
                                className="rounded-full border border-[#FFA12B] p-3 text-[#FFA12B] transition hover:border-[#e50a0a] hover:bg-[#e50a0a] hover:text-white"
                            >
                                <MdOutlineChevronLeft size={28} />
                            </button>

                            <button
                                aria-label="Next slide"
                                ref={nextDesktopRef}
                                className="rounded-full border border-[#FFA12B] p-3 text-[#FFA12B] transition hover:border-[#e50a0a] hover:bg-[#e50a0a] hover:text-white"
                            >
                                <MdOutlineChevronRight size={28} />
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div ref={sliderRef} className="keen-slider">
                            {(dataList || []).map(((item, idx) => (
                                <div key={idx} className="keen-slider__slide">
                                    <blockquote
                                        className="flex h-full flex-col justify-between bg-white p-6 shadow-lg sm:p-8 lg:p-12 rounded"
                                    >
                                        <div>
                                            <div className="flex gap-0.5">
                                                {item.rating.map((rate, indx) => (
                                                    <>
                                                        {rate === 1 ? (
                                                            <TiStarFullOutline key={indx} size={20} className='text-green-500' />
                                                        ) : rate === 0 ? (
                                                            <TiStarOutline key={indx} size={20} className='text-green-500' />
                                                        ) : (
                                                            <TiStarHalfOutline key={indx} size={20} className='text-green-500' />
                                                        )}
                                                    </>
                                                ))}
                                            </div>

                                            <div className="mt-4">
                                                <p className="text-2xl font-bold text-[#e50a0a] sm:text-3xl">{item.title}</p>

                                                <p className="mt-4 leading-relaxed text-gray-700">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                            &mdash; {item.by}
                                        </footer>
                                    </blockquote>
                                </div>
                            )))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <button
                        aria-label="Previous slide"
                        ref={prevRef}
                        className="rounded-full border border-[#FFA12B] p-4 text-[#FFA12B] transition hover:border-[#e50a0a] hover:bg-[#e50a0a] hover:text-white"
                    >
                        <MdOutlineChevronLeft size={28} />
                    </button>

                    <button
                        aria-label="Next slide"
                        ref={nextRef}
                        className="rounded-full border border-[#FFA12B] p-4 text-[#FFA12B] transition hover:border-[#e50a0a] hover:bg-[#e50a0a] hover:text-white"
                    >
                        <MdOutlineChevronRight size={28} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;
