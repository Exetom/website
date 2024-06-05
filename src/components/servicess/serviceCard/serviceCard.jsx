import React from 'react'

const ServiceCard = ({ data }) => {
    return (
        <div className='flex flex-col gap-4'>
            <img src={data.image} alt={data.title} className='max-h-60' />
            <div className='text-center text-xl font-bold'>{data.title}</div>
            <hr />
            <p className='text-center'>
                {data.shortDescription}
            </p>
            <ul className='list-disc p-3 text-sm'>
                {data.description.map((d) => (
                    <li>{d}</li>
                ))}
            </ul>
        </div>
    )
}

export default ServiceCard