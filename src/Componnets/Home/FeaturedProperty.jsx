import React, { useRef, useState, useEffect } from "react";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Residence from "../../assets/Images/Residence.png";
import Brick from "../../assets/Bricks Marvella.png";
import { useNavigate } from "react-router-dom";


const properties = [
    { id: 1, title: "Sky Apartment", location: "Sector 63A, Noida", price: "$1290 / month", image: Residence },
    { id: 2, title: "Ananda Apartment", location: "Sector 16A, Noida", price: "$490 / month", image: Brick },
    { id: 3, title: "Shivalik Apartment", location: "Sector 21, Noida", price: "$1690 / month", image: Residence },
    { id: 4, title: "Sky Apartment", location: "Sector 63A, Noida", price: "$1290 / month", image: Brick },
    { id: 5, title: "Sky Apartment", location: "Sector 63A, Noida", price: "$1290 / month", image: Residence },
    { id: 6, title: "Sky Apartment", location: "Sector 63A, Noida", price: "$1290 / month", image: Brick },
];

const FeaturedProperty = () => {
    const scrollRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    const navigate = useNavigate();

    const updateMaxScroll = () => {
        if (scrollRef.current) {
            setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
        }
    };

    useEffect(() => {
        updateMaxScroll();
        window.addEventListener("resize", updateMaxScroll);
        return () => window.removeEventListener("resize", updateMaxScroll);
    }, []);

    const handleScroll = () => {
        if (scrollRef.current) {
            setScrollPos(scrollRef.current.scrollLeft);
        }
    };

    const scroll = (dir) => {
        const container = scrollRef.current;
        if (!container) return;

        const card = container.querySelector(".property-card");
        if (card) {
            const cardWidth = card.clientWidth + 24; 
            container.scrollBy({
                left: dir === "left" ? -cardWidth : cardWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full my-10 px-4 sm:px-6 md:px-12 mt-15">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-semibold ">Featured Property</h2>
            </div>

            {scrollPos > 0 && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-100"
                >
                    <FaChevronLeft size={20} />
                </button>
            )}

            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-2"
            >
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="property-card flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] lg:w-[28%] bg-white rounded-xl shadow hover:shadow-lg transition " onClick={() => navigate('/view')}
                    >
                        <img
                            src={property.image}
                            alt={property.title}
                            className="rounded-t-xl h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{property.title}</h3>
                            <p className="flex items-center text-gray-600 text-sm">
                                <FaMapMarkerAlt className="mr-2 text-blue-500" /> {property.location}
                            </p>
                            <p className="mt-2 text-blue-700 font-semibold">{property.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {scrollPos < maxScroll && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-100"
                >
                    <FaChevronRight size={20} />
                </button>
            )}
        </div>
    );
};

export default FeaturedProperty;
