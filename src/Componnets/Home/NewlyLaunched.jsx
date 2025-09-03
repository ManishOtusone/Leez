import React, { useState, useEffect } from "react";
import USP from "../../assets/USP.png";
import Tag2 from "../../assets/Tag2.png";
import Launch1 from "../../assets/Images/Launch1.png";
import Launch2 from "../../assets/Images/Launch2.png";
import Launch3 from "../../assets/Images/Launch3.png";

const projects = [
    {
        id: 1,
        name: "Ananda The Legacy",
        location: "Manikonda, Hyderabad",
        price: "₹1.2 - 1.84 Cr | 2, 3 BHK Apartment",
        priceIncrease: "10.9% price increase in last 3 months",
        priceIncreaseColor: "text-green-600",
        logo: Launch1,
        tag2Text: "Get preferred options @zero brokerage",
    },
    {
        id: 2,
        name: "Assotech World Avenue 07",
        location: "Hanspal, Bhubaneswar",
        price: "₹1.6 - 2.14 Cr | 3 BHK Apartment",
        priceIncrease: "19.4% price increase in last 3 months",
        priceIncreaseColor: "text-green-600",
        logo: Launch2,
        tag2Text: "Get preferred options @zero brokerage",
    },
    {
        id: 3,
        name: "Rosero Elena",
        location: "Zirakpur, Chandigarh",
        price: "₹95.01 - ₹99.01 L | 3 BHK Apartment",
        priceIncrease: "11.0% price increase in last 3 months",
        priceIncreaseColor: "text-green-600",
        logo: Launch3,
        tag2Text: "Get preferred options @zero brokerage",
    },
];

const subtitles = [
    "Limited launch offers available",
    "Bigger home in the same budget",
    "Hurry! Few units left",
];

const NewlyLaunched = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % subtitles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-[1044px] mx-auto bg-[#F0F9FF] p-4 sm:p-6 md:p-6 lg:p-6 rounded-lg mt-10">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <img src={USP} alt="USP Icon" className="w-12 h-12 object-contain" />
                <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold">Newly launched projects</h3>
                    <p className="text-gray-600 transition-opacity duration-500">
                        {subtitles[currentIndex]}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-lg transition-shadow duration-300"
                    >
                        <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                            NEW ARRIVAL
                        </span>

                        <div className="p-4 mt-5">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                <img
                                    src={project.logo}
                                    alt={project.name}
                                    className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded-full transform transition-transform duration-300 hover:scale-110"
                                />
                                <div className="text-center sm:text-left">
                                    <h4 className="font-semibold">{project.name}</h4>
                                    <p className="text-sm text-gray-500">{project.location}</p>
                                    <p className="font-medium mt-1">{project.price}</p>
                                    <p className={`text-sm mt-1 ${project.priceIncreaseColor} animate-pulse`}>
                                        {project.priceIncrease}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-2 px-4 py-3 border-t border-dashed border-gray-300 bg-gray-50">
                            <img src={Tag2} alt="Tag2" className="w-5 h-5 object-contain" />
                            <p className="text-sm flex-1 text-center sm:text-left">{project.tag2Text}</p>
                            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition w-full sm:w-28 text-center mt-2 sm:mt-0">
                                View Number
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewlyLaunched;
