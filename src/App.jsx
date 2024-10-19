import React, {useState} from "react";

// react router dom
import {Route, Routes} from "react-router-dom";

// components
import HomePage from "./Pages/HomePage.jsx"
import AboutusPage from "./Pages/AboutusPage.jsx"
import ServicePage from "./Pages/ServicePage.jsx"
import ContactPage from "./Pages/ContactPage.jsx"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutusPage/>}/>
                <Route path="/services" element={<ServicePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </>
    );
};

export default App;