import React from 'react';
import {styles} from "../../Utils/Styles.js";

const Contact = () => {
    return (
        <section className='w-full py-[50px] flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start'>
            <div className='w-full lg:w-[50%] bg-[#FBFBFB] lg:pr-[50px] py-[70px]'>
                <h1 className='text-[40px] font-[700] leading-[48px] text-center mb-[40px]'>Get in Touch</h1>
                <form className='flex flex-col gap-[20px] w-[90%] lg:w-[80%] mx-auto'>
                    <input type='text' placeholder='Full Name'
                           className='py-3 px-[10px] border bg-transparent focus:border-primary transition-all duration-500  border-[#585858] rounded-[8px] outline-none'/>
                    <input type='phone' placeholder='Phone'
                           className='py-3 px-[10px] border  bg-transparent focus:border-primary transition-all duration-500 border-[#585858] rounded-[8px] outline-none'/>
                    <input type='email' placeholder='Email'
                           className='py-3 px-[10px] border bg-transparent focus:border-primary transition-all duration-500  border-[#585858] rounded-[8px] outline-none'/>
                    <textarea placeholder='Write your message....'
                              className='py-3 px-[10px] border bg-transparent focus:border-primary transition-all duration-500  min-h-[200px] border-[#585858] rounded-[8px] outline-none'></textarea>

                    <button className={styles.buttonPrimary}>Submit</button>
                </form>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360977185!2d-74.30933341658171!3d40.69753995848721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1720895476683!5m2!1sen!2sbd"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className='w-full h-[500px] lg:h-auto lg:w-[50%]'></iframe>
        </section>
    );
};

export default Contact;
