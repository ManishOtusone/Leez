import React from "react";
import { useNavigate } from "react-router-dom";
import Commercial from "../../assets/Images/commercial.png";
import Residencial from "../../assets/Images/Residence.png";
import { FaArrowRight } from "react-icons/fa";

const CommercialSpaces = () => {
    const navigate = useNavigate();

    const categories = [
        {
            name: "BUY FOR COMMERCIAL USE",
            img: Commercial,
            title: (
                <>
                    Buy a Commercial <br /> property
                </>
            ),
            description: (
                <>
                    Explore from Office Spaces, Co-working spaces, <br /> Retail Shops,
                    Land, Factories and more
                </>
            ),
            button: "Explore Buying Commercial",
            link: "/all-properties?type=commercial",
        },
        {
            name: "LEASE FOR RESIDENTIAL USE",
            img: Residencial,
            title: (
                <>
                    Lease Residential <br /> property
                </>
            ),
            description:
                "Find apartments, villas, houses available for lease across India",
            button: "Explore Leasing Residential",
            link: "/all-properties?type=rent",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10">
                <p className="text-sm font-semibold text-gray-500">COMMERCIAL SPACES</p>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                    Choose from a wide variety of <br /> commercial properties
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        onClick={() => navigate(cat.link)} // whole card clickable
                        className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group w-full sm:max-w-md md:w-[512px] h-[451px] mx-auto"
                        style={{
                            backgroundImage: `url(${cat.img})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/25 flex flex-col justify-between p-6 sm:p-10 text-white transition-all group-hover:bg-black/40">
                            <div>
                                <p className="text-sm font-semibold mb-1 text-gray-400 mt-5">
                                    {cat.name.toUpperCase()}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                                    {cat.title}
                                </h3>
                                <p className="text-lg text-gray-200">{cat.description}</p>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(cat.link);
                                }}
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-semibold mt-4"
                            >
                                {cat.button}
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommercialSpaces;
