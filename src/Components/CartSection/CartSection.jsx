import React, { use, useState } from 'react';
import AvailableCarts from './Available Carts/AvailableCarts';
import SelectedCarts from './Selected Carts/SelectedCarts';

const CartSection = ({cartsData}) => {
    // console.log(cartsData.length)
const [cartBtn, setCartBtn ] = useState("Products");
    
    return (
        <div className='my-30 text-center'>
            
        <div className='space-y-7'>
            <h2 className='text-6xl font-semibold'>Premium Digital Tools</h2>
            <p className='text-gray-400'>
                Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
            </p>
           <div>
             <button onClick={()=>setCartBtn("Products")} className={`btn border-none ${cartBtn === "Products"? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white": "bg-white text-black"} rounded-4xl -pr-7`}>
            Products
          </button>
          <button onClick={()=>setCartBtn("Cart")} className={`btn border-none ${cartBtn === "Cart"? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white": "bg-white text-black"} rounded-4xl `}>Carts(2)</button>
           </div>
          
        </div>
        {cartBtn === "Products" ? <AvailableCarts cartsData={cartsData} /> : <SelectedCarts/>}
            {/* <Carts cartsData={cartsData} ></Carts> */}
        </div>
    );
};

export default CartSection;