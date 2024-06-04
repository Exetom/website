import React from 'react'

const BannerText = ({ title, subTitle }) => {
    return (
        <div className='general-section-title'>
            <span className='general-section-title-text'>
                <span className='general-section-title-border'>
                    {title} <span className='border-bar'></span>
                </span>
                {subTitle}
            </span>
        </div>
    )
}

export default BannerText