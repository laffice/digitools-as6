import React from 'react';

const Footer = () => {
    return (
        <div className='py-20 pl-5 text-white bg-[#101727]'>
            <div className=' text-center grid sm:grid-cols-2 gap-20  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-around items-center pb-20' >
                <div className='space-y-7'>
                    <h1 className='text-4xl '>
                        DigiTools
                    </h1>
                    <p className='text-gray-400'>
                        Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                    </p>
                </div>
                <div>
                    <h3 className='text-3xl pb-4'>
                        Products
                    </h3>
                    <ul className='text-gray-400 space-y-6'>
                        <li> <a href="">Features</a></li>
                        <li> <a href="">Pricing</a></li>
                        <li> <a href="">Template</a></li>
                        <li> <a href="">Integration</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-3xl pb-4'>
                        Company
                    </h3>
                    <ul className='text-gray-400 space-y-6'>
                        <li> <a href="">About</a></li>
                        <li> <a href="">Blog</a></li>
                        <li> <a href="">Careers</a></li>
                        <li> <a href="">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-3xl pb-4'>
                        Resources
                    </h3>
                    <ul className='text-gray-400 space-y-6'>
                        <li> <a href="">Documentation</a></li>
                        <li> <a href="">Help</a> center</li>
                        <li> <a href="">Community</a> </li>
                        <li> <a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-3xl pb-4'>Social Links </h3>
                    {/* <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a> */}
                </div>
        </div>
        <hr className='w-11/12 mx-auto text-gray-500' />

        </div>
    );
};

export default Footer;