import React from 'react';
import {styles} from "../../Utils/Styles.js";

const Aboutus = () => {
    return (
        <section className='md:py-[40px] w-full grid-cols-1 grid lg:grid-cols-2'>
            <img src='/aboutus-1.png' alt='image' className='w-full mx-auto'/>
            <article className='bg-[#FBFBFB] p-[30px] md:p-[60px] flex flex-col justify-center'>
                <h1 className='text-[40px] font-[700] leading-[60px]'>About Us</h1>
                <p className='text-[16px] font-[400] leading-[24px] text-[#585858] mt-[5px] mb-[30px] w-[80%]'>
                    Our team of experienced professionals is committed to delivering top-notch media solutions that leave a lasting impact on your target audience.
                </p>

                <div className='flex flex-col gap-[15px]'>
                    <div className='flex items-center gap-[8px]'>
                        <img src='/Icons/check-circle.png' alt='icon' className='w-[20px]'/>
                        <h3 className='text-[20px] font-[600]'>Strategic Video Production</h3>
                    </div>
                    <div className='flex items-center gap-[8px]'>
                        <img src='/Icons/check-circle.png' alt='icon' className='w-[20px]'/>
                        <h3 className='text-[20px] font-[600]'>Creative Graphic Design</h3>
                    </div>
                    <div className='flex items-center gap-[8px]'>
                        <img src='/Icons/check-circle.png' alt='icon' className='w-[20px]'/>
                        <h3 className='text-[20px] font-[600]'>Social Media Management</h3>
                    </div>
                    <div className='flex items-center gap-[8px]'>
                        <img src='/Icons/check-circle.png' alt='icon' className='w-[20px]'/>
                        <h3 className='text-[20px] font-[600]'>Branding and Identity</h3>
                    </div>
                </div>

                <button className={`${styles.buttonPrimary} mt-[30px] w-fit`}>Learn More</button>
            </article>
        </section>
    );
};

export default Aboutus;
