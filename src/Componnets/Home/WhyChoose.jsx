import React from 'react';

const benefits = [
    {
        id: 1,
        title: "Why choose LEEZ",
        description: "10,000+ properties are added every day",
    },
    {
        id: 2,
        title: "Verification by Leez team",
        description: "Photos, videos, and other details are verified on location",
    },
    {
        id: 3,
        title: "Large user base",
        description: "High active user count and engagement to find and close deals",
    }
];

const WhyChoose = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
            <p className="text-sm font-semibold text-gray-500 mb-2 text-center">BENEFITS OF LEEZ</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Why Choose Leez</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {benefits.map((benefit) => (
                    <div
                        key={benefit.id}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <p className="text-xl font-bold mb-3">{`0${benefit.id}. ${benefit.title}`}</p>
                        <p className="text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChoose;
