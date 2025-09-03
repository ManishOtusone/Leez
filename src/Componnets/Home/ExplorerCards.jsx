import React, { useRef, useState, useEffect } from "react";
import BuyingHome from "../../assets/Images/Coliving.png";
import RentingHome from "../../assets/Images/Rent.png";
import SellRent from "../../assets/Images/Sale.png";
import Explore from "../../assets/Explore Insights.png";
import commercial from "../../assets/Images/commercial.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ExplorerCards = () => {
    const scrollRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    const cards = [
        { img: RentingHome, text: "Renting a home" },
        { img: SellRent, text: "Sell/Rent your property" },
        { img: Explore, text: "Explore insights" },
        { img: BuyingHome, text: "PG and Co-livings" },
        { img: commercial, text: "Buying commercial spaces" },
    ];

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
        const scrollAmount = container.clientWidth * 0.8;
        container.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    };

    return (
        <div className="relative w-full my-20 px-4 sm:px-6 md:px-12">
            <h5 className="text-[#8993A4] text-center font-semibold mb-8 text-sm sm:text-base md:text-lg">
                GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
            </h5>

            {scrollPos > 0 && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-100 flex items-center justify-center"
                >
                    <FaChevronLeft size={20} />
                </button>
            )}

            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar py-2"
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[250px] lg:w-[280px] flex flex-col items-center"
                    >
                        <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden rounded-md">
                            <img
                                src={card.img}
                                alt={card.text}
                                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <p className="mt-2 text-center text-sm sm:text-base md:text-lg">{card.text}</p>
                    </div>
                ))}

            </div>

            {scrollPos < maxScroll && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-100 flex items-center justify-center"
                >
                    <FaChevronRight size={20} />
                </button>
            )}
        </div>
    );
};

export default ExplorerCards;
