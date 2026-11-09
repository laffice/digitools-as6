import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';

const PricingCart = () => {
    return (
        
            <div className=' w-9/12 mx-auto grid grid-cols-1  sm:w-10/12 md:w-11/12   md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center pt-28 '>
                
                          <div className='text-left space-y-5 border border-gray-200 shadow-2xl p-7 rounded-3xl h-full bg-base-200'>
                            
                            <h3 className='text-2xl font-semibold'> Starter</h3>
                            <p>
                              Perfect for getting started   
                            </p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark><span className='text-3xl font-semibold'>$0</span>/Mo</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Access to 10 free tools</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Basic templates</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> 1 project per month</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Community support</p>
                           
                             <button className="w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">
                            Products
                          </button> 
                         
                          </div>
                          
                        
                
                          <div className='text-left space-y-5 border border-gray-200 shadow-2xl p-7 rounded-3xl h-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                            
                            <h3 className='text-2xl font-semibold'> Pro </h3>
                            <p>
                                Best for Performance 
                            </p>
                            <p><span className='text-3xl font-semibold'>$29</span>/Mo</p>
                            {/* <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark><span className='text-3xl font-semibold'>$0</span>/Mo</p> */}
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Access to all premium tools</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Unlimited templates</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Priority support</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Cloud sync</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Unlimited projects</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Advanced analytics</p>
                             <button className="w-full btn bg-white text-violet-900 rounded-4xl ">
                            Start pro Trial
                          </button>
                         
                          </div>
                          
                        
                
                          <div className='text-left space-y-5 border border-gray-200 shadow-2xl p-7 rounded-3xl h-full bg-base-200'>
                            
                            <h3 className='text-2xl font-semibold'> Enterprise</h3>
                            <p>
                                For teams and businesses
                            </p>
                            <p><span className='text-3xl font-semibold'>$99</span>/Mo</p>
                            {/* <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark><span className='text-3xl font-semibold'>$0</span>/Mo</p> */}
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Everything in Pro</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Team collaboration</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Custom integrations</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Dedicated support</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> SLA guarantee</p>
                            <p className='flex  items-center'><IoIosCheckmark className='text-3xl text-green-400'></IoIosCheckmark> Custom branding</p>
                             <button className="w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">
                            Products
                          </button>
                         
                          </div>
                          
                        
                </div> 
        
    );
};

export default PricingCart;