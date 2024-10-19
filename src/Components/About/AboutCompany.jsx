import React from 'react';
import {styles} from "../../Utils/Styles.js";

const AboutCompany = () => {
    return (
        <section className='w-full py-[60px] px-6 lg:px-0'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start'>
                <img src='/aboutus-1.png' alt='image' className='w-full lg:w-[700px]'/>
                <article className='lg:p-[60px] mt-10 lg:mt-0 flex flex-col justify-center'>
                    <h1 className='text-[32px] lg:text-[40px] font-[700] leading-[45px] lg:leading-[60px]'>We’re experts at helping businesses reach
                        their true potential</h1>
                    <p className='text-[16px] font-[400] leading-[24px] text-[#585858] mt-[12px] mb-[10px] w-full md:w-[80%]'>
                        We were tired of hot-shot agencies over-promising, yet under-delivering. We were tired of the
                        same old impersonal, distant relationship between agency and client. And we were tired of the
                        lack of transparency most agencies gave their clients when asked “Are our campaigns actually
                        generating tangible results?”.
                    </p>
                    <p className='text-[16px] font-[400] leading-[24px] text-[#585858] mb-[10px] w-full md:w-[80%]'>
                        Instead, we wanted to be a true growth partner for our clients. One geared towards results,
                        driven by clarity, and built upon a people-first approach that puts your business growth at the
                        top of our priority list.
                    </p>
                    <p className='text-[16px] font-[400] leading-[24px] text-[#585858] w-full md:w-[80%]'>We’re pretty good at
                        marketing, but what we’re great at is rolling up our sleeves and finding out the most effective
                        ways to help your business grow.
                    </p>
                </article>
            </div>

            <div className='flex mt-[110px] flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start'>
                <article className='bg-[#FBFBFB] p-[30px] lg:p-[60px] mx-6 flex flex-col justify-center'>
                    <h1 className='text-[32px] lg:text-[40px] font-[700] leading-[45px] lg:leading-[60px]'>Experienced experts are giving advices</h1>
                    <p className='text-[16px] font-[400] leading-[24px] text-[#585858] mt-[12px] mb-[10px] w-full md:w-[80%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>

                    <div className='flex items-center justify-between w-[75%] mt-[20px]'>
                        <div className='flex flex-col gap-[6px]'>
                            <h1 className='text-[32px] font-[700] leading-[38px]'>1.2K+</h1>
                            <p className='text-[16px] leading-[19px] font-[400] text-[#585858]'>Customer visits</p>
                        </div>
                        <div className='flex flex-col gap-[6px] border-l border-[#B8B8B8] pl-[30px]'>
                            <h1 className='text-[32px] font-[700] leading-[38px]'>99%</h1>
                            <p className='text-[16px] leading-[19px] font-[400] text-[#585858]'>Satisfaction rate</p>
                        </div>
                        <div className='flex flex-col gap-[6px] border-l border-[#B8B8B8] pl-[30px]'>
                            <h1 className='text-[32px] font-[700] leading-[38px]'>4.9</h1>
                            <p className='text-[16px] leading-[19px] font-[400] text-[#585858]'>Average ratings</p>
                        </div>
                    </div>
                </article>
                <img src='/aboutus-2.png' alt='image' className=' w-full mt-8 md:mt-0 lg:w-[700px]'/>
            </div>

            <div className='flex mt-[110px] flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start'>
                <img src='/aboutus-4.png' alt='image' className='w-full lg:w-[700px]'/>
                <article className=' lg:p-[60px] md:p-[30px] mt-8 md:mt-0 flex flex-col justify-center'>
                    <h1 className='text-[32px] lg:text-[40px] font-[700] leading-[45px] lg:leading-[60px]'>Our Mission</h1>
                    <p className='text-[16px] font-[400] leading-[24px] text-[#585858] mt-[12px] mb-[10px] w-full md:w-[80%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </article>
            </div>

            <div className='flex mt-[110px] flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start'>
                <article className='md:p-[30px] mb-8 md:mb-0 lg:p-[60px] flex flex-col justify-center'>
                    <h1 className='text-[32px] lg:text-[40px] font-[700] leading-[45px] lg:leading-[60px]'>Our Vision</h1>
                    <p className='text-[16px] font-[400] leading-[24px] text-[#585858] mt-[12px] mb-[10px] w-full md:w-[80%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </article>
                <img src='/aboutus-3.png' alt='image' className='w-[700px]'/>
            </div>
        </section>
    );
};

export default AboutCompany;
