import React from 'react';

// utils
import {styles} from "../../Utils/Styles.js";

// react icons
import { GoArrowRight } from "react-icons/go";

const Hero = () => {

    const containerStyle = {
        backgroundImage: 'url(/heroImage.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    };

    return (
        <main className='w-full min-h-[90vh] flex flex-col items-center justify-center' style={containerStyle}>
            <div className='w-full px-6 lg:w-[80%] mx-auto text-center'>
                <h1 className='text-white text-[45px] lg:text-[58px] font-[700] leading-[50px] lg:leading-[75px]'>
                    Transforming the region’s <span className='text-primary'>media</span> landscape
                </h1>
                <p className='text-white text-[16px] font-[400] leading-[24px] mt-[20px] w-full md:w-[80%] mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores esse temporibus actium quas
                    soluta quis sed rerum.
                </p>

                <div className='flex items-center flex-col md:flex-row gap-[30px] justify-center mt-[30px]'>
                    <button className={`${styles.buttonPrimary}`}>Contact Us</button>
                    <button className={`flex items-center gap-[5px] text-white border-b hover:text-primary transition-all duration-500 hover:border-primary group`}>Know More <GoArrowRight
                        className='text-[1.2rem] group-hover:ml-[8px] transition-all duration-500 group-hover:text-primary'/></button>
                </div>
            </div>
        </main>
    );
};

export default Hero;