import React from 'react';

const Showcase = () => {
    return (
        <section className='w-full px-6 md:px-12 py-[60px] my-[40px] bg-secondary text-center'>
            <h1 className='text-[33px] md:text-[40px] mb-3 md:mb-0 leading-[45px] md:leading-[60px] font-[700]'>Creative Example</h1>
            <p className='text-[16px] font-[400] leading-[24px] w-full md:w-[60%] mx-auto text-[#585858]'>Our team of experienced professionals is committed to delivering top-notch media solutions that leave a lasting impact on your target audience.</p>
            <img src='/banner.png' alt='showcase/banner' className='w-[1200px] mx-auto mt-[40px]'/>
        </section>
    );
};

export default Showcase;
