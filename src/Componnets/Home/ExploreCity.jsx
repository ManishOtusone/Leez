import React from "react";
import Delhi from "../../assets/Delhi.png";
import Bangalore from "../../assets/Bangalore.png";
import Pune from "../../assets/Pune.png";
import Mumbai from "../../assets/Mumbai.png";
import Hyderabad from "../../assets/Hyderabad.png";
import Kolkata from "../../assets/Bangalore.png";

const cities = [
    { name: "Old Delhi", img: Delhi, properties: "233000+" },
    { name: "Noida", img: Bangalore, properties: "23400+" },
    { name: "Gurgaon", img: Pune, properties: "3000+" },
    { name: "Gaziabad", img: Mumbai, properties: "43000+" },
    { name: "New Delhi", img: Hyderabad, properties: "258800+" },
    { name: "Greater Noida", img: Kolkata, properties: "97655+" },
];

const ExploreCity = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <p className="text-sm font-semibold text-gray-500 mb-2">TOP CITIES</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Explore Real Estate in Popular Indian Cities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cities.map((city, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                    >
                        <img
                            src={city.img}
                            alt={city.name}
                            className="w-20 h-20 object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-lg">{city.name}</h4>
                            <p className="text-gray-500 text-sm">{city.properties} Properties</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreCity;
