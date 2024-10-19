import React from 'react';

// components
import Navbar from "../Shared/Navbar.jsx";
import Header from "../Shared/Header.jsx";
import Footer from "../Shared/Footer.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import OfficeLocation from "../Components/Contact/OfficeLocation.jsx";
import MobileNavbar from "../Shared/MobileNavbar.jsx";

const ContactPage = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar active={4}/>
            <MobileNavbar active={4}/>
            <Header title='Contact Us' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, maiores esse temporibus actium quas soluta quis sed rerum.'/>
            <Contact/>
            <OfficeLocation/>
            <Footer/>
        </div>
    );
};

export default ContactPage;