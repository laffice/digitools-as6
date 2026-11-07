import React from 'react';

import { IoIosCheckmark } from 'react-icons/io';
const Carts = ({cartsData, selectedCarts, setSelectedCarts}) => {
  const handleSelectedCarts = () =>{
console.log(setSelectedCarts)
  };
    return (
        <div className='w-9/12 mx-auto grid grid-cols-3 gap-10 justify-center items-center pt-28'>

                {
                cartsData.map((cart =>{
                    return(
        <div key={cart.id} className='text-left space-y-5 border border-gray-200 shadow-2xl p-7 rounded-3xl h-full'>
            <div className='flex  justify-between'>
                <img className='pt-4' src={cart.icon} alt="" />
                <p className={`btn ${cart.tagType === "popular" ? " bg-linear-to-r from-[#aca1ff] to-[#dbadff] text-violet-600" : ""} ${cart.tagType === "new"? "bg-[#c9f1da] text-[#0A883E]" : ""} ${cart.tagType === "best-seller" ? "bg-amber-100 text-[#BB4D00]" : ""}hover:cursor-auto rounded-4xl`}>{cart.tag}</p>
            </div>
            <h3 className='text-2xl font-semibold'> {cart.name}</h3>
            <p className='text-sm text-gray-400'>
            {cart.description}            
            </p>
            <p><span className='text-2xl font-semibold'>${cart.price}</span>/{cart.period}</p>
           <div>
            {
                cart.features.map((feature, index)  =>{
                    return (
                        <p key={index} className='text-sm text-gray-400 flex items-center'><IoIosCheckmark className='text-green-300 text-3xl'></IoIosCheckmark> {feature}</p>
                    )
                })
            }
           </div>
             <button onClick={handleSelectedCarts} className="w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">
            Products
          </button>
         
          </div>
                    )
                }))
                }

          
          
        </div>
    );
};

export default Carts;