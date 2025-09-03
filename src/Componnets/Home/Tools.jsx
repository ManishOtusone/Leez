import React from "react";
import Tool from "../assets/batch_prediction.png";
import Budget from "../assets/Budget.png";

const Tools = () => {
    return (
        <div className="w-[1044px] h-[300px] bg-[#F0F9FF] mx-auto mt-10 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                    <img src={Tool} alt="Tool" className="w-12 h-12" />
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">Use popular tools</h4>
                        <p className="text-gray-500 text-sm">Go from browsing to buying</p>
                    </div>
                </div>

                <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 hover:text-white transition">
                    View all insights
                </button>
            </div>

            <div className="relative grid grid-cols-4 gap-6 top-12 ">
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer flex flex-col items-center text-center">
                    <img src={Budget} alt="Budget" className="w-16 h-16 mb-3" />
                    <h4 className="font-semibold text-gray-700">Budget Calculator</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-snug">
                        Check your affordability<br /> range for buying home
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer flex flex-col items-center text-center">
                    <img src={Budget} alt="EMI" className="w-16 h-16 mb-3" />
                    <h4 className="font-semibold text-gray-700">EMI Calculator</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-snug">
                        Calculate your home loan<br /> EMI
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer flex flex-col items-center text-center">
                    <img src={Budget} alt="Loan" className="w-16 h-16 mb-3" />
                    <h4 className="font-semibold text-gray-700">Loan Eligibility</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-snug">
                        See what you can borrow <br /> for your home
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer flex flex-col items-center text-center">
                    <img src={Budget} alt="Area" className="w-16 h-16 mb-3" />
                    <h4 className="font-semibold text-gray-700">Area Converter</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-snug">
                        Convert one area into any<br /> other easily
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Tools;
