import React, {useRef} from 'react';

// swiper js
import {Swiper, SwiperSlide} from "swiper/react";
import SliderBreakPoint from "../../Utils/SliderBreakPoint.js";
import {Autoplay, Keyboard, Navigation} from "swiper/modules";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

// data
import {officeLocationData} from "../../Utils/OfficeLocationData.js";

const OfficeLocation = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const swiperArrowStyles =
        "text-[30px] z-10 w-[40px] h-[40px] border-[2px] border-borderDark text-black bg-transparent hover:bg-bgDisableDark grid place-items-center duration-500 cursor-pointer";

    return (
        <section className='w-full px-6 lg:px-12 py-[40px] relative'>
            <h1 className='text-[25px] md:text-[40px] font-[700] leading-[60px] mb-[40px]'>Visit Our Office</h1>

            <div style={{textAlign: "center"}} className="w-full h-full ">
                <Swiper
                    rewind={true}
                    breakpoints={SliderBreakPoint}
                    keyboard={{
                        enabled: true,
                    }}
                    navigation={{
                        nextEl: ".service-next-slide",
                        prevEl: ".service-prev-slide",
                    }}
                    autoplay={true}
                    modules={[Autoplay, Keyboard, Navigation]}
                    className="relative group"
                >
                    {officeLocationData && officeLocationData.map((location, index) => (
                        <SwiperSlide key={index}>
                            <div className=' bg-white officeCard w-full rounded-[12px] cursor-pointer mb-[20px]'>
                                <img src={location.image} alt={location.name}
                                     className='w-full h-[250px] object-cover rounded-t-[12px]'/>
                                <div className='p-[20px]'>
                                    <h1 className='text-[24px] leading-[36px] font-[600] mb-[10px] text-left'>{location.name}</h1>
                                    <p className='text-[16px] font-[400] leading-[24px] text-[#585858] text-left'>{location.location}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {officeLocationData && (
                    <div className='flex items-center gap-[20px] absolute top-[55px] right-6 lg:right-12'>
                        <div ref={prevRef}
                             className={`${swiperArrowStyles} service-prev-slide hover:bg-primary hover:border-primary hover:text-white`}>
                            <BsChevronLeft size={24}/>
                        </div>
                        <div ref={nextRef}
                             className={`${swiperArrowStyles} service-next-slide hover:bg-primary hover:border-primary hover:text-white`}>
                            <BsChevronRight size={24}/>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default OfficeLocation;
