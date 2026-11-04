import React from 'react';

const Rating = () => {
    return (
        <div className='my-20 h-75 bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-around items-center text-white'> 
            <div className='text-center space-y-5'>
                <h1 className='text-7xl font-semibold'>500K+</h1>
                <p className='text-3xl '>
                    Active Users
                </p>
            </div>
            <div className='text-center space-y-5'>
                <h1 className='text-7xl font-semibold'>
                    200+
                </h1>
                <p className='text-3xl '>
                    Premium Tools 
                </p>
            </div>
            <div className='text-center space-y-5'>
                <h1 className='text-7xl font-semibold'>
                    4.9  Rating
                </h1>

                <p className='text-3xl '>
                        Rating 
                </p>
            </div>
        </div>
    );
};

export default Rating;