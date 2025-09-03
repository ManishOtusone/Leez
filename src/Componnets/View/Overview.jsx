import React, { useState } from "react";
import { FaBed, FaBath, FaEnvelope, FaPhone, FaStar } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import { HiShieldCheck } from "react-icons/hi";

const Overview = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [showAll, setShowAll] = useState(false);

    const galleryImages = [
        "https://picsum.photos/200/200?1",
        "https://picsum.photos/200/200?2",
        "https://picsum.photos/200/200?3",
        "https://picsum.photos/200/200?4",
        "https://picsum.photos/200/200?5",
        "https://picsum.photos/200/200?6",
    ];

    const reviews = [
        {
            name: "Rahul M.",
            rating: 5,
            comment: "Great location and very well maintained apartment!",
        },
        {
            name: "Priya K.",
            rating: 4,
            comment: "Spacious and clean, but parking is a bit limited.",
        },
        {
            name: "Amit S.",
            rating: 5,
            comment: "Excellent experience! Highly recommend this property.",
        },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md w-full ">
            <div className="flex justify-around border-b mb-6">
                {["overview", "gallery", "review"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 text-lg font-medium capitalize transition ${activeTab === tab
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-500 hover:text-blue-500"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === "overview" && (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                        <div className="flex flex-col items-center bg-gray-50 px-6 py-4 rounded-xl shadow-sm">
                            <MdSquareFoot className="text-blue-600 text-3xl mb-2" />
                            <span className="text-lg font-semibold text-gray-800">1,225</span>
                            <span className="text-gray-500 text-sm">sqft</span>
                        </div>

                        <div className="flex flex-col items-center bg-gray-50 px-6 py-4 rounded-xl shadow-sm">
                            <FaBed className="text-blue-600 text-3xl mb-2" />
                            <span className="text-lg font-semibold text-gray-800">3</span>
                            <span className="text-gray-500 text-sm">Bedrooms</span>
                        </div>

                        <div className="flex flex-col items-center bg-gray-50 px-6 py-4 rounded-xl shadow-sm">
                            <FaBath className="text-blue-600 text-3xl mb-2" />
                            <span className="text-lg font-semibold text-gray-800">2</span>
                            <span className="text-gray-500 text-sm">Bathrooms</span>
                        </div>

                        <div className="flex flex-col items-center bg-gray-50 px-6 py-4 rounded-xl shadow-sm">
                            <HiShieldCheck className="text-blue-600 text-3xl mb-2" />
                            <span className="text-lg font-semibold text-gray-800">4,457</span>
                            <span className="text-gray-500 text-sm">Safety Rank</span>
                        </div>
                    </div>


                </>
            )}

            {activeTab === "gallery" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {!showAll
                        ? galleryImages.slice(0, 4).map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="gallery"
                                className="w-full h-32 object-cover rounded-lg shadow-sm"
                            />
                        ))
                        : galleryImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="gallery"
                                className="w-full h-32 object-cover rounded-lg shadow-sm"
                            />
                        ))}

                    {!showAll && galleryImages.length > 4 && (
                        <div
                            onClick={() => setShowAll(true)}
                            className="w-full h-32 flex items-center justify-center bg-black/40 text-white rounded-lg cursor-pointer text-lg font-semibold"
                        >
                            +{galleryImages.length - 4}
                        </div>
                    )}

                    {showAll && (
                        <div
                            onClick={() => setShowAll(false)}
                            className="w-full h-32 flex items-center justify-center bg-gray-500 text-white rounded-lg cursor-pointer text-sm font-medium"
                        >
                            See Less
                        </div>
                    )}
                </div>
            )}

            {activeTab === "review" && (
                <div className="space-y-4">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 p-4 rounded-xl shadow-sm flex flex-col gap-2"
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="font-semibold text-gray-800">{review.name}</h4>
                                <div className="flex text-yellow-500">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 mt-10">
                    Listing Agent
                </h3>
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="agent"
                            className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                                Sandeep Singh
                            </h4>
                            <p className="text-gray-500 text-sm">Partner</p>
                        </div>
                    </div>

                    <div className="flex gap-4 text-blue-600 text-xl">
                        <FaEnvelope className="cursor-pointer hover:scale-110 transition" />
                        <FaPhone className="cursor-pointer hover:scale-110 transition" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
