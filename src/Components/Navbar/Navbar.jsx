import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({selectedCarts}) => {
    return (

        <div className="navbar w-full lg:w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-lg font-semibold shadow">
         <li><a href="Products">Products</a></li>
                  <li><a href="Features">Features</a></li>
                  <li><a href="Pricing">Pricing</a></li>
                 <li><a href="Testimonials">Testimonials</a></li>
                 <li><a href="FAQ">FAQ</a></li>
                 
      </ul>
    </div>
    <h1 className='inline-block pb-2 text-5xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
     <ul className='flex gap-5 text-lg font-semibold'>
                  <li><a href="Products">Products</a></li>
                  <li><a href="Features">Features</a></li>
                  <li><a href="Pricing">Pricing</a></li>
                 <li><a href="Testimonials">Testimonials</a></li>
                 <li><a href="FAQ">FAQ</a></li>
                 <li><a href=""></a></li>
                 <li><a href=""></a></li>
               </ul>
  </div>
  <div className="navbar-end">
     <div className='flex items-center gap-5  font-semibold'>
              <div className='hidden md:block text-2xl relative'>
                  <FiShoppingCart></FiShoppingCart> {selectedCarts.length > 0 ? <span className='absolute -top-2 -right-2 text-xs w-4 h-4 bg-red-400 flex items-center justify-center text-white  rounded-full  '> {selectedCarts.length} </span> : null} 
               </div>
               <div>
                   <h3 className='btn hidden md:flex  items-center border-none bg-white'>Login</h3>
               </div>
               <div>
                <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white'>Get Started</button>
              </div>
           </div>
  </div>
</div>




       
    );
};

export default Navbar;