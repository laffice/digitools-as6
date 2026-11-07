import React from 'react';
import user from '../../assets/user.png';
import pcg from '../../assets/package.png';
import rock from '../../assets/rocket.png'
const GetStarted = () => {
    return (
        <div className='bg-base-200 my-30 py-20 text-center'>
            <div className='space-y-6'>
                <h1 className='text-5xl font-semibold'> Get Started in 2 Steps</h1>
                <p className='text-gray-500'>
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>
           <div className='my-20  max-w-8/12 mx-auto grid grid-cols-3 gap-5'>
             <div >
                <div className='border border-gray-200 rounded-2xl px-5 py-20 relative bg-white space-y-9 shadow-2xl'>
                    <p className='absolute top-5 right-5 bg-violet-800 text-white rounded-b-full p-2'>01</p>
                    <div className='flex items-center justify-center '>
                        <img className='bg-violet-200 p-3 rounded-full' src={user} alt="" />
                    </div>
                    <h3 className='text-3xl font-bold'>
                        Create Account 
                    </h3>
                    <p className='text-gray-500'> 
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>
            </div>
             <div >
                <div className='border border-gray-200 rounded-2xl px-5 py-20 relative bg-white space-y-9 shadow-2xl'>
                    <p className='absolute top-5 right-5 bg-violet-800 text-white rounded-b-full p-2'>02</p>
                    <div className='flex items-center justify-center '>
                        <img className='bg-violet-200 p-3 rounded-full' src={pcg} alt="" />
                    </div>
                    <h3 className='text-3xl font-bold'>
                        Choose Products 
                    </h3>
                    <p className='text-gray-500'> 
                       Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>
            </div>
             <div >
                <div className='border border-gray-200 rounded-2xl px-5 py-20 relative bg-white space-y-9 shadow-2xl'>
                    <p className='absolute top-5 right-5 bg-violet-800 text-white rounded-b-full p-2'>03</p>
                    <div className='flex items-center justify-center '>
                        <img className='bg-violet-200 p-3 rounded-full' src={rock} alt="" />
                    </div>
                    <h3 className='text-3xl font-bold'>
                        Start Creating 
                    </h3>
                    <p className='text-gray-500'> 
                        Download and start using your premium tools immediately.
                    </p>
                </div>
            </div>
           </div>
        </div>  
    );
};

export default GetStarted;