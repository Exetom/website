import React from 'react'
import { datalist } from "./data";
import { Text } from "./utils";
import BannerText from '../../bannerText/bannerText';

const Reviews = () => {
    return (
        <div className='w-full'>

            <BannerText title="Some" subTitle="Review" />
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