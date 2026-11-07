import React from 'react';

const Explore = () => {
    return (
        <div className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-center mt-30 py-20 space-y-7'>
            <h1 className='text-4xl font-bold' >
                Ready to Transform Your Workflow?
            </h1>
            <p className='text-gray-300'>
                Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
            </p>
            <div>
                <button className=" btn bg-white text-violet-900 rounded-4xl ">Explore Products</button>
                <button className="btn bg-transparent rounded-4xl border-white mx-8 text-white">
                            View Pricing
                          </button>
            </div>
            <p className='text-gray-300'>
                14-day free trial • No credit card required • Cancel anytime
            </p>

        </div>
    );
};

export default Explore;