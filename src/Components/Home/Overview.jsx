import React from 'react';

const Overview = () => {
    return (
        <section className='w-full py-[80px] px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]'>
            <div className='border border-secondary p-[20px] rounded-[8px] overviewCard'>
                <div className='w-[70px] h-[70px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src='/Icons/stategyIcon.png' alt='icon' className='w-[22px] h-[22px]'/>
                </div>
                <h1 className='text-[24px] font-[600] leading-[36px] mt-[10px] mb-[5px]'>Strategy</h1>
                <p className='text-[16px] font-[400] leading-[24px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </div>
            <div className='border border-secondary p-[20px] rounded-[8px] overviewCard'>
                <div className='w-[70px] h-[70px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src='/Icons/organization.png' alt='icon' className='w-[22px] h-[22px]'/>
                </div>
                <h1 className='text-[24px] font-[600] leading-[36px] mt-[10px] mb-[5px]'>Organization</h1>
                <p className='text-[16px] font-[400] leading-[24px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </div>
            <div className='border border-secondary p-[20px] rounded-[8px] overviewCard'>
                <div className='w-[70px] h-[70px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src='/Icons/activity.png' alt='icon' className='w-[22px] h-[22px]'/>
                </div>
                <h1 className='text-[24px] font-[600] leading-[36px] nt-[10px] mb-[5px]'>Management</h1>
                <p className='text-[16px] font-[400] leading-[24px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </div>
            <div className='border border-secondary p-[20px] rounded-[8px] overviewCard'>
                <div className='w-[70px] h-[70px] rounded-full bg-secondary flex items-center justify-center'>
                    <img src='/Icons/supportIcon.png' alt='icon' className='w-[22px] h-[22px]'/>
                </div>
                <h1 className='text-[24px] font-[600] leading-[36px] mt-[10px] mb-[5px]'>Support</h1>
                <p className='text-[16px] font-[400] leading-[24px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
            </div>
        </section>
    );
};

export default Overview;
