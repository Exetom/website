import React from 'react'
import { datalist } from "./data";
import { Text } from "./utils";

const Reviews = () => {
    return (
        <div className='w-full'>
            <div className='general-section-title'>
                <span className='general-section-title-text tracking-wider'>
                    <span className='general-section-title-border'>
                        Some <span className='border-bar'></span>
                    </span>
                    Review
                </span>
            </div>
            <div className='ms-reviews pt-20'>
                <div className='ms-reviews-list'>
                    {(datalist || []).map((item, i) => (
                        <Text key={i}
                            index={i}
                            text={item.reivew}
                            clinet={item.clinet}
                            via={item.via}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews