import React from 'react';


const SelectedCarts = ({selectedCarts, setSelectedCarts}) => {
    
    return (
        <div className='my-10 '>
            {selectedCarts.length > 0 ? <div className='w-10/12 mx-auto border border-gray-300 rounded-3xl p-10 space-y-9'>
                <h1 className='text-2xl font-bold '>Your Cart:</h1>
                    <div className='space-y-9'>
                        {
                            selectedCarts.map((selectedCart=>{
                                console.log(selectedCart)
                                return(
                                   <div key={selectedCart.id} className='flex justify-between items-center rounded-3xl shadow-2xl bg-base-200 p-5 border border-gray-200    '>
                                    <div className='flex gap-4 items-center'>
                                        <div><img src={selectedCart.icon} alt="" /></div>
                                    <div>
                                        <h3>
                                            {selectedCart.name}
                                        </h3>
                                        <p>
                                            ${selectedCart.price}
                                        </p>
                                    </div>
                                    </div>
                                    <button className='btn text-red-500 border-none rounded-full'>Remove</button>
                                    
                                   </div>
                                )
                            }))
                        }
                        <div className=' flex justify-between items-center text-2xl'>
                              <p className='text-gray-500'>Total: </p>
                             <p className='font-bold'>$ {selectedCarts.reduce((sum, selectedCart) => sum + selectedCart.price, 0)}</p>
                        </div>
                        <button className="w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white" >Proceed to Checkout</button>


                    </div>
            </div> : <div className='w-10/12 mx-auto bg-base-300 border border-gray-300 rounded-3xl p-10 py-40 text-center'>
                <h1 className='text-5xl font-bold'>
                    Please choose a plane
                    </h1> 
                    <p className='text-xl text-gray-400 mt-10'>
                        You have not selected any plane yet. <br /> Please select a plan and proceed to checkout
                    </p>
                    </div> }
            
        </div>
    );
};

export default SelectedCarts;