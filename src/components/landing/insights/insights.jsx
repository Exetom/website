import React, { useEffect, useState } from 'react';
import image from "./../../../assets/logo-dark-tranparent.png";
import CountUp from 'react-countup';

const Insights = () => {
    const [hovered, setHovered] = useState([false, false, false, false]);

    const updateTeamHoverState = (index, state) => {
        const newArray = JSON.parse(JSON.stringify(hovered));
        newArray[index] = state
        setHovered(newArray)
    }

    return (
        <div className='w-full mt-60'>
            <div className='general-section-title'>
                <span className='general-section-title-text tracking-wider'>
                    <span className='general-section-title-border'>
                        Our <span className='border-bar'></span>
                    </span>
                    Insights
                </span>
            </div>

            <div className="insights-cards">
                <div data-aos="fade-up-right" data-aos-duration="1000" className="insights-card-inner insights-c-1 text-white" onMouseEnter={() => updateTeamHoverState(0, true)} onMouseLeave={() => updateTeamHoverState(0, false)}>
                    <div className="insights-card-front">
                        <img src={image} alt="Logo" />
                    </div>
                    <div className="insights-card-back">
                        <div className="insights-card-text">{hovered[0] ? (<CountUp start={0} end={50} separator=" " suffix='+' duration={2} />) : null}</div>
                        <div className="insights-card-content">Happy Clients</div>
                    </div>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1000" className="insights-card-inner insights-c-2 text-white hover:text-black" onMouseEnter={() => updateTeamHoverState(1, true)} onMouseLeave={() => updateTeamHoverState(1, false)}>
                    <div className="insights-card-front">
                        <img src={image} alt="Logo" />
                    </div>
                    <div className="insights-card-back">
                        <div className="insights-card-text">{hovered[1] ? (<CountUp start={0} end={100} separator=" " suffix='+' duration={2} />) : null}</div>
                        <div className="insights-card-content">Projects Completed</div>
                    </div>
                </div>
                <div data-aos="fade-up-right" data-aos-duration="1000" className="insights-card-inner insights-c-3 text-white hover:text-black" onMouseEnter={() => updateTeamHoverState(2, true)} onMouseLeave={() => updateTeamHoverState(2, false)}>
                    <div className="insights-card-front">
                        <img src={image} alt="Logo" />
                    </div>
                    <div className="insights-card-back">
                        <div className="insights-card-text">{hovered[2] ? (<CountUp start={0} end={10} separator=" " suffix='+' duration={2} />) : null}</div>
                        <div className="insights-card-content">Acheivments</div>
                    </div>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1000" className="insights-card-inner insights-c-4 text-white hover:text-black" onMouseEnter={() => updateTeamHoverState(3, true)} onMouseLeave={() => updateTeamHoverState(3, false)}>
                    <div className="insights-card-front">
                        <img src={image} alt="Logo" />
                    </div>
                    <div className="insights-card-back ">
                        <div className="insights-card-text">{hovered[3] ? (<CountUp start={0} end={8} separator=" " suffix='+' duration={2} />) : null}</div>
                        <div className="insights-card-content">Year's of Experience</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insights;