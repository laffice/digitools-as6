import React from 'react';
import PricingCart from './Pricing cart/PricingCart';

const Pricing = () => {
    return (
        <div className='text-center '>
           <h1 className='text-5xl font-bold py-5'>
            Simple, Transparent Pricing
           </h1>
           <p className='text-gray-400'>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
           </p>
           <PricingCart></PricingCart>
        </div>
    );
};

export default Pricing;