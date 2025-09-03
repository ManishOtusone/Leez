import React from "react";

const Facilities = () => {
    const facilities = [
        {
            img: "https://www.shutterstock.com/image-photo/parking-residential-building-covered-underground-600nw-1180094569.jpg",
            name: "Car Parking",
        },
        {
            img: "https://www.shutterstock.com/image-photo/photo-property-miami-beach-florida-600nw-2367544263.jpg",
            name: "Swimming Pool",
        },
        {
            img: "data:image/jpeg;base64,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",
            name: "Gym & Fitness",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85EVMOGHEUMy1vX7P0GfobTQekyNFqMQPew&s",
            name: "Restaurant",
        },
        {
            img: "https://f.hubspotusercontent30.net/hubfs/3089887/Imported_Blog_Media/dojo-internet_wifibuilding-600x317-1.png",
            name: "Wi-Fi",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3-KTYNXp6BJCLRT6zwZVqgkzxKPNjAXTRQ&s",
            name: "Pet Friendly",
        },
        {
            img: "https://playo.gumlet.io/AGSPORTSCLUB20210702053211176434/AGSPORTSCLUB1641656057769.jpeg",
            name: "Sports Club",
        },
        {
            img: "https://black-and-white.co.in/wp-content/uploads/2025/01/Dry-Cleaners-1.jpg",
            name: "Laundry Service",
        },
    ];

    const propertyTypes = [
        {
            img: "https://gustavconcept.com/cdn/shop/articles/QIC_SYD_Unispace_QIC_resized_2_copy.jpg?v=1691409476", name: "Office"
        },
        {
            img: "https://www.executivecentre.com/_next/image/?url=https%3A%2F%2Fassets.executivecentre.com%2Fassets%2FBanner-Product-PrivateOffice.jpg&w=3840&q=75", name: "Office Space"
        },
    ];

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Facilities</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {facilities.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 p-4"
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-md mb-3"
                        />
                        <span className="text-gray-800 font-semibold text-sm text-center">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Types</h3>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Types</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {propertyTypes.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 p-4"
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 object-contain rounded-md mb-3"
                        />
                        <span className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg text-center">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>



        </div>
    );
};

export default Facilities;
