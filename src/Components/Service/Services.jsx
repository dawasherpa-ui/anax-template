import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SliderBreakPoint from "../../Utils/SliderBreakPoint.js";
import {Autoplay, Keyboard, Navigation} from "swiper/modules";
import {serviceData} from "../../Utils/ServiceData.js";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {AllServicesData} from "../../Utils/AllServicesData.js";

const Service = () => {
    return (
        <section className='w-full py-[60px]'>
            {/* slider */}
            <div style={{textAlign: "center"}} className="w-full px-6 md:px-12  h-full">
                <Swiper
                    rewind={true}
                    breakpoints={SliderBreakPoint}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={true}
                    modules={[Autoplay, Keyboard, Navigation]}
                    className="relative group"
                >
                    {serviceData && serviceData.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full rounded-[12px] bg-[#FBFBFB] cursor-pointer'>
                                <img src={service.image} alt={service.title}
                                     className='w-full h-[250px] object-cover rounded-t-[12px]'/>
                                <div className='p-[15px]'>
                                    <h1 className='text-[24px] leading-[36px] font-[600] mb-[10px] text-left'>{service.title}</h1>
                                    <p className='text-[16px] font-[400] leading-[24px] text-[#585858] text-left'>{service.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] border-t border-[#AEAEAE] mt-[50px] pt-[50px] px-6 md:px-12 '>
                {
                    AllServicesData && AllServicesData?.map((service, index)=> (
                        <div className='border border-[#AEAEAE] rounded-[8px] p-[15px]'>
                            <h1 className='text-[24px] leading-[36px] text-[#444444] font-[700]'>{service?.title}</h1>
                            <p className='text-[16px] font-[400] leading-[24px] text-[#585858] mt-[15px]'>{service?.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Service;
