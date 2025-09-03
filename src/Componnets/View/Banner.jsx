import React, { useState, useEffect } from "react";
import { FaPlay, FaHeart, FaShareAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Residence from "../../assets/Images/Residence.png";
import Img1 from "../../assets/Images/Residence.png";
import Img2 from "../../assets/Images/RentFast.png";


const Banner = () => {
    const allImages = [Img1, Img2, Img1, Img2, Img1, Img2, Img1, Img2];
    const [showAll, setShowAll] = useState(false);
    const [visibleCount, setVisibleCount] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const updateVisibleImages = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(3);
            } else {
                setVisibleCount(4);
            }
        };

        updateVisibleImages();
        window.addEventListener("resize", updateVisibleImages);
        return () => window.removeEventListener("resize", updateVisibleImages);
    }, []);

    const openModal = (index) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const prevImage = () => {
        setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setSelectedIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${Residence})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center"
            >
                {/* Top Right Icons */}
                <div className="absolute top-28 right-4 flex gap-3 text-white text-lg sm:text-xl md:text-2xl">
                    <FaPlay className="cursor-pointer hover:scale-110 transition" />
                    <FaHeart className="cursor-pointer hover:scale-110 transition" />
                    <FaShareAlt className="cursor-pointer hover:scale-110 transition" />
                </div>

                {/* Bottom Thumbnails */}
                <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap gap-2 sm:gap-3 bg-white/90 p-2 sm:p-3 rounded-xl shadow-lg">
                    {!showAll
                        ? allImages.slice(0, visibleCount).map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="thumb"
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md cursor-pointer"
                                onClick={() => openModal(idx)}
                            />
                        ))
                        : allImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="thumb"
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md cursor-pointer"
                                onClick={() => openModal(idx)}
                            />
                        ))}

                    {!showAll && allImages.length > visibleCount && (
                        <div
                            onClick={() => setShowAll(true)}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-black/50 text-white rounded-md cursor-pointer text-base sm:text-lg md:text-xl font-semibold"
                        >
                            +{allImages.length - visibleCount}
                        </div>
                    )}

                    {showAll && (
                        <div
                            onClick={() => setShowAll(false)}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-600 text-white rounded-md cursor-pointer text-sm sm:text-base md:text-lg font-medium"
                        >
                            See Less
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Slider */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <button
                        className="absolute top-5 right-5 text-white text-3xl"
                        onClick={closeModal}
                    >
                        <FaTimes />
                    </button>

                    <button
                        className="absolute left-5 text-white text-4xl"
                        onClick={prevImage}
                    >
                        <FaChevronLeft />
                    </button>

                    <img
                        src={allImages[selectedIndex]}
                        alt="slider"
                        className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
                    />

                    <button
                        className="absolute right-5 text-white text-4xl"
                        onClick={nextImage}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </>
    );
};

export default Banner;
