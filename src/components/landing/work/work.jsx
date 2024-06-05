import React, { useState } from 'react';
import { dataList } from "./data";
import { ProjectCard } from "./utils";
import Container from '../../container/container';
import BannerText from '../../bannerText/bannerText';

const Work = () => {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category) => {
        setShowCard(category);
    };
    return (
        <div className='w-full'>
            <BannerText title="Our" subTitle="Projects" />
            <Container>
                <div className="w-full flex flex-wrap justify-center -mx-4 mt-20">
                    <div className="w-full px-4">
                        <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                            <li className="mb-1">
                                <button
                                    onClick={() => handleProject("all")}
                                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "all"
                                        ? "activeClasses bg-primary text-[#1696cb]"
                                        : "inactiveClasses text-body-color hover:bg-primary hover:text-[#1696cb]"
                                        }`}
                                >
                                    All Projects
                                </button>
                            </li>
                            <li className="mb-1">
                                <button
                                    onClick={() => handleProject("development")}
                                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "branding"
                                        ? "activeClasses bg-primary text-[#1696cb]"
                                        : "inactiveClasses text-body-color hover:bg-primary hover:text-[#1696cb]"
                                        }`}
                                >
                                    Development
                                </button>
                            </li>
                            <li className="mb-1">
                                <button
                                    onClick={() => handleProject("design")}
                                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "design"
                                        ? "activeClasses bg-primary text-[#1696cb]"
                                        : "inactiveClasses text-body-color hover:bg-primary hover:text-[#1696cb]"
                                        }`}
                                >
                                    Designing
                                </button>
                            </li>
                            <li className="mb-1">
                                <button
                                    onClick={() => handleProject("marketing")}
                                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "marketing"
                                        ? "activeClasses bg-primary text-[#1696cb]"
                                        : "inactiveClasses text-body-color hover:bg-primary hover:text-[#1696cb]"
                                        }`}
                                >
                                    Marketing
                                </button>
                            </li>
                            <li className="mb-1">
                                <button
                                    onClick={() => handleProject("seo")}
                                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "development"
                                        ? "activeClasses bg-primary text-[#1696cb]"
                                        : "inactiveClasses text-body-color hover:bg-primary hover:text-[#1696cb]"
                                        }`}
                                >
                                    SEO
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {(dataList || []).map((item, idx) => (
                        <ProjectCard
                            key={idx}
                            ImageHref={item.image}
                            category={item.category}
                            title={item.title}
                            description={item.description}
                            buttonHref={item.link}
                            showCard={showCard}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Work;
