import React from 'react';

const Heading = ({title,highlight, des}) => {
    const parts = title.split(highlight);
    return (
        <div className='my-10'>
            <div className='space-y-2'>
                <h1 className='text-3xl font-bold'>
                    {parts[0]}
                    <span className='cpr'>{highlight}</span>
                    {parts[1]}

                </h1>
                <p className='text-sm text-gray-600'>{des}</p>
            </div>
        </div>
    );
};

export default Heading;