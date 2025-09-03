import React from "react";

const QuickLinks = () => {
    const linksData = [
        {
            city: "Delhi",
            properties: [
                "Flats for rent in Delhi / NCR",
                "House for rent in Delhi / NCR",
                "Shop for rent in Delhi / NCR",
            ],
        },
        {
            city: "Gurgaon",
            properties: [
                "Flats for rent in Gurgaon",
                "House for rent in Gurgaon",
                "Shop for rent in Gurgaon",
            ],
        },
        {
            city: "Noida",
            properties: [
                "Flats for rent in Noida",
                "House for rent in Noida",
                "Shop for rent in Noida",
            ],
        },
    ];

    return (
        <div className="mt-16 max-w-6xl px-4 sm:px-6 lg:px-12 mx-auto">
            <div className="mb-8">
                <h3 className="text-2xl font-bold">Curated Quick Links</h3>
                <p className="text-gray-600 mt-2">Rent / Lease</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {linksData.map((link, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-lg mb-4">
                            Properties for rent in {link.city}
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            {link.properties.map((property, i) => (
                                <li
                                    key={i}
                                    className="hover:text-blue-600 transition cursor-pointer"
                                >
                                    {property}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuickLinks;
