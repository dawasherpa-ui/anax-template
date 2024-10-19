import React from 'react';
import {styles} from "../../Utils/Styles.js";

const NewsLetter = () => {
    return (
        <section className='w-full py-[50px] px-6 lg:px-12 mt-12 bg-secondary flex flex-col lg:flex-row items-center gap-[50px] justify-center'>
            <img src='/aboutus-2.png' alt='image' className='w-full h-[400px] lg:h-auto object-cover lg:w-[340px] rounded-[12px]'/>

            <div>
                <h1 className='text-[34px] md:text-[40px] font-[700] leading-[45px] md:leading-[60px]'>Subscribe Our Newsletter</h1>
                <p className='text-[16px] font-[400] leading-[24px] text-[#686868] my-[20px]'>Sign up to receive the latest updates on all our Services</p>

                <div className='relative mt-[30px]'>
                    <input type='email' placeholder='Enter your email' className='w-full py-[10px] px-[12px] bg-transparent border border-[#9A9A9A] rounded-[8px]'/>
                    <button className={`${styles.buttonPrimary} absolute top-0 right-0 rounded-l-none`}>Subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
