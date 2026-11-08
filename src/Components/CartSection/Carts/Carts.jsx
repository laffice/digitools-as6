

import { IoIosCheckmark } from 'react-icons/io';
import SingleCarts from './single Cart/SingleCarts';

const Carts = ({cartsData, selectedCarts, setSelectedCarts}) => {

//  console.log(cartBtn)
    return (
        <div className='w-9/12 mx-auto grid grid-cols-3 gap-10 justify-center items-center pt-28'>

                {
                cartsData.map((cart, index)=>{
                    
                    return(
        <SingleCarts key={index} cartsData={cartsData} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}cart={cart} ></SingleCarts>
                    )
                })
                }

          
          
        </div>
    );
};

export default Carts;