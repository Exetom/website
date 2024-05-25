import React from 'react';
import image from "./../../../assets/logo-white.png";

const Team = () => {

    return (
        <div className='w-full'>

            <div className='team-title'>
                <span className='team-title-text'>Our Insights</span>
            </div>

            <div className="team-cards">
                <div className="team-card-inner team-c-1 text-white">
                    <div className="team-card-front">
                        <img src={image} alt="Logo" />
                    </div>
                    <div className="team-card-back">
                        <div className="team-card-text">50+</div>
                        <div className="team-card-content">Happy Clients</div>
                    </div>
                </div>
                <div className="team-card-inner team-c-2 text-white hover:text-black">
                    <div className="team-card-front">
                        <img src={image} alt="Logo" />
                    </div>
                    <div className="team-card-back">
                        <div className="team-card-text">100+</div>
                        <div className="team-card-content">Projects Completed</div>
                    </div>
                </div>
                <div className="team-card-inner team-c-3 text-white hover:text-black">
                    <div className="team-card-front">
                        <img src={image} alt="Logo" />
                    </div>
                    <div className="team-card-back">
                        <div className="team-card-text">10+</div>
                        <div className="team-card-content">Acheivments</div>
                    </div>
                </div>
                <div className="team-card-inner team-c-4 text-white hover:text-black">
                    <div className="team-card-front">
                        <img src={image} alt="Logo" />
                    </div>
                    <div className="team-card-back ">
                        <div className="team-card-text">8+</div>
                        <div className="team-card-content">Year's of Experience</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;