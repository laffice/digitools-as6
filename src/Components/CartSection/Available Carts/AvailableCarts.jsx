import React from 'react';
import Carts from '../Carts/Carts';


const AvailableCarts = ({cartsData, selectedCarts, setSelectedCarts}) => {
    return (
        <div>
            <Carts setSelectedCarts={setSelectedCarts} selectedCarts={selectedCarts} cartsData={cartsData}/>
        </div>
    );
};

export default AvailableCarts;