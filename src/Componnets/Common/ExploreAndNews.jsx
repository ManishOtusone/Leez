import React, { useState } from "react";

const ExploreAndNews = ({
    heading,
    subHeading,
    exploreImage,
    exploreSubtitle,
    exploreTitle,
    exploreText,
    buttonText,
    articleSectionTitle,
    articleSectionDesc,
    articles,
    onButtonClick,
}) => {
    const [activeTab, setActiveTab] = useState(
        articles ? Object.keys(articles)[0] : null
    );

    return (
        <div className="mt-16 px-4 sm:px-6 md:px-12">
            {/* Headings */}
            <h3 className="text-center text-[#8993A4] text-sm font-semibold tracking-wide">
                {heading}
            </h3>
            <h4 className="text-center text-2xl sm:text-2xl md:text-3xl font-semibold mt-2">
                {subHeading}
            </h4>

            {/* Explore Section */}
            <div className="mt-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-5xl mx-auto">
                {/* Image */}
                <div className="w-full md:w-[588px] h-auto flex justify-center">
                    <img
                        src={exploreImage}
                        alt={exploreTitle}
                        className="object-contain transform transition duration-300 hover:scale-110 w-full max-w-[588px] rounded"
                    />
                </div>

                {/* Text */}
                <div className="w-full md:w-auto text-center md:text-left">
                    <h5 className="text-[#8993A4] font-semibold text-sm">{exploreSubtitle}</h5>
                    <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mt-2 leading-snug">
                        {exploreTitle}
                    </h3>
                    <p className="text-gray-600 mt-3">{exploreText}</p>
                    <button onClick={onButtonClick} className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                        {buttonText}
                    </button>
                </div>
            </div>

            {/* Articles Section - only if articles exist */}
            {articles && (
                <div className="mt-10 md:mt-16 w-full shadow border border-[#006AC233] bg-white p-4 sm:p-6 md:p-10 rounded-md">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        {/* Left: Section Info */}
                        <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                {articleSectionTitle}
                            </h3>
                            <p className="text-[#42526E] mt-2">{articleSectionDesc}</p>
                        </div>

                        {/* Right: Tabs & Articles */}
                        <div className="md:w-2/3">
                            {/* Tabs */}
                            <ul className="flex overflow-x-auto md:overflow-x-visible gap-4 md:gap-8 border-b border-gray-300 mb-4 text-gray-600 font-medium scrollbar-hide">
                                {Object.keys(articles).map((tab) => (
                                    <li
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`cursor-pointer pb-1 flex-shrink-0 ${activeTab === tab
                                            ? "text-black border-b-2 border-blue-600"
                                            : "hover:text-blue-600"
                                            }`}
                                    >
                                        {tab}
                                    </li>
                                ))}
                            </ul>

                            {/* Articles */}
                            <div className="flex gap-4 md:grid md:grid-cols-2 overflow-x-auto md:overflow-x-visible scrollbar-hide py-2">
                                {articles[activeTab].map((article, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-64 md:w-auto flex gap-3 items-start"
                                    >
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-20 h-20 object-cover rounded-md transform transition duration-300 hover:scale-110 flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-sm md:text-base">
                                                {article.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-500 mt-1">
                                                {article.date}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExploreAndNews;
