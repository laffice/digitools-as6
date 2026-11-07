import React, { use } from 'react';
import Carts from './Carts/Carts';

const CartSection = ({cartsData}) => {
//    console.log(cartsData);
    
    return (
        <div className='my-30 text-center'>
            
        <div className='space-y-7'>
            <h2 className='text-6xl font-semibold'>Premium Digital Tools</h2>
            <p className='text-gray-400'>
                Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
            </p>
           <div className='flex- items-center'>
             <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">
            Products
          </button>
          <button className='btn'>Carts(2)</button>
           </div>
          
        </div>

            <Carts cartsData={cartsData} ></Carts>
        </div>
    );
};

export default CartSection;