import React from 'react';
import { RiExternalLinkLine } from "react-icons/ri";

const ProjectCard = (props) => {
    const { key, showCard, category, ImageHref, title, button, buttonHref, description } = props;
    return (
        <>
            <div key={key}
                className={`w-full px-4 md:w-1/2 xl:w-1/3 ${showCard === "all" || showCard === category.toLowerCase()
                    ? "block"
                    : "hidden"
                    }`}
            >
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-[10px] shadow">
                        <img src={ImageHref} alt="portfolio" className="w-full transform hover:scale-150 cursor-pointer transition-transform duration-500 ease-in-out" />
                    </div>
                    <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-[34px] px-3 text-center shadow-md">
                        <span className="text-primary mb-2 block text-sm font-medium">
                            {category}
                        </span>
                        <h3 className="text-dark mb-5 text-xl font-bold">{title}</h3>
                        <p className='line-clamp-2 mb-5'>
                            {description}
                        </p>
                        <a
                            href={buttonHref}
                            target='_blank'
                            className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke py-[10px] px-7 text-sm font-medium transition hover:text-blue-400"
                        >
                            <RiExternalLinkLine size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export {
    ProjectCard
}