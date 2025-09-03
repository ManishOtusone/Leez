import React from "react";
import { FaStar } from "react-icons/fa";

const PropertyDetails = () => {
    return (
        <div className="bg-white p-4 sm:p-6 md:px-10 rounded-2xl shadow-md w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500 text-base sm:text-lg" />
                    <span className="text-blue-500 font-medium text-sm sm:text-base">
                        4.9{" "}
                        <span className="text-gray-500 text-xs sm:text-sm">
                            (6.8K reviews)
                        </span>
                    </span>
                </div>

                <span className="bg-blue-50 text-blue-500 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
                    Apartment
                </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-3">Woodland Apartment</h2>
            <p className="text-gray-500 text-sm sm:text-base">
                1012 Ocean Avenue, Noida Sector 2, India
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
                <div className="flex flex-col items-center bg-gray-50 px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-sm">
                    <span className="text-gray-500 text-xs sm:text-sm">Listed for</span>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                        Rent
                    </span>
                </div>

                <div className="flex flex-col items-center bg-gray-50 px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-sm">
                    <span className="text-gray-500 text-xs sm:text-sm">Condition</span>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                        Average
                    </span>
                </div>

                <div className="flex flex-col items-center bg-gray-50 px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-sm">
                    <span className="text-gray-500 text-xs sm:text-sm">Furnishing</span>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                        Semi-Furnished
                    </span>
                </div>

                <div className="flex flex-col items-center bg-gray-50 px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-sm">
                    <span className="text-gray-500 text-xs sm:text-sm">Listed On</span>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                        23-05-2023
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
