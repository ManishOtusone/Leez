import React, { useState, useEffect } from 'react';
import BgImage from '../../assets/Images/Banner.png';
import { FaSearch, FaMicrophone, FaMapMarkerAlt, FaPlusCircle, FaCrosshairs } from 'react-icons/fa';

const Banner = () => {
  const placeholders = [
    "Search by Location (e.g. Noida 77)",
    "Flat for Rent in Delhi",
    "Luxury Villas in Gurgaon",
    "Commercial Space in Mumbai",
    "Plots for Sale in Bangalore"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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


      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 z-10 w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] bg-white shadow-lg rounded-lg">
        <div className="flex flex-wrap justify-between px-4 sm:px-6 py-3 text-gray-700 font-medium gap-2">
          {["Rent", "New Launch", "Commercial", "Projects"].map((item, index) => (
            <button key={index} className="hover:text-blue-600 transition text-sm sm:text-base">
              {item}
            </button>
          ))}
          <button className="flex items-center gap-2 text-green-600 font-semibold hover:underline text-sm sm:text-base">
            <FaPlusCircle /> Post Property
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 px-4 sm:px-6 py-4">
          <select className="rounded px-3 py-2 text-gray-600 w-full md:w-[20%] focus:outline-none text-sm">
            <option>All Residential</option>
            <option>Flat</option>
            <option>Villa</option>
            <option>Plot</option>
          </select>

          <div className="flex items-center rounded px-3 py-2 flex-grow border border-gray-300 w-full md:w-[55%]">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder={placeholders[currentIndex]}
              className="flex-grow outline-none text-gray-700 text-sm"
            />
            <FaCrosshairs
              className="text-gray-500 ml-2 cursor-pointer hover:text-blue-600"
              title="Near Me"
            />
            <FaMicrophone
              className="text-gray-500 ml-2 cursor-pointer hover:text-red-500"
              title="Voice Search"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center gap-2 w-full md:w-auto justify-center">
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
