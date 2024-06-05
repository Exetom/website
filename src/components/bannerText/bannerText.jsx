import React from 'react'

const BannerText = ({ title, subTitle }) => {
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="300" className='section-title'>
            {title} {subTitle}
        </div>
    )
}

export default BannerText