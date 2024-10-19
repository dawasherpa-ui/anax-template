import React, { useRef } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Keyboard, Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// team data
import {TeamData} from "../../Utils/TeamData.js";

// react icons
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaFacebookF ,FaTwitter,FaDribbble} from "react-icons/fa";

// slider breakpoint
import TeamSliderBreakpoint from "../../Utils/TeamSliderBreakpoint.js";

const Team = () => {
    const prevTeamRef = useRef(null);
    const nextTeamRef = useRef(null);

    const swiperArrowStyles =
        "text-[30px] z-10 w-[40px] h-[40px] border-[2px] border-borderDark text-black bg-transparent hover:bg-bgDisableDark grid place-items-center duration-500 cursor-pointer";

    return (
        <section className='w-full px-6 md:px-12 py-[40px] relative'>
            <h1 className='text-[25px] md:text-[40px] font-[700] leading-[60px] mb-[40px]'>Our Team</h1>

            <div style={{ textAlign: "center" }} className="w-full h-full">
                <Swiper
                    rewind={true}
                    breakpoints={TeamSliderBreakpoint}
                    keyboard={{
                        enabled: true,
                    }}
                    navigation={{
                        nextEl: ".team-next-slide",
                        prevEl: ".team-prev-slide",
                    }}
                    autoplay={true}
                    modules={[Autoplay, Keyboard, Navigation]}
                    className="relative group"
                >
                    {TeamData && TeamData.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full rounded-[12px] cursor-pointer'>
                                <img src={member.image} alt={member.title} className='w-full h-[250px] object-cover rounded-[12px]'/>
                                <div className='p-[15px]'>
                                    <h1 className='text-[24px] leading-[36px] font-[600] text-left'>{member.name}</h1>
                                    <p className='text-[16px] font-[400] text-[#585858] text-left'>{member.title}</p>

                                    <div className='flex items-center gap-[10px] mt-[10px]'>
                                        <a href={member.facebook}>
                                            <FaFacebookF className='bg-[#FBFBFB] p-1.5 text-[1.7rem] rounded-full hover:bg-primary transition-all duration-500 hover:text-white'/>
                                        </a>
                                        <a href={member.twitter}>
                                            <FaTwitter className='bg-[#FBFBFB] p-1.5 text-[1.7rem] rounded-full hover:bg-primary transition-all duration-500 hover:text-white'/>
                                        </a>
                                        <a href={member.dribbble}>
                                            <FaDribbble className='bg-[#FBFBFB] p-1.5 text-[1.7rem] rounded-full hover:bg-primary transition-all duration-500 hover:text-white'/>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {TeamData && (
                    <div className='flex items-center gap-[20px] absolute top-[55px] right-6 md:right-12'>
                        <div ref={prevTeamRef} className={`${swiperArrowStyles} team-prev-slide hover:bg-primary hover:border-primary hover:text-white`}>
                            <BsChevronLeft size={24}/>
                        </div>
                        <div ref={nextTeamRef} className={`${swiperArrowStyles} team-next-slide hover:bg-primary hover:border-primary hover:text-white`}>
                            <BsChevronRight size={24}/>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Team;
