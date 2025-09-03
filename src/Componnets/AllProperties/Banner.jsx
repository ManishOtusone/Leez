import React, { useState, useEffect } from 'react';
import BgImage from '../../assets/Images/Banner.png';
import { FaSearch, FaMicrophone, FaMapMarkerAlt, FaPlusCircle, FaCrosshairs } from 'react-icons/fa';

const Banner = () => {
    
    return (
        <div className="w-full relative overflow-visible group">
            <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] relative overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${BgImage})` }}
                >
                    <div className="absolute inset-0 bg-black/30 bg-opacity-50"></div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
