import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Prop1 from "../../assets/Buying a Home.png";
import Prop2 from "../../assets/PG & Co-Living.png";

const properties = [
    {
        id: 1,
        title: "Wings Tower",
        location: "Sector 63A, Noida",
        price: "₹ 35000 /month",
        rating: 4.9,
        image: Prop1,
    },
    {
        id: 2,
        title: "Wings Tower",
        location: "Sector 63A, Noida",
        price: "₹ 35000 /month",
        rating: 4.9,
        image: Prop2,
    },
    {
        id: 3,
        title: "Wings Tower",
        location: "Sector 63A, Noida",
        price: "₹ 35000 /month",
        rating: 4.9,
        image: Prop1,
    },
    {
        id: 4,
        title: "Wings Tower",
        location: "Sector 63A, Noida",
        price: "₹ 35000 /month",
        rating: 4.9,
        image: Prop2,
    },
];

const NearbyProperties = () => {
    return (
        <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 shadow-md mt-10">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="bg-blue-900 text-white px-4 py-2 rounded-tr-2xl rounded-bl-2xl">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                        Explore Nearby Properties
                    </h2>
                </div>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="bg-white rounded-2xl shadow hover:shadow-lg transition relative overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={property.image}
                            alt={property.title}
                            className="rounded-t-2xl h-44 sm:h-48 md:h-52 w-full object-cover"
                        />

                        {/* Price Tag */}
                        <div className="absolute bottom-28 left-4 bg-green-600 text-white px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full shadow-md font-semibold">
                            {property.price}
                        </div>

                        {/* Wishlist Button */}
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-100 transition">
                            ❤️
                        </button>

                        {/* Content */}
                        <div className="p-3 sm:p-4">
                            <h3 className="text-base sm:text-lg font-bold">
                                {property.title}
                            </h3>
                            <div className="flex flex-wrap items-center text-gray-600 text-xs sm:text-sm mt-1">
                                <FaStar className="text-yellow-400 mr-1" /> {property.rating}
                                <span className="mx-2 hidden sm:inline">•</span>
                                <FaMapMarkerAlt className="text-blue-500 mr-1" />
                                <span>{property.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NearbyProperties;
