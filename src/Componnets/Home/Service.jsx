import React from "react";
import Assistence from "../../assets/Assistance.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Service = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-12 mt-8 md:mt-12 md:ml-15">
            <h3 className="text-2xl font-bold mb-2 text-center md:text-left">Our services for owners</h3>
            <p className="text-gray-600 mb-6 text-center md:text-left">Make your life easier with our services</p>

            <div className="bg-[#FFF5E4] w-full max-w-md sm:max-w-lg md:w-[512px] h-auto sm:h-[393.5px] p-6 md:pl-10 rounded-lg shadow-md mx-auto md:mx-0">
                <div className="flex flex-col items-center md:items-start gap-4 mt-5">
                    <img src={Assistence} alt="Assistance" className="w-32 h-32 sm:w-36 sm:h-36 object-contain" />
                    <h3 className="text-xl font-semibold text-center md:text-left">Get assistance in selling faster</h3>
                    <p className="text-gray-700 text-sm text-center md:text-left">
                        Dedicated Relationship manager to help you sell your property <br />
                        faster
                    </p>

                    <button className="group text-blue-500 font-bold py-2 rounded flex items-center gap-2 transition">
                        Explore
                        <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                            <AiOutlineArrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;
