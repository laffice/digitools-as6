import React from 'react';
import Carts from '../Carts/Carts';


const AvailableCarts = ({cartsData}) => {
    return (
        <div>
            <Carts cartsData={cartsData}/>
        </div>
    );
};

export default AvailableCarts;