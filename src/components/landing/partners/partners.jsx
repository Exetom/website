import React, { useEffect, useState } from 'react';
import MAP from "../../../assets/map.png";

const Partners = () => {
    const [shaded, setShaded] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollColor);
    }, []);

    const scrollColor = () => {
        const heroSection = document.getElementById('hero').getBoundingClientRect().height - 300;
        const partnersSection = (document.getElementById('partners').getBoundingClientRect().height * 2) - 200;
        const offset = window.pageYOffset;
        console.log(heroSection, partnersSection, offset);
        if (offset >= heroSection && offset < partnersSection) {
            setShaded(true);
        } else {
            setShaded(false);
        }
    }

    return (
        <div className={`${shaded ? 'bg-[#222831] ' : ''}w-full h-screen background-animation`} id='partners'>
            <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className='text-[#FFA12B] font-bold font-2xl tracking-widest'>We are Exetom</div>
                    </div>
                    <div>
                        <img src={MAP} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners