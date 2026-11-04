import React from 'react';
import logo from '../../../assets/writing_2327400 1.png'
const Carts = () => {
    return (
        <div className='w-9/12 mx-auto grid grid-cols-3 gap-10 justify-center items-center pt-28'>
          <div className='text-left space-y-5 border border-gray-200 shadow-2xl p-7 rounded-3xl h-full'>
            <div className='flex  justify-between'>
                <img className='pt-4' src={logo} alt="" />
                <p className='bg-amber-200 btn hover:cursor-auto rounded-4xl'>best sellere</p>
            </div>
            <h3 className='text-2xl font-semibold'> AI Writing Pro</h3>
            <p>
                Generate high-quality content, blogs, and <br /> marketing copy in seconds with advanced AI.
            </p>
            <p><span className='text-xl font-semibold'>$29</span>/Mo</p>
            <p>Unlimited AI generations</p>
            <p>Unlimited AI generations</p>
            <p>Unlimited AI generations</p>
            <p>Unlimited AI generations</p>
            <p>Unlimited AI generations</p>
             <button className="w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">
            Products
          </button>
         
          </div>
          
        </div>
    );
};

export default Carts;