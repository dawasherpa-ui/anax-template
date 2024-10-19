import React, {useRef} from 'react';

// swiper js
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Keyboard, Navigation} from "swiper/modules";

// breakpoint
import TeamSliderBreakpoint from "../../Utils/TeamSliderBreakpoint.js";


// testimonial data
import {testimonialData} from "../../Utils/TestimonialData.js";


// react icons
import { FaStar, FaRegStar } from "react-icons/fa";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const swiperArrowStyles =
        "text-[30px] z-10 w-[40px] h-[40px] border-[2px] border-borderDark text-black bg-transparent hover:bg-bgDisableDark grid place-items-center duration-500 cursor-pointer";

    return (
        <section className='w-full px-12 py-[50px]'>
            <h1 className='text-[33px] md:text-[40px] leading-[45px] md:leading-[48px] font-[700] mb-[60px] text-center'>What our clients are saying</h1>

            <div style={{textAlign: "center"}} className="w-[77%] md:w-[75%] lg:w-[50%] h-full mx-auto relative">
                <Swiper
                    rewind={true}
                    keyboard={{
                        enabled: true,
                    }}
                    navigation={{
                        nextEl: ".testimonial-next-slide",
                        prevEl: ".testimonial-prev-slide",
                    }}
                    autoplay={true}
                    modules={[Autoplay, Keyboard, Navigation]}
                    className="relative group"
                >
                    {testimonialData && testimonialData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full rounded-[12px] cursor-pointer'>

                                <div className='flex items-center gap-[6px] justify-center mb-[20px]'>
                                    <FaStar className='text-primary'/>
                                    <FaStar className='text-primary'/>
                                    <FaStar className='text-primary'/>
                                    <FaRegStar className='text-primary'/>
                                    <FaRegStar className='text-primary'/>
                                </div>

                                <p className='text-[16px] font-[400] text-[#585858] text-left'>{testimonial.text}</p>

                                <div className='flex items-center gap-[15px] justify-center mt-[40px]'>
                                    <img src={testimonial.image} alt={testimonial.title}
                                         className='w-[50px] h-[50px] object-cover rounded-full'/>
                                    <h1 className='text-[20px] font-[600] text-[#444444]'>{testimonial.name}</h1>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {testimonialData && (
                    <div className='flex items-center gap-[20px]'>
                        <div ref={prevRef} className={`${swiperArrowStyles} testimonial-prev-slide absolute top-[110px] md:left-[-100px] left-[-60px] hover:bg-primary hover:border-primary hover:text-white`}>
                            <BsChevronLeft size={24}/>
                        </div>
                        <div ref={nextRef} className={`${swiperArrowStyles} testimonial-next-slide absolute md:right-[-100px] right-[-60px] top-[110px] hover:bg-primary hover:border-primary hover:text-white`}>
                            <BsChevronRight size={24}/>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
