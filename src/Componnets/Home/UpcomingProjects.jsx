import React, { useState, useEffect } from "react";
import UpcomingBg from "../../assets/UpcomingBg.png";
import UpcomingBg1 from "../../assets/UpcomingBg1.jpg";

const projects = [
    {
        id: 1,
        name: "Godrej Majesty",
        location: "Sector-12, Greater Noida West",
        type: "3, 4 BHK Apartment",
        price: "₹ 3.26 - 4.94 Cr",
        image: UpcomingBg,
        developer: "Godrej Properties",
    },
    {
        id: 2,
        name: "Brigade Panorama",
        location: "Whitefield, Bangalore",
        type: "2, 3 BHK Apartment",
        price: "₹ 1.2 - 2.3 Cr",
        image: UpcomingBg1,
        developer: "Brigade Group",
    }
];

const UpcomingProjects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const isMobile = window.innerWidth < 768; // detect mobile

        if (!isMobile && isHovered) return; // pause only on desktop hover

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const project = projects[currentSlide];

    return (
        <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-12 md:mt-15">
            {/* Centered heading */}
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold">Upcoming Projects</h3>
                <p className="text-gray-600 mt-2">
                    Visit these projects and get early bird benefits
                </p>
            </div>

            {/* Slider */}
            <div
                className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-md relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`w-full h-[300px] sm:h-[400px] md:h-[464px] bg-cover bg-center relative transition-all duration-700 transform ${isHovered ? "scale-105" : "scale-100"}`}
                    style={{ backgroundImage: `url(${project.image})` }}
                >
                    {/* Overlay info */}
                    <div className="absolute inset-0 bg-black/25 flex flex-col sm:flex-row justify-between p-4 sm:p-6 text-white">
                        <div className="mb-4 sm:mb-0">
                            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">{project.name}</h4>
                            <p className="mt-1 font-semibold text-sm sm:text-base">{project.location}</p>
                        </div>
                        <div className="text-left font-semibold">
                            <h3 className="text-lg sm:text-xl md:text-xl">{project.type}</h3>
                            <p className="mt-1 text-sm sm:text-base">{project.price}</p>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="absolute bottom-0 left-0 w-full bg-[#010C1F] flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 text-white gap-2 sm:gap-0">
                        <div>
                            <h3 className="text-sm sm:text-md font-semibold text-gray-400">
                                Interested in this project by
                            </h3>
                            <p className="text-sm sm:text-base">{project.developer}</p>
                        </div>
                        <button className="mt-2 sm:mt-0 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
                            View Number
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingProjects;
