import React from 'react';

const Header = ({title, description}) => {
    return (
        <div className='w-full bg-secondary py-[30px] flex items-center justify-center flex-col gap-[10px]'>
            <h1 className='text-[40px] lg:text-[48px] font-[700] leading-[57px]'>{title}</h1>
            <p className='text-[14px] lg:text-[16px] leading-[24px] font-[400] text-[#585858] w-[80%] lg:w-[40%] text-center mx-auto'>{description}</p>
        </div>
    );
};

export default Header;
